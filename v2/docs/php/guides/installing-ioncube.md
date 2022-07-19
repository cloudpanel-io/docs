---
id: php-ioncube
title: How to install ionCube on CloudPanel v2
sidebar_label: How to install ionCube
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In this guide, you will find a **step-by-step guide** on how to install **ionCube** for PHP. At the time of writing this article ionCube only supports PHP versions up to PHP 7.4.x. Anything higher will not work. This guide is for PHP 7.4.

## Downloading and installing ionCube

1. Make a **backup** of your instance.
2. SSH Into your instance as the root user
3. Download ionCube in your /tmp folder
```
cd /tmp/ && wget https://downloads.ioncube.com/loader_downloads/ioncube_loaders_lin_x86-64.tar.gz
```
4. Unpack ionCube and move it to your PHP library folder
```
tar xf ioncube_loaders_lin_x86-64.tar.gz && cp /tmp/ioncube/ioncube_loader_lin_7.4.so /usr/lib/php/20190902
```
5. Now that we have the extension downloaded, we need to enable it for PHP. We will do this for PHP-FPM and and PHP-CLI.
There are 2 files you will need to edit:
- /etc/php/7.4/fpm/php.ini 
- /etc/php/7.4/cli/php.ini 
For both, around line 1955 you will need uncomment ```zend_extension=ioncube_loader_lin_7.4.so``` by removing ```;``` infront of it.

6. Finally, restart your PHP-FPM service via the CLI or CloudPanel admin area.
```
systemctl restart php7.4-fpm
```

## Testing

After registering the **PHP Extension**, you can check if the extension is loaded for **CLI** and **FPM** correctly.

### CLI

You can use **grep** to check if the extension is loaded:

```
php7.4 -m |grep 'ionCube' 
```

If you don't get an output, then the extension is **NOT** loaded.

### FPM

To check if the extension is loaded for **FPM**, you can check the **phpinfo**.

1. Create the file **t.php** in the **root directory**.

2. Put the following content in the file:

```php
<?php
phpinfo();
```

3. Open **t.php** in your browser and search for **ionCube**.

If you don't find information about the extension, then it's **NOT** loaded.