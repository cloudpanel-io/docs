---
id: building-a-php-extension
title: Bir PHP Uzantısı Oluşturma
sidebar_label: Bir PHP Uzantısı Oluşturma
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, belirli bir **PHP Sürümü** için **PHP Uzantısı** oluşturmanın **adım adım rehberini** bulabilirsiniz.

## Bir PHP Uzantısı Oluşturma

1. Sunucunuzun bir **yedeklemesini** alın.

2. **PHP Sürümü** için gerekli **dev** paketini yükleyin.

```
apt update && apt -y install php8.4-dev
```

3. [https://pecl.php.net/](https://pecl.php.net/) adresine gidin ve [ssh2](https://pecl.php.net/package/ssh2) gibi istediğiniz uzantıyı arayın:

<img class="border" src={useBaseUrl('img/php/guides/building-a-php-extension/download-extension.png?v=1')} />

4. Uzantıyı **cURL** ile indirin:

```
curl -O https://pecl.php.net/get/ssh2-1.4.1.tgz
```

5. **tgz** dosyasını çıkarın:

```
tar xf ssh2-1.4.1.tgz
```

6. Uzantıyı **phpize** ile hazırlayın:

```
cd ssh2-1.4.1
phpize8.4
```

7. Uzantıyı **derleyin** ve **oluşturun**:

```
./configure --with-php-config=/usr/bin/php-config8.4
make
make install
```

8. Uzantıyı **CLI** ve **FPM** için **php.ini** dosyasına kaydedin:

**CLI**

```
nano /etc/php/8.4/cli/php.ini
```

**Dosyanın sonuna şu satırı ekleyin:**

```
extension=ssh2.so
```

**FPM**

```
nano /etc/php/8.4/fpm/php.ini
```

**Dosyanın sonuna şu satırı ekleyin:**

```
extension=ssh2.so
```

9. **PHP-FPM** servisini yeniden başlatın:

```
systemctl restart php8.4-fpm
```

## Test Etme

**PHP Uzantısını** kaydettikten sonra, uzantının **CLI** ve **FPM** için doğru şekilde yüklendiğini kontrol edebilirsiniz.

### CLI

Uzantının yüklü olup olmadığını kontrol etmek için **grep** kullanabilirsiniz:

```
php8.4 -m |grep 'ssh2' 
```

Eğer bir çıktı almazsanız, uzantı **YÜKLENMEMİŞTİR**.

### FPM

Uzantının **FPM** için yüklü olup olmadığını kontrol etmek için **phpinfo**'yu kullanabilirsiniz.

1. **root dizininde** **t.php** dosyasını oluşturun.

2. Dosyaya aşağıdaki içeriği ekleyin:

```php
<?php
phpinfo();
```

3. **t.php** dosyasını tarayıcınızda açın ve **uzantıyı** arayın.

<img class="border" src={useBaseUrl('img/php/guides/building-a-php-extension/php-info.png?v=1')} />

Eğer uzantı hakkında bilgi bulamazsanız, uzantı **YÜKLENMEMİŞTİR**.
