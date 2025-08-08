---
id: moodle
title: Moodle
sidebar_label: Moodle
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Moodle](https://moodle.org/) on **CloudPanel**.

## Creating a Moodle Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Moodle 5**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Moodle Site" src={useBaseUrl('img/php/applications/moodle/create-site-form.png?v=0.0.3')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Moodle Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.2 --vhostTemplate='Moodle 5' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Moodle Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to the **tmp** directory:

```
cd ~/tmp
```

3. Download and extract the latest [Moodle 5](https://download.moodle.org/releases/latest/) version.

```
curl -sL https://download.moodle.org/download.php/direct/stable500/moodle-latest-500.tgz | tar xfz -
```

4. Copy files to the **root directory** of your site:

```
cp -R ~/tmp/moodle/* ~/htdocs/www.domain.com/
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

6. [Create a Database](../../../frontend-area/databases/#adding-a-database), open your **site** in the browser, and go through the **Moodle Installer**.

<img class="border" alt="Drupal Installer" src={useBaseUrl('img/php/applications/moodle/moodle-installer.png')} />