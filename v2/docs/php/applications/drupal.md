---
id: drupal
title: Drupal
sidebar_label: Drupal 9
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Drupal](https://www.drupal.org/) on **CloudPanel**.

## Creating a Drupal Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Drupal**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Drupal Site" src={useBaseUrl('img/php/applications/drupal/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Drupal Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='Drupal 9' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Drupal Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Drupal Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project drupal/recommended-project:^9 -n www.domain.com
```

4. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Drupal Installer**.

<img class="border" alt="Drupal Installer" src={useBaseUrl('img/php/applications/drupal/drupal-installer.png')} />

5. Done! **Drupal** has been installed.

<img class="border" alt="Welcome to Drupal Site" src={useBaseUrl('img/php/applications/drupal/welcome-to-drupal-site.png')} />