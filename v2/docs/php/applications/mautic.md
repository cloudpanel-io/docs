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

<img class="border" alt="Create a Mautic Site" src={useBaseUrl('img/php/applications/matomo/create-site-form.png')} />

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

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **Mautic 4** version.

```
curl -sL https://builds.matomo.org/matomo-latest.tar.gz | tar xfz -
```

4. Copy files to the **root directory** of your site:

```
cp -R ~/tmp/matomo/* ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Mautic Installer**.

<img class="border" alt="Mautic Installer" src={useBaseUrl('img/php/applications/matomo/matomo-installer.png')} />

7. Done! **Mautic** has been installed.

<img class="border" alt="Matomo Installed" src={useBaseUrl('img/php/applications/matomo/matomo-installed.png')} />