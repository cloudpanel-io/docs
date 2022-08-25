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

<img class="border" alt="Create a Shopware Site" src={useBaseUrl('img/php/applications/shopware/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Shopware Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.0 --vhostTemplate='Shopware 6' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Shopware Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **Shopware 6** version.

```bash
curl -sLo shopware6.zip https://www.shopware.com/en/Download/redirect/version/sw6/file/install_v6.4.14.0_812d867f6f77d6d5b0475ba9dd540c97550ac108.zip && unzip shopware6.zip -d shopware6
```

:::caution Latest Version
You find the latest version on github: [https://www.shopware.com/en/download/#shopware-6](https://www.shopware.com/en/download/#shopware-6)
:::

4. Copy files to the **root directory** of your site:

```
cp -R shopware6/*  ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. Ensure to have a valid [TLS Certificate](../../../frontend-area/tls/) installed for your domain.
 
7. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Shopware Installer**.

<img class="border" alt="Shopware Installer" src={useBaseUrl('img/php/applications/shopware/shopware-installer.png')} />

8. Done! **Shopware** is now installed.

<img class="border" alt="Shopware Installed" src={useBaseUrl('img/php/applications/shopware/shopware-installed.png')} />

