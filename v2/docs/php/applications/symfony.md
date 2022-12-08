---
id: symfony
title: Symfony
sidebar_label: Symfony
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Symfony](https://symfony.com/) on **CloudPanel**.

## Creating a Symfony Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Symfony 6**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Symfony Site" src={useBaseUrl('img/php/applications/symfony/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Symfony Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='Symfony 6' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Symfony Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Symfony Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project symfony/skeleton:^6 www.domain.com
```

4. Done! **Symfony** has been installed.

<img class="border" alt="Welcome to Symfony Site" src={useBaseUrl('img/php/applications/symfony/symfony-installed.png')} />