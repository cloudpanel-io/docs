---
id: technology-stack
title: Teknoloji Yığını
sidebar_label: Teknoloji Yığını
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Linux Container Desteği Yok
**CloudPanel**, yalnızca sanal makineleri destekler, **lxc**, **lxd**, **openvz** veya diğer Linux konteynerleri desteklenmez.
:::

**PHP**, **Node.js**, **Statik Web Siteleri**, **Ters Proxyler** ve **Python Uygulamaları** çalıştırmak için maksimum performans ve güvenlik sağlayan yeni nesil **Teknoloji Yığını**.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
]}>
<TabItem value="ubuntu-24.04">

| Servis                                    | Sürüm(ler)                  |                             |
|:------------------------------------------|:----------------------------|:----------------------------|
| [NGINX](https://nginx.org)                | **1.26**                    | HTTP3 ve PageSpeed Modülü   |
| [MySQL](https://www.mysql.com/)           | **8.0**                     |                             |
| [MariaDB](https://mariadb.org/)           | **10.11**, **11.4**         |                             |
| [PHP](https://www.php.net)                | **7.1-8.4**                 |                             |
| [Redis](https://redis.io)                 | **7**                       |                             |
| [ProFTPD](http://www.proftpd.org)         | **1.3**                     |                             |
| [Node.js](https://nodejs.org)             | **12, 14, 16, 18, 20, 22**  | LTS Sürümleri               |
| [Python](https://www.python.org/)         | **3.12**                    |                             |
| [Varnish Cache](http://varnish-cache.org/) | **7.5**                     |                             |

</TabItem>
<TabItem value="debian-12">

| Servis                                       | Sürüm(ler)                  |                             |
|:---------------------------------------------|:----------------------------|:----------------------------|
| [NGINX](https://nginx.org)                   | **1.26**                    | HTTP3 ve PageSpeed Modülü   |
| [MySQL](https://www.mysql.com/)              | **8.0**                     |                             |
| [MariaDB](https://mariadb.org/)              | **10.11**, **11.4**         |                             |
| [PHP](https://www.php.net)                   | **7.1-8.4**                 |                             |
| [Redis](https://redis.io)                    | **7**                       |                             |
| [ProFTPD](http://www.proftpd.org)            | **1.3**                     |                             |
| [Node.js](https://nodejs.org)                | **12, 14, 16, 18, 20, 22**  | LTS Sürümleri               |
| [Python](https://www.python.org/)            | **3.11**                    |                             |
| [Varnish Cache](http://varnish-cache.org/)   | **7.5**                     |                             |

</TabItem>
</Tabs>

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

| Servis                                    | Sürüm(ler)                     |                       |
|:------------------------------------------|:-------------------------------|:----------------------|
| [NGINX](https://nginx.org)                | **1.21**                       | PageSpeed Modülü ile  |
| [MySQL](https://www.mysql.com/)           | **8.0**                        |                       |
| [MariaDB](https://mariadb.org/)           | **10.6**, **10.11**, **11.4**  |                       |
| [PHP](https://www.php.net)                | **7.1-8.4**                    |                       |
| [Redis](https://redis.io)                 | **6**                          |                       |
| [ProFTPD](http://www.proftpd.org)         | **1.3**                        |                       |
| [Node.js](https://nodejs.org)             | **12, 14, 16, 18, 20, 22**     | LTS Sürümleri         |
| [Python](https://www.python.org/)         | **3.10**                       |                       |
| [Varnish Cache](http://varnish-cache.org/) | **7.1**                        |                       |

</TabItem>
<TabItem value="debian-11">


| Servis                           | Sürüm(ler)                     |                       |
|:----------------------------------|:-------------------------------|:----------------------|
| [NGINX](https://nginx.org)        | **1.21**                       | PageSpeed Modülü ile  |
| [MySQL](https://www.percona.com/software/mysql-database/percona-server) | **5.7, 8.0**           |                       |
| [MariaDB](https://mariadb.org/)   | **10.6**, **10.11**, **11.4**  |                       |
| [PHP](https://www.php.net)        | **7.1-8.4**                    |                       |
| [Redis](https://redis.io)         | **6**                          |                       |
| [ProFTPD](http://www.proftpd.org) | **1.3**                        |                       |
| [Node.js](https://nodejs.org)     | **12, 14, 16, 18, 20, 22**     | LTS Sürümleri         |
| [Python](https://www.python.org/) | **3.9**                        |                       |
| [Varnish Cache](http://varnish-cache.org/) | **7.1**                        |                       |

</TabItem>
</Tabs>
