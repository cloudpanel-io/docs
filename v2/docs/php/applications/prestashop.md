---
id: prestashop
title: PrestaShop
sidebar_label: PrestaShop
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [PrestaShop](https://www.prestashop.com/en) on **CloudPanel**.

## Creating a PrestaShop Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **PrestaShop 1.7**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a PrestaShop Site" src={useBaseUrl('img/php/applications/prestashop/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **PrestaShop Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.4 --vhostTemplate='PrestaShop 1.7' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a PrestaShop Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **PrestaShop 1.7** version.

```bash
curl -sL https://github.com/PrestaShop/PrestaShop/archive/1.7.8.7.tar.gz | tar xfz -
```

:::caution Latest Version
You find the latest version on github: [https://github.com/PrestaShop/PrestaShop/releases](https://github.com/PrestaShop/PrestaShop/releases)
:::

4. Copy files to the **root directory** of your site:

```
cp -R PrestaShop-1.7.8.7/*  ~/htdocs/www.domain.com/
```

5. Install the project via **composer**:

```
cd ~/htdocs/www.domain.com/
php7.4 /usr/local/bin/composer install
```

6. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

7. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **PrestaShop Installer**.

<img class="border" alt="PrestaShop Installer" src={useBaseUrl('img/php/applications/prestashop/prestashop-installer.png')} />

8. Done! **PrestaShop** is now installed.

<img class="border" alt="PrestaShop Installed" src={useBaseUrl('img/php/applications/prestashop/prestashop-installed.png')} />

