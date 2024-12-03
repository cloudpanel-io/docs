---
id: cakephp
title: CakePHP
sidebar_label: CakePHP
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, **CloudPanel** üzerinde [CakePHP](https://cakephp.org/) kurulum rehberini bulabilirsiniz.

## CakePHP Sitesi Oluşturma

### CloudPanel Üzerinden

1. **+ Site Ekle** butonuna tıklayın ve ardından **PHP Sitesi Oluştur** seçeneğine tıklayın.

<img class="border" alt="Bir PHP Sitesi Oluştur" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. **CakePHP** Uygulamasını seçin, **Alan Adı**, **Site Kullanıcısı**, **Site Kullanıcı Şifresi** bilgilerini girin ve **Oluştur** butonuna tıklayın.

<img class="border" alt="Bir CakePHP Sitesi Oluştur" src={useBaseUrl('img/php/applications/cakephp/create-site-form.png?v=0.0.2')} />

### CloudPanel CLI Üzerinden

Komut satırını seviyorsanız, aşağıdaki komutu **root kullanıcısı** olarak çalıştırarak bir **CakePHP Sitesi** oluşturabilirsiniz.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='CakePHP 5' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## CakePHP Projesi Oluşturma

1. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

2. **htdocs** dizinine gidin ve **CloudPanel** tarafından oluşturulan dizini silin:

```bash
cd htdocs && rm -rf www.domain.com
```

3. **Composer** kullanarak bir **CakePHP Projesi** oluşturun:

```bash
php8.2 /usr/local/bin/composer create-project --prefer-dist cakephp/app:~5.0 www.domain.com
```

4. **Tamamlandı!** Tarayıcınızda sitenizi açarak **Welcome to CakePHP 5** sayfasını görebilirsiniz.

<img class="border" alt="CakePHP'ye Hoş Geldiniz" src={useBaseUrl('img/php/applications/cakephp/welcome-to-cake.png?v=0.0.3')} />
