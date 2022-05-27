---
id: yii
title: Yii
sidebar_label: Yii
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Yii](https://www.yiiframework.com/) on **CloudPanel**.

## Creating a Yii Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Yii 2**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Yii Site" src={useBaseUrl('img/php/applications/yii/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Yii Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=7.4 --vhostTemplate='Yii 2' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Yii Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Yii Project** via **Composer**:

```bash
php7.4 /usr/local/bin/composer create-project --prefer-dist yiisoft/yii2-app-basic www.domain.com
```

4. Done! **Yii** has been installed.

<img class="border" alt="Welcome to Yii Site" src={useBaseUrl('img/php/applications/yii/yii-installed.png')} />