---
id: owncloud
title: OwnCloud
sidebar_label: ownCloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [ownCloud](https://owncloud.com/) on **CloudPanel**.

## Creating a OwnCloud Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **OwnCloud 10**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a OwnCloud Site" src={useBaseUrl('img/php/applications/owncloud/create-site-form.png?v=0.0.1')} />

### Via CloudPanel CLI

If you like the command line, you can create a **OwnCloud Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.4 --vhostTemplate='OwnCloud 12' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a OwnCloud Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **OwnCloud** version.

```bash
curl -sL https://download.owncloud.com/server/stable/owncloud-complete-latest.tar.bz2 | tar xfj -
```

4. Copy files to the **root directory** of your site:

```
cp -R owncloud/* ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Owncloud Installer**.

<img class="border" alt="OwnCloud Installer" src={useBaseUrl('img/php/applications/owncloud/owncloud-installer.png')} />

7. Done. **OwnCloud** has been installed.

<img class="border" alt="OwnCloud Installed" src={useBaseUrl('img/php/applications/owncloud/owncloud-installed.png')} />