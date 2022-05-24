---
id: fuelphp
title: FuelPhp
sidebar_label: FuelPHP
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [FuelPHP](https://fuelphp.com/) on **CloudPanel**.

## Creating a FuelPHP Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **FuelPHP**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a FuelPHP Site" src={useBaseUrl('img/php/applications/fuelphp/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **FuelPHP Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.2 --vhostTemplate='FuelPHP 1.8' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a FuelPHP Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest **FuelPHP 1.8** version:

```
curl -sL https://github.com/fuel/fuel/archive/1.8.2.tar.gz | tar xfz -
```

:::caution Latest Version
You find the latest version on github: [https://github.com/fuel/fuel/releases](https://github.com/fuel/fuel/releases)
:::

4. Copy files to the **root directory** of your site:

```
cp -R fuel-1.8.2/* ~/htdocs/www.domain.com/
```

5. Install via **composer**:

```
cd ~/htdocs/www.domain.com/
php7.2 /usr/local/bin/composer install -n
```

6. Clean up the **tmp** directory:

```
rm -rf ~/tmp/*
```

7. Done! **FuelPHP** is now installed.

<img class="border" alt="Welcome to FuelPHP" src={useBaseUrl('img/php/applications/fuelphp/welcome-to-fuelphp.png')} />