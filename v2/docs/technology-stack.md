---
id: technology-stack
title: Technology Stack
sidebar_label: Technology Stack
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The technology stack of CloudPanel consists of modern and lightweight components for maximum performance for PHP applications.

## Components

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

| Service                                                                                                                                                                   | Version(s)  |                                 |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|:--------------------------------|
| [NGINX](https://nginx.org)                                                                                                                                                | **1.20.2**  | with PageSpeed Module           |
| [MySQL](https://www.percona.com/software/mysql-database/percona-server)                                                                                                   | **8.0**     |                                 |
| [PHP](https://www.php.net)                                                                                                                                                | **7.1-8.1** |                                 |
| [Redis](https://redis.io)                                                                                                                                                 | **6**       |                                 |
| [ProFTPD](http://www.proftpd.org)                                                                                                                                         | **1.3**     |                                 |
| [Node.js](https://nodejs.org)                                                                                                                                             | **16**      | with Node Version Manager (nvm) |
| [Yarn](https://yarnpkg.com)                                                                                                                                               | **1.22**    |                                 |

</TabItem>
<TabItem value="debian-11">

| Service                                                                                                                                                                   | Version(s)  |                                 |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|:--------------------------------|
| [NGINX](https://nginx.org)                                                                                                                                                | **1.20.2**  | with PageSpeed Module           |
| [MySQL](https://www.percona.com/software/mysql-database/percona-server)                                                                                                   | **8.0**     |                                 |
| [PHP](https://www.php.net)                                                                                                                                                | **7.1-8.1** |                                 |
| [Redis](https://redis.io)                                                                                                                                                 | **5**       |                                 |
| [ProFTPD](http://www.proftpd.org)                                                                                                                                         | **1.3**     |                                 |
| [Node.js](https://nodejs.org)                                                                                                                                             | **16**      | with Node Version Manager (nvm) |
| [Yarn](https://yarnpkg.com)                                                                                                                                               | **1.22**    |                                 |

</TabItem>
</Tabs>

<img className="border" alt="CloudPanel Technology Stack" src={useBaseUrl('img/technology_stack.png')} />