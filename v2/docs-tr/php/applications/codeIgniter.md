---
id: codeigniter
title: CodeIgniter
sidebar_label: CodeIgniter
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, **CloudPanel** üzerinde [CodeIgniter](https://codeigniter.com/) kurulum rehberini bulabilirsiniz.

## CodeIgniter Sitesi Oluşturma

### CloudPanel Üzerinden

1. **+ Site Ekle** butonuna tıklayın ve ardından **PHP Sitesi Oluştur** seçeneğine tıklayın.

<img class="border" alt="Bir PHP Sitesi Oluştur" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. **CodeIgniter 4** Uygulamasını seçin, **Alan Adı**, **Site Kullanıcısı**, **Site Kullanıcı Şifresi** bilgilerini girin ve **Oluştur** butonuna tıklayın.

<img class="border" alt="Bir CodeIgniter Sitesi Oluştur" src={useBaseUrl('img/php/applications/codeigniter/create-site-form.png')} />

### CloudPanel CLI Üzerinden

Komut satırını seviyorsanız, aşağıdaki komutu **root kullanıcısı** olarak çalıştırarak bir **CodeIgniter Sitesi** oluşturabilirsiniz.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='CodeIgniter 4' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## CodeIgniter Projesi Oluşturma

1. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

2. **htdocs** dizinine gidin ve **CloudPanel** tarafından oluşturulan dizini silin:

```bash
cd htdocs && rm -rf www.domain.com
```

3. **Composer** kullanarak bir **CodeIgniter Projesi** oluşturun:

```bash
php8.2 /usr/local/bin/composer create-project codeigniter4/appstarter www.domain.com
```

4. **Tamamlandı!** Tarayıcınızda sitenizi açarak **Welcome to CodeIgniter** sayfasını görebilirsiniz.

<img class="border" alt="CodeIgniter'e Hoş Geldiniz" src={useBaseUrl('img/php/applications/codeigniter/welcome-to-codeigniter.png?v=0.0.2')} />
