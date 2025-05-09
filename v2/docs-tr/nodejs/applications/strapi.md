---
id: strapi
title: Strapi 4
sidebar_label: Strapi 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, **CloudPanel** üzerinde [Strapi 4](https://strapi.io/) kurulum ve yapılandırma rehberini bulabilirsiniz.

## Node.js Sitesi Oluşturma

### CloudPanel Üzerinden

1. **+ Site Ekle** butonuna tıklayın ve ardından **Node.js Sitesi Oluştur** seçeneğine tıklayın.

<img class="border" alt="Node.js Sitesi Ekle" src={useBaseUrl('img/nodejs/applications/strapi/add-site.png')} />

2. **Alan Adı**, **Node.js Sürümü** ve **Uygulama Portunu** girin, ardından **Oluştur** butonuna tıklayın.

<img alt="Node.js Site Formu" class="border" src={useBaseUrl('img/nodejs/applications/strapi/add-site-form.png?v=0.0.2')} />

### CloudPanel CLI Üzerinden

Komut satırını tercih ediyorsanız, aşağıdaki komutu **root kullanıcısı** olarak çalıştırarak bir **Node.js Sitesi** oluşturabilirsiniz.

```bash
clpctl site:add:nodejs --domainName=www.domain.com --nodejsVersion=18 --appPort=1337 --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Strapi Projesi Oluşturma

1. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

2. **htdocs** dizinine gidin ve **CloudPanel** tarafından oluşturulan dizini silin:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Bir **Strapi Projesi** oluşturun:

```bash
npx create-strapi-app@latest www.domain.com
```

### Yönetici Panelini Derleme

**Yönetici Panelini** derlemek için Strapi kurulumunun **kök dizinine** gidin:

```bash
cd htdocs/www.domain.com/
```

ve **NODE_ENV=production** ile **npm run build** komutunu çalıştırın:

```bash
NODE_ENV=production npm run build
```

### Strapi'yi Çalıştırma

**Strapi**'yi çalıştırmak için Strapi kurulumunun **kök dizinine** gidin:

```bash
cd htdocs/www.domain.com/
```

ve **NODE_ENV=production** ile **npm start** komutunu çalıştırın:

```bash
NODE_ENV=production npm start
```

Çıktı şu şekilde görünecektir:

<img class="border" alt="NPM start" src={useBaseUrl('img/nodejs/applications/strapi/npm-start.png')} />

Bir kullanıcı oluşturmak için, artık tarayıcınızda **Strapi Kurulumunu** şu adreste açabilirsiniz: **https://www.domain.com/admin**.

<img class="border" alt="Strapi'ye Hoş Geldiniz" src={useBaseUrl('img/nodejs/applications/strapi/welcome-to-strapi-form.png')} />

## Üretim Dağıtımı

**Strapi**'yi üretim ortamında çalıştırmak için, node süreçlerini yöneten bir **süreç yöneticisine** (örneğin **pm2**) ihtiyaç vardır.

Adım adım rehber için [Node.js Dağıtımı](../../../nodejs/deployment/pm2/) sayfasını takip edin.
