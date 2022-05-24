---
id: laminas
title: Laminas
sidebar_label: Laminas
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Laminas](https://getlaminas.org/) on **CloudPanel**.

## Creating a Laminas Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Laminas**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Laminas Site" src={useBaseUrl('img/php/applications/laminas/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Laminas Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='Laminas' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Laminas Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Laminas Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project -s dev laminas/laminas-mvc-skeleton www.domain.com
```

4. Done! You can now open your **site** in your browser to see the **welcome page**.

<img class="border" alt="Welcome to Laminas" src={useBaseUrl('img/php/applications/laminas/welcome-to-laminas.png')} />