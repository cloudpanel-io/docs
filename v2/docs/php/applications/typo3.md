---
id: typo3
title: TYPO3
sidebar_label: TYPO3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [TYPO3](https://typo3.org/) on **CloudPanel**.

## Creating a TYPO3 Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png?v=12')} />

2. Select the Application **TYPO3 v12**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a TYPO3 Site" src={useBaseUrl('img/php/applications/typo3/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **TYPO3 Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='TYPO3 12' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a TYPO3 Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **TYPO3 Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project typo3/cms-base-distribution:~12 www.domain.com
```

4. Open your site in your browser and go through the **installation wizard**:

<img class="border" alt="Welcome to TYPO3 Site" src={useBaseUrl('img/php/applications/typo3/typo3-create-first-install-file.png')} />

5. Create the empty file **FIRST_INSTALL** and reload the browser:

```
touch ~/htdocs/www.domain.com/public/FIRST_INSTALL
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **TYPO3 Installer**.

<img class="border" alt="TYPO3 Installer" src={useBaseUrl('img/php/applications/typo3/typo3-installer.png')} />

7. Done! **TYPO3** has been installed.

<img class="border" alt="TYPO3 Installed" src={useBaseUrl('img/php/applications/typo3/typo3-installed.png')} />