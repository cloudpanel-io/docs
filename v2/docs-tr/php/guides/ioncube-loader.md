---
id: ioncube-loader
title: ionCube Loader
sidebar_label: ionCube Loader
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Dikkat
Şu anda **PHP 8.0** için **ionCube Loader** bulunmamaktadır.
:::

ionCube ile kodlanmış ve güvenli PHP dosyalarını kullanmak için, web sunucusunda [ionCube Loader](https://www.ioncube.com/) adlı bir dosyanın kurulu olması ve PHP'ye erişilebilir olması gerekmektedir.

## Yükleyiciyi Etkinleştirme

**ionCube Loader** uzantısı, tüm **PHP Sürümleri** için varsayılan olarak sunulur ancak **performans nedenleriyle** devre dışıdır.

Belirli bir **PHP Sürümü** için **ionCube Loader**'ı etkinleştirmek için **CLI** ve **FPM** için etkinleştirmeniz gerekir: 

1. **CLI** ve **FPM** için **php.ini** dosyasını açın:

```
nano /etc/php/8.3/cli/php.ini
nano /etc/php/8.3/fpm/php.ini
```

2. Dosyanın sonuna gidin ve satırın başındaki noktalı virgülü kaldırın.

```
;zend_extension=ioncube_loader_lin_8.3.so
```

3. **PHP-FPM** servisini yeniden başlatın:

```
systemctl restart php8.3-fpm
```
