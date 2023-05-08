---
id: neos
title: Neos
sidebar_label: Neos
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Neos](https://www.neos.io/) on **CloudPanel**.

## Creating a Neos Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Neos 8**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Neos Site" src={useBaseUrl('img/php/applications/neos/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Neos Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='Neos 8' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Neos Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Neos Project** via **Composer**:

```bash
php8.1 /usr/local/bin/composer create-project neos/neos-base-distribution:~8 www.domain.com
```

4. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Neos Installer**.

<img class="border" alt="Neos Installer" src={useBaseUrl('img/php/applications/neos/neos-installer.png')} />