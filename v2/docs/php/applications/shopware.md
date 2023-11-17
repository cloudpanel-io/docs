---
id: shopware
title: Shopware
sidebar_label: Shopware
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Shopware](https://www.shopware.com/) on **CloudPanel**.

## Creating a Shopware Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Shopware 6**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Shopware Site" src={useBaseUrl('img/php/applications/shopware/create-site-form.png?v=2')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Shopware Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='Shopware 6' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Shopware Project

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
php8.2 /usr/local/bin/composer create-project shopware/production www.domain.com
```

4. Ensure to have a valid [TLS Certificate](../../../frontend-area/tls/) installed for your domain.
 
5. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Shopware Installer**.

<img class="border" alt="Shopware Installer" src={useBaseUrl('img/php/applications/shopware/shopware-installer.png?v=2')} />

6. Done! **Shopware** is now installed.

<img class="border" alt="Shopware Installed" src={useBaseUrl('img/php/applications/shopware/shopware-installed.png')} />

