---
id: uwsgi
title: Python deployment with uwsgi
sidebar_label: With uwsgi
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you will find a **step-by-step guide** on deploying a **Python Application** using [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/) with **NGINX**.

## Creating a Python Site

[Create a Python Site](../../../frontend-area/add-site/#create-a-python-site) with the right **Python Version** and ensure the **App Port** is correct.

## Creating a uWSGI Config

For running a **Python Application** in production, we use [The uWSGI Project](https://uwsgi-docs.readthedocs.io/en/latest/),
which ensures that our **Application** is available after a reboot.

1. Log in via [SSH](../../frontend-area/ssh-ftp/#ssh-login) with the **Root User** and go to the **uwsgi** apps directory:

```bash
cd /etc/uwsgi/apps-enabled/
```

2. Create a configuration file like **domain.uwsgi.ini** and modify the example configuration below to your needs:

:::warning uWSGI Configuration
Change the values of **socket**, **wsgi-file**, **uid**, and **gid**. <br />
You may want to look at the official [uWSGI Documentation](https://uwsgi-docs.readthedocs.io/en/latest/Configuration.html) for further settings.

On the [Django Documentation](https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/uwsgi/), you find helpful information about deploying **Django Applications** via **uWSGI**.
:::

```
[uwsgi]
plugins       = python3
master        = true
protocol      = uwsgi
socket        = 127.0.0.1:8090
wsgi-file     = /home/site-user/htdocs/python-project/wsgi.py

# In case you're using virtualenv uncomment this:
#virtualenv = /home/site-user/htdocs/python-project

# Needed for OAuth/OpenID
buffer-size   = 8192

# Reload when consuming too much of memory
reload-on-rss = 250

# Increase number of workers for heavily loaded sites
workers       = 4

# Enable threads for Sentry error submission
enable-threads = true

# Child processes do not need file descriptors
close-on-exec = true

# Avoid default 0000 umask
umask = 0022

# Run as weblate user
uid = site-user
gid = site-user

# Enable harakiri mode (kill requests after some time)
# harakiri = 3600
# harakiri-verbose = true

# Enable uWSGI stats server
# stats = :1717
# stats-http = true

# Do not log some errors caused by client disconnects
ignore-sigpipe = true
ignore-write-errors = true
disable-write-exception = true
```

## Vhost Change

1. Go to the [Vhost](../../frontend-area/vhost/) of your **site**.

Below you see the default **vhost**. It's forwarding all requests via reverse proxy to the **App Port**. <br />
It's useful for development where you use the **built-in server**, provided by most the **Python Applications**.

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

2. Replace the default vhost with the following one, replacing the **location /** to forward all requests to the **uWSGI Service**.

:::warning server_name
Replace the value of **server_name** with your domain.
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

  #location ~* ^.+\.(css|js|jpg|jpeg|gif|png|ico|gz|svg|svgz|ttf|otf|woff|woff2|eot|mp4|ogg|ogv|webm|webp|zip|swf)$ {
  #  add_header Access-Control-Allow-Origin "*";
  #  expires max;
  #  access_log on;
  #}

  if (-f $request_filename) {
    break;
  }
}
```

## Restart uwsgi Service

Restart the **uwsgi** service via **systemctl** to apply our configuration.

```bash
systemctl restart uwsgi
```

## Service Check

To check if **uwsgi** is listening on our requested port e.g., **8090**, we use **netstat**:

```bash
netstat -tulpn |grep uwsgi
```

If everything is correct, you should see an output like this:

```bash
tcp 16 0 127.0.0.1:8090 0.0.0.0:* LISTEN 8872/uwsgi
```

**Reboot** your instance to confirm that your application is working as expected.

## Logs

For troubleshooting, you can check the **uwsgi** logs, located in **/var/log/uwsgi/app/**.