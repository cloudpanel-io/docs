---
id: pm2
title: PM2 ile Node.js Dağıtımı
sidebar_label: PM2 ile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Node.js** uygulamalarını üretim ortamında çalıştırmak için, node süreçlerini yöneten bir **süreç yöneticisine** ihtiyacınız vardır.

Bu sayfada, **Node.js Uygulaması** için üretim ortamına uygun bir yapılandırma yapmak üzere [PM2](https://pm2.keymetrics.io/) kullanımını açıklıyoruz.

## PM2

[PM2](https://pm2.keymetrics.io/), uygulamanızı yönetmenize ve çevrimiçi tutmanıza yardımcı olan bir daemon süreç yöneticisidir.

### Kurulum

1. **Site Kullanıcısı** ile [SSH](../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@instance-ip-address
```

2. Projenizin **kök dizinine** gidin:

```bash
cd htdocs/www.domain.com/
```

3. En son sürüm **pm2**'yi **npm** ile yükleyin:

```bash
npm install pm2@latest -g
```

### Uygulamayı Başlatma

Uygulamanızı **pm2** üzerinden başlatmak için aşağıdaki komutu kullanın:

:::warning Uygulama Adı
**app-name** değişkenini uygulamanızın adıyla değiştirin.
:::

```bash
pm2 start npm --name $app-name -- start
```

Uygulamanız artık **pm2** aracılığıyla çalışıyor.

<img alt="PM2 NPM Başlatma" src={useBaseUrl('img/nodejs/applications/strapi/pm2-start-npm.png')} />

### Yapılandırmayı Kaydetme

**pm2** yapılandırmasını kaydetmek için aşağıdaki **save** komutunu çalıştırın:

```bash
pm2 save
```

### Cron İşlemi Ekleme

Sunucunuz yeniden başlatıldığında **uygulamanızın** çalışmaya devam etmesini sağlamak için bir cron işi yapılandırmanız gereklidir.

1. Öncelikle **PATH** değişkeninin çıktısını kopyalayın:

```bash
echo $PATH
```

Çıktı aşağıdakine benzer görünecektir:

```bash
/home/john-doe/.nvm/versions/node/v14.19.3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

2. **site kullanıcı** için **crontab** dosyasını düzenleyin:

```bash
crontab -e
```

3. Aşağıdaki satırları ekleyin:

```bash
PATH=$PASTE_THE_OUTPUT_OF_$PATH
@reboot pm2 resurrect &> /dev/null
```

**Örnek yapılandırma**

<img alt="PM2 Cronjob Örneği" src={useBaseUrl('img/nodejs/applications/strapi/cronjob-example.png')} />

4. Sunucunuzu yeniden başlatın ve uygulamanın **çalışıp çalışmadığını** kontrol edin:

```bash
pm2 status
```

Durum **online** olmalıdır; bu, uygulamanızın yeniden başlatmadan sonra çalıştığını doğrular.

<img alt="PM2 Cronjob Örneği" src={useBaseUrl('img/nodejs/applications/strapi/pm2-status.png')} />

### Sorun Giderme

[PM2](https://pm2.keymetrics.io/), uygulamanın çıktısını görmek ve sorunları gidermeye yardımcı olmak için bir [logs](https://pm2.keymetrics.io/docs/usage/log-management/) komutu sağlar.

```bash
pm2 logs
```
