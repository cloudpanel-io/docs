---
id: cakephp
title: CakePHP
sidebar_label: CakePHP
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [CakePHP](https://cakephp.org/) on **CloudPanel**.

## Creating a CakePHP Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **CakePHP**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a CakePHP Site" src={useBaseUrl('img/php/applications/cakephp/create-site-form.png?v=0.0.3')} />

### Via CloudPanel CLI

If you like the command line, you can create a **CakePHP Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.4 --vhostTemplate='CakePHP 5' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a CakePHP Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **CakePHP Project** via **Composer**:

```bash
php8.4 /usr/local/bin/composer create-project --prefer-dist cakephp/app:~5.0 www.domain.com
```

4. **Done!** You can now open your site in your browser to see the **Welcome to CakePHP 5** page.

<img class="border" alt="Welcome to CakePHP" src={useBaseUrl('img/php/applications/cakephp/welcome-to-cake.png?v=0.0.4')} />