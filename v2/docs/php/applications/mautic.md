---
id: mautic
title: Mautic
sidebar_label: Mautic
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Mautic](https://www.mautic.org/) on **CloudPanel**.

## Creating a Mautic Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Mautic 6**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Mautic Site" src={useBaseUrl('img/php/applications/mautic/create-site-form.png?v=0.0.7')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Mautic Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.3 --vhostTemplate='Mautic 6' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Mautic Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Install [Node.js](../../guides/nodejs/) via **nvm**.

3. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

4. Clone the latest version from the [Mautic Git Repository](https://github.com/mautic/mautic):

```
git clone -b 6.0.7 https://github.com/mautic/mautic.git ~/htdocs/www.domain.com/
```

:::caution Latest Version
You find the latest version on github: [https://github.com/mautic/mautic/releases](https://github.com/mautic/mautic/releases)
:::

5.Install the **project** via **Composer**:

```bash
cd ~/htdocs/www.domain.com/
php8.3 /usr/local/bin/composer install
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Mautic Installer**.

<img class="border" alt="Mautic Installer" src={useBaseUrl('img/php/applications/mautic/mautic-installer.png?v=0.0.5')} />

7. Done. **Mautic** has been installed.

<img class="border" alt="Mautic Installed" src={useBaseUrl('img/php/applications/mautic/mautic-installed.png?v=0.0.5')} />