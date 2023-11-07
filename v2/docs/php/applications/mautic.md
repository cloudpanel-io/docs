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

2. Select the Application **Mautic 4**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Mautic Site" src={useBaseUrl('img/php/applications/mautic/create-site-form.png?v=0.0.2')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Mautic Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.0 --vhostTemplate='Mautic 4' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Mautic Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Clone the latest version from the [Mautic Git Repository](https://github.com/mautic/mautic):

```
git clone -b 4.4.10 https://github.com/mautic/mautic.git ~/htdocs/www.domain.com/
```

:::caution Latest Version
You find the latest version on github: [https://github.com/mautic/mautic/releases](https://github.com/mautic/mautic/releases)
:::

4. Install the **project** via **Composer**:

```bash
cd ~/htdocs/www.domain.com/
php8.0 /usr/local/bin/composer install
```

5. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Mautic Installer**.

<img class="border" alt="Mautic Installer" src={useBaseUrl('img/php/applications/mautic/mautic-installer.png')} />

6. Done. **Mautic** has been installed.

<img class="border" alt="Mautic Installed" src={useBaseUrl('img/php/applications/mautic/mautic-installed.png?v=0.0.2')} />