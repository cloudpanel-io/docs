---
id: technology-stack
title: Technology Stack
sidebar_label: Technology Stack
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning No Linux Container Support
**CloudPanel** supports only virtual machines, no support for Linux containers like **lxc**, **lxd**, **openvz** or others.
:::

Next generation **Technology Stack** for maximum performance and security to run **PHP**, **Node.js**, **Static Websites**, **Reverse Proxies** and **Python Applications**.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Debian 13 LTS', value: 'debian-13', },
]}>
<TabItem value="ubuntu-24.04">

| Service                                    | Version(s)                    |                             |
|:-------------------------------------------|:------------------------------|:----------------------------|
| [NGINX](https://nginx.org)                 | **1.28**                      | HTTP3 with PageSpeed Module |
| [MySQL](https://www.mysql.com/)            | **8.4**, **8.0**              |                             |
| [MariaDB](https://mariadb.org/)            | **10.11**, **11.4**, **11.8** |                             |
| [PHP](https://www.php.net)                 | **7.1-8.5**                   |                             |
| [Redis](https://redis.io)                  | **7**                         |                             |
| [ProFTPD](http://www.proftpd.org)          | **1.3**                       |                             |
| [Node.js](https://nodejs.org)              | **12, 14, 16, 18, 20, 22**    | LTS Versions                |
| [Python](https://www.python.org/)          | **3.12**                      |                             |
| [Varnish Cache](http://varnish-cache.org/) | **7.5**                       |                             |

</TabItem>
<TabItem value="debian-13">

| Service                                       | Version(s)                 |                             |
|:----------------------------------------------|:---------------------------|:----------------------------|
| [NGINX](https://nginx.org)            | **1.28**                   | HTTP3 with PageSpeed Module |
| [MySQL](https://www.mysql.com/)            | **8.0**                    |                             |
| [MariaDB](https://mariadb.org/)          | **11.8**                   |                             |
| [PHP](https://www.php.net)              | **7.1-8.5**                |                             |
| [Redis](https://redis.io)            | **8**                      |                             |
| [ProFTPD](http://www.proftpd.org)          | **1.3**                    |                             |
| [Node.js](https://nodejs.org)          | **12, 14, 16, 18, 20, 22** | LTS Versions                |
| [Python](https://www.python.org/)           | **3.13**                   |                             |
| [Varnish Cache](http://varnish-cache.org/)    | **7.5**                    |                             |

</TabItem>
</Tabs>

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

| Service                                    | Version(s)                              |                       |
|:-------------------------------------------|:----------------------------------------|:----------------------|
| [NGINX](https://nginx.org)                 | **1.21**                                | with PageSpeed Module |
| [MySQL](https://www.mysql.com/)            | **8.0**                                 |                       |
| [MariaDB](https://mariadb.org/)            | **10.6**, **10.11**, **11.4**, **11.8** |                       |
| [PHP](https://www.php.net)                 | **7.1-8.5**                             |                       |
| [Redis](https://redis.io)                  | **6**                                   |                       |
| [ProFTPD](http://www.proftpd.org)          | **1.3**                                 |                       |
| [Node.js](https://nodejs.org)              | **12, 14, 16, 18, 20, 22**              | LTS Versions          |
| [Python](https://www.python.org/)          | **3.10**                                |                       |
| [Varnish Cache](http://varnish-cache.org/) | **7.1**                                 |                       |

</TabItem>
<TabItem value="debian-12">


| Service                                       | Version(s)                    |                             |
|:----------------------------------------------|:------------------------------|:----------------------------|
| [NGINX](https://nginx.org)            | **1.28**                      | HTTP3 with PageSpeed Module |
| [MySQL](https://www.mysql.com/)            | **8.4**, **8.0**              |                             |
| [MariaDB](https://mariadb.org/)          | **10.11**, **11.4**, **11.8** |                             |
| [PHP](https://www.php.net)              | **7.1-8.5**                   |                             |
| [Redis](https://redis.io)            | **7**                         |                             |
| [ProFTPD](http://www.proftpd.org)          | **1.3**                       |                             |
| [Node.js](https://nodejs.org)          | **12, 14, 16, 18, 20, 22**    | LTS Versions                |
| [Python](https://www.python.org/)           | **3.11**                      |                             |
| [Varnish Cache](http://varnish-cache.org/)    | **7.5**                       |                             |

</TabItem>
<TabItem value="debian-11">


| Service                           | Version(s)                              |                       |
|:----------------------------------|:----------------------------------------|:----------------------|
| [NGINX](https://nginx.org)        | **1.21**                                | with PageSpeed Module |
| [MySQL](https://www.percona.com/software/mysql-database/percona-server)   | **5.7, 8.0**                            |                       |
| [MariaDB](https://mariadb.org/)   | **10.6**, **10.11**, **11.4**, **11.8** |                       |
| [PHP](https://www.php.net)        | **7.1-8.4**                             |                       |
| [Redis](https://redis.io)         | **6**                                   |                       |
| [ProFTPD](http://www.proftpd.org) | **1.3**                                 |                       |
| [Node.js](https://nodejs.org)     | **12, 14, 16, 18, 20, 22**              | LTS Versions          |
| [Python](https://www.python.org/) | **3.9**                                 |                       |
| [Varnish Cache](http://varnish-cache.org/) | **7.1**                                 |                       |

</TabItem>
</Tabs>