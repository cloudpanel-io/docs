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

- [NGINX 1.20.2](https://nginx.org) with [PageSpeed Module](guides/nginx/pagespeed-module)
- [MySQL 8.0](https://www.percona.com/software/mysql-database/percona-server)
- [PHP](https://www.php.net)
  - 7.1
  - 7.2
  - 7.3
  - 7.4
  - 8.0
  - 8.1
- [Redis 6](https://redis.io)
- [ProFTPD 1.3](http://www.proftpd.org)
- [Node.js 16](https://nodejs.org) with [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm)
- [Yarn 1.22](https://yarnpkg.com)

</TabItem>
<TabItem value="debian-11">

- [NGINX 1.20.2](https://nginx.org) with [PageSpeed Module](guides/nginx/pagespeed-module)
- [MySQL 8.0 (Percona)](https://www.percona.com/software/mysql-database/percona-server)
- [PHP](https://www.php.net)
  - 7.1
  - 7.2
  - 7.3
  - 7.4
  - 8.0
  - 8.1
- [Redis 5](https://redis.io)
- [ProFTPD 1.3](http://www.proftpd.org)
- [Node.js 16](https://nodejs.org) with [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm)
- [Yarn 1.22](https://yarnpkg.com)

<img className="border" alt="CloudPanel Debian 11 Technology Stack" src={useBaseUrl('img/technology_stack.png')} />

</TabItem>
</Tabs>