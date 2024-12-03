---
id: ghost
title: Ghost
sidebar_label: Ghost
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, **CloudPanel** üzerinde [Ghost](https://ghost.org/) kurulum ve yapılandırma rehberini bulabilirsiniz.

## Node.js Sitesi Oluşturma

### CloudPanel Üzerinden

1. **+ Site Ekle** butonuna tıklayın ve ardından **Node.js Sitesi Oluştur** seçeneğine tıklayın.

<img class="border" alt="Node.js Sitesi Ekle" src={useBaseUrl('img/nodejs/applications/strapi/add-site.png')} />

2. **Alan Adı**, **Node.js Sürümü** ve **Uygulama Portunu** girin, ardından **Oluştur** butonuna tıklayın.

<img alt="Ghost Site Formu Ekle" class="border" src={useBaseUrl('img/nodejs/applications/ghost/add-site-form.png?v=0.0.2')} />

### CloudPanel CLI Üzerinden

Komut satırını tercih ediyorsanız, aşağıdaki komutu **root kullanıcısı** olarak çalıştırarak bir **Node.js Sitesi** oluşturabilirsiniz.

```bash
clpctl site:add:nodejs --domainName=www.domain.com --nodejsVersion=18 --appPort=2368 --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Ghost Projesi Oluşturma

1. Bir [Veritabanı](../../../frontend-area/databases/#adding-a-database) oluşturun ve **Veritabanı Adı**, **Veritabanı Kullanıcı Adı**, **Veritabanı Kullanıcı Şifresi** bilgilerini kopyalayın.

2. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

3. **Ghost CLI**'yi yükleyin:

```bash
npm install ghost-cli@latest -g
```

4. **DATABASE_USERNAME**, **DATABASE_USER_PASSWORD**, **DATABASE_NAME**, **SITE_USER** ve **DOMAIN** değerlerini değiştirin ve **Ghost**'u yükleyin:

```bash
ghost install --db mysql --port 2368 \
--dbhost 127.0.0.1 \
--dbuser $DATABASE_USER_NAME \
--dbpass $DATABASE_USER_PASSWORD \
--dbname $DATABASE_NAME \
--process local \
--no-setup-linux-user \
--no-setup-ssl \
--no-setup-nginx \
--dir /home/$SITE_USER/htdocs/$DOMAIN/
```

5. **Blog URL'sini** örneğin **https://www.domain.com/** olarak girin.

<img alt="Ghost - Blog URL Gir" class="border" src={useBaseUrl('img/nodejs/applications/ghost/enter-blog-url.png')} />

6. **Ghost**'u başlatmak için **Y** ile onaylayın.

<img alt="Ghost Başlatma Diyaloğu" class="border" src={useBaseUrl('img/nodejs/applications/ghost/start-ghost-dialog.png')} />

7. Kurulum tamamlandı. Tarayıcınızda sitenizi açın ve bir yönetici kullanıcı oluşturun.

<img alt="Ghost'a Hoş Geldiniz" class="border" src={useBaseUrl('img/nodejs/applications/ghost/welcome-to-ghost.png')} />

## Dağıtım

**Ghost**, bir yeniden başlatmadan sonra çalıştırılmalıdır. Yeniden başlatmadan sonra çalışacak bir komut dosyası oluşturacağız.

1. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

2. **scripts** dizinini oluşturun:

```bash
mkdir ~/scripts/
```

3. Bir **başlatma komut dosyası** oluşturun:

```bash
nano ~/scripts/ghost-start.sh
```

**--dir** değerini düzenleyin ve komut dosyasını kaydedin:

```bash
#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Bu nvm'yi yükler
ghost start --dir $HOME/htdocs/ghost.moby.io/ --no-setup-linux-user > $HOME/logs/ghost.log &
```

4. Komut dosyasına çalıştırma izinlerini verin:

```bash
chmod 700 ~/scripts/ghost-start.sh
```

5. **site kullanıcı** için **crontab** dosyasını düzenleyin:

```bash
crontab -e
```

6. **SITE_USER** değişkenini kendi **site kullanıcınızla** değiştirin ve aşağıdaki satırı ekleyin:

```bash
@reboot /home/$SITE_USER/scripts/ghost-start.sh &> /dev/null
```

7. Sunucunuzu yeniden başlatın ve **Ghost**'un beklendiği gibi çalışıp çalışmadığını test edin.
