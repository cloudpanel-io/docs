---
id: laravel
title: Laravel
sidebar_label: Laravel
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Laravel](https://laravel.com/) on **CloudPanel**.

## Creating a Laravel Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Laravel 11**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Laravel Site" src={useBaseUrl('img/php/applications/laravel/create-site-form.png?v=10')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Laravel Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='Laravel 11' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Laravel Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Laravel Project** via **Composer**:

```bash
php8.2 /usr/local/bin/composer create-project --prefer-dist laravel/laravel:^11 -n www.domain.com
```

4. Done! You can now open your **site** in your browser to see the **welcome page**.

<img class="border" alt="Laravel Installed" src={useBaseUrl('img/php/applications/laravel/laravel-installed.png?v=11')} />