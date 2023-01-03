---
id: joomla
title: Joomla
sidebar_label: Joomla
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Joomla](https://www.joomla.org/) on **CloudPanel**.

## Creating a Joomla Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Joomla 4**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Joomla Site" src={useBaseUrl('img/php/applications/joomla/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Joomla Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.4 --vhostTemplate='Joomla 4' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Joomla Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the [latest Joomla 4](https://downloads.joomla.org/) version.

```
mkdir ~/tmp/joomla && curl -sL https://downloads.joomla.org/cms/joomla4/4-2-6/Joomla_4-2-6-Stable-Full_Package.tar.gz | tar xfz - -C ~/tmp/joomla/
```

4. Copy files to the **root directory** of your site:

```
cp -R ~/tmp/joomla/* ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Joomla Installer**.

7. Done! **Joomla** is now installed. 

<img class="border" alt="Joomla is now installed" src={useBaseUrl('img/php/applications/joomla/joomla-installed.png')} />