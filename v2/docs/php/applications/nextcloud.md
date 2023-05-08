---
id: nextcloud
title: Nextcloud
sidebar_label: Nextcloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Nextcloud](https://nextcloud.com/) on **CloudPanel**.

## Creating a Nextcloud Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Nextcloud 25**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Nextcloud Site" src={useBaseUrl('img/php/applications/nextcloud/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Nextcloud Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='Nextcloud 26' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Nextcloud Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **Nextcloud** version.

```
curl -sLo nextcloud.zip https://download.nextcloud.com/server/releases/latest.zip && unzip nextcloud.zip -d nextcloud
```

4. Copy files to the **root directory** of your site:

```
cp -R nextcloud/nextcloud/* ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Nextcloud Installer**.

<img class="border" alt="Nextcloud Installer" src={useBaseUrl('img/php/applications/nextcloud/nextcloud-installer.png')} />

7. Done. **Nextcloud** has been installed.

<img class="border" alt="Nextcloud Installed" src={useBaseUrl('img/php/applications/nextcloud/nextcloud-installed.png')} />