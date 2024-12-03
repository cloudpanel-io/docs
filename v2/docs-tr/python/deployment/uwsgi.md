---
id: uwsgi
title: Python uygulamalarının uWSGI ile dağıtımı
sidebar_label: uWSGI ile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, **uWSGI** kullanarak [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) ve **NGINX** ile bir **Python Uygulaması** dağıtımı için **adım adım bir rehber** bulabilirsiniz.

## Bir Python Sitesi Oluşturma

[Bir Python Sitesi Oluşturun](../../../frontend-area/add-site/#create-a-python-site) ve doğru **Python Sürümünü** seçtiğinizden ve **Uygulama Portunun** doğru olduğundan emin olun.

## uWSGI Yapılandırması Oluşturma

Bir **Python Uygulamasını** üretim ortamında çalıştırmak için [The uWSGI Project](https://uwsgi-docs.readthedocs.io/en/latest/) kullanıyoruz. <br />
Bu, **Uygulamanın** bir yeniden başlatmadan sonra da kullanılabilir olmasını sağlar.

1. **Root Kullanıcısı** ile [SSH](../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın ve **uwsgi** uygulama dizinine gidin:

```bash
cd /etc/uwsgi/apps-enabled/
```

2. **domain.uwsgi.ini** gibi bir yapılandırma dosyası oluşturun ve aşağıdaki örnek yapılandırmayı ihtiyaçlarınıza göre değiştirin:

:::warning uWSGI Yapılandırması
**socket**, **wsgi-file**, **uid** ve **gid** değerlerini değiştirin. <br />
Daha fazla ayar için resmi [uWSGI Dokümantasyonu](https://uwsgi-docs.readthedocs.io/en/latest/Configuration.html) inceleyebilirsiniz.

**Django Uygulamaları**nın **uWSGI** ile nasıl dağıtılacağı hakkında bilgi için [Django Dokümantasyonu](https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/uwsgi/) adresine göz atabilirsiniz.
:::

```
[uwsgi]
plugins       = python3
master        = true
protocol      = uwsgi
socket        = 127.0.0.1:8090
wsgi-file     = /home/site-user/htdocs/python-project/wsgi.py

# Eğer virtualenv kullanıyorsanız, aşağıdakini açın:
#virtualenv = /home/site-user/htdocs/python-project

# OAuth/OpenID için gerekli
buffer-size   = 8192

# Bellek tüketimi çok fazla olduğunda yeniden yükle
reload-on-rss = 250

# Yoğun siteler için işçi sayısını artır
workers       = 4

# Hatalar için Sentry kullanımı için iş parçacıklarını etkinleştir
enable-threads = true

# Çocuk süreçlerin dosya tanımlayıcılarına ihtiyacı yok
close-on-exec = true

# Varsayılan 0000 umask'ı önle
umask = 0022

# site-user olarak çalıştır
uid = site-user
gid = site-user

# Harakiri modunu etkinleştir (istekleri belirli bir süreden sonra öldür)
# harakiri = 3600
# harakiri-verbose = true

# uWSGI istatistik sunucusunu etkinleştir
# stats = :1717
# stats-http = true

# Müşteri bağlantı kesilmeleri nedeniyle oluşan bazı hataları kaydetme
ignore-sigpipe = true
ignore-write-errors = true
disable-write-exception = true
```

## Vhost Değişikliği

1. **Sitenizin** [Vhost](../../frontend-area/vhost/) ayarlarına gidin.

Aşağıda varsayılan **vhost**'u görebilirsiniz. Bu, tüm istekleri ters proxy aracılığıyla **Uygulama Portuna** yönlendirir. <br />
Bu, çoğu **Python Uygulaması** tarafından sağlanan **yerleşik sunucuyu** kullandığınız geliştirme ortamları için kullanışlıdır.

```
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  {{ssl_certificate_key}}
  {{ssl_certificate}}
  server_name www.domain.com;
  {{root}}

  {{nginx_access_log}}
  {{nginx_error_log}}

  if ($scheme != "https") {
    rewrite ^ https://$host$uri permanent;
  }

  location ~ /.well-known {
    auth_basic off;
    allow all;
  }

  {{settings}}

  index index.html;

  location /uwsgi {
    include uwsgi_params;
    uwsgi_read_timeout 3600;
    #uwsgi_pass unix:///run/uwsgi/app/weblate/socket;
    uwsgi_pass 127.0.0.1:{{app_port}};
  }

  location / {
    proxy_pass http://127.0.0.1:{{app_port}}/;
    proxy_http_version 1.1;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Server $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_pass_request_headers on;
    proxy_max_temp_file_size 0;
    proxy_connect_timeout 900;
    proxy_send_timeout 900;
    proxy_read_timeout 900;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
    proxy_temp_file_write_size 256k;
  }

  location ~* ^.+\.(css|js|jpg|jpeg|gif|png|ico|gz|svg|svgz|ttf|otf|woff|woff2|eot|mp4|ogg|ogv|webm|webp|zip|swf)$ {
    add_header Access-Control-Allow-Origin "*";
    expires max;
    access_log on;
  }

  if (-f $request_filename) {
    break;
  }
}
```

2. Varsayılan vhost'u aşağıdaki ile değiştirin ve **location /**'ı tüm istekleri **uWSGI Servisine** yönlendirecek şekilde değiştirin.

:::warning server_name
**server_name** değerini kendi alan adınızla değiştirin.
:::

```
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  {{ssl_certificate_key}}
  {{ssl_certificate}}
  server_name www.domain.com;
  {{root}}

  {{nginx_access_log}}
  {{nginx_error_log}}

  if ($scheme != "https") {
    rewrite ^ https://$host$uri permanent;
  }

  location ~ /.well-known {
    auth_basic off;
    allow all;
  }

  {{settings}}

  index index.html;

  location / {
    include uwsgi_params;
    uwsgi_read_timeout 3600;
    #uwsgi_pass unix:///run/uwsgi/app/weblate/socket;
    uwsgi_pass 127.0.0.1:{{app_port}};
  }

  if (-f $request_filename) {
    break;
  }
}
```

## uwsgi Servisini Yeniden Başlatma

Yapılandırmamızı uygulamak için **systemctl** ile **uwsgi** servisini yeniden başlatın.

```bash
systemctl restart uwsgi
```

## Servis Kontrolü

**uwsgi**'nin istediğimiz portu (örn. **8090**) dinlediğinden emin olmak için **netstat** kullanın:

```bash
netstat -tulpn |grep uwsgi
```

Her şey doğruysa, aşağıdaki gibi bir çıktı görmelisiniz:

```bash
tcp 16 0 127.0.0.1:8090 0.0.0.0:* LISTEN 8872/uwsgi
```

**Sunucunuzu yeniden başlatın** ve uygulamanızın beklediğiniz gibi çalıştığını doğrulayın.

## Günlükler

Hata ayıklama için, **/var/log/uwsgi/app/** dizininde bulunan **uwsgi** günlüklerini kontrol edebilirsiniz.
