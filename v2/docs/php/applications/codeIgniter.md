---
id: codeigniter
title: CodeIgniter
sidebar_label: CodeIgniter
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [CodeIgniter](https://codeigniter.com/) on **CloudPanel**.

## Creating a CodeIgniter Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **CodeIgniter**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a CodeIgniter Site" src={useBaseUrl('img/php/applications/codeigniter/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **CodeIgniter Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='CodeIgniter 4' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a CodeIgniter Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **CodeIgniter Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project codeigniter4/appstarter www.domain.com
```

4. **Done!** You can now open your site in your browser to see the **Welcome to CodeIgniter** page.

<img class="border" alt="Welcome to CodeIgniter" src={useBaseUrl('img/php/applications/codeigniter/welcome-to-codeigniter.png')} />