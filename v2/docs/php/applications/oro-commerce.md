---
id: oro-commerce
title: OroCommerce
sidebar_label: OroCommerce
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [OroCommerce](https://oroinc.com/b2b-ecommerce/) on **CloudPanel**.

## Creating a OroCommerce Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **OroCommerce**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a OroCommerce Site" src={useBaseUrl('img/php/applications/drupal/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **OroCommerce Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='OroCommerce 5' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a OroCommerce Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **OroCommerce Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project drupal/recommended-project:^9 -n www.domain.com
```

4. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **OroCommerce Installer**.

<img class="border" alt="OroCommerce Installer" src={useBaseUrl('img/php/applications/drupal/drupal-installer.png')} />

5. Done! **OroCommerce** has been installed.

<img class="border" alt="Welcome to OroCommerce Site" src={useBaseUrl('img/php/applications/drupal/welcome-to-drupal-site.png')} />