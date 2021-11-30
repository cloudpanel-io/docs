---
id: ioncube-loader
title: ionCube Loader
sidebar_label: ionCube Loader
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Using ionCube encoded and secured PHP files requires a file called the [ionCube Loader](https://www.ioncube.com/) to be installed on the web server and made available to PHP.

## Enable Loader

The **ionCube Loader** extension is being shipped by default for all **PHP Versions** but disabled for **performance reasons**.

To enable **ionCube Loader** for a specific **PHP Version**, you need to enable it for **CLI** and **FPM**: 

1. Open the **php.ini** for the **CLI** and **FPM**:

```
nano /etc/php/7.4/cli/php.ini
nano /etc/php/7.4/fpm/php.ini
```

2. Go to the end of the file and remove the semicolon in the beginning.

```
;zend_extension=ioncube_loader_lin_7.4.so
```

3. Restart the **PHP-FPM** service:

```
systemctl restart php7.4-fpm
```
