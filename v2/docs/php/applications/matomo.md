---
id: matomo
title: Matomo
sidebar_label: Matomo
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Matomo](https://matomo.org/) on **CloudPanel**.

## Creating a Matomo Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Matomo 5**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Matomo Site" src={useBaseUrl('img/php/applications/matomo/create-site-form.png?v=0.0.1')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Matomo Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.0 --vhostTemplate='Matomo 5' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Matomo Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **Matomo 5** version.

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

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Matomo Installer**.

<img class="border" alt="Matomo Installer" src={useBaseUrl('img/php/applications/matomo/matomo-installer.png')} />

7. Done! **Matomo** has been installed.

<img class="border" alt="Matomo Installed" src={useBaseUrl('img/php/applications/matomo/matomo-installed.png')} />