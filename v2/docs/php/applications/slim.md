---
id: slim
title: Slim
sidebar_label: Slim
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Slim](https://www.slimframework.com/) on **CloudPanel**.

## Creating a Slim Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Slim 4**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Slim Site" src={useBaseUrl('img/php/applications/slim/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Slim Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.4 --vhostTemplate='Slim 4' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Slim Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Slim Project** via **Composer**:

```bash
php7.4 /usr/local/bin/composer create-project slim/slim-skeleton:~4 www.domain.com
```

4. Done! **Slim** has been installed.

<img class="border" alt="Welcome to Slim Site" src={useBaseUrl('img/php/applications/slim/slim-installed.png')} />