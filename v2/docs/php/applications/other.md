---
id: other
title: Other
sidebar_label: Other
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide on setting up other **PHP Applications** with **CloudPanel**.

## Creating a PHP Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Generic**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/other/create-site-form.png?v=0.0.4')} />

:::warning Root Directory
After creating the site, you may need to change the [Root Directory](../../../frontend-area/settings/), for example, if your **PHP Application** is using **public** as entry point.
:::

Add **/public** if your **PHP Application** is using the **public** directory as an entry point.

<img class="border" alt="Change Root Directory" src={useBaseUrl('img/php/applications/other/root-directory.png?v=0.0.1')} />

### Via CloudPanel CLI

If you like the command line, you can create a **PHP Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.4 --vhostTemplate='Generic' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Uploading Application Files

Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User** or use [SFTP](../../../frontend-area/ssh-ftp/#sftp-login) to upload files.

```bash
ssh john-doe@server-ip-address
```

## Vhost Changes

Use the [Vhost Editor](../../../frontend-area/vhost/) to add some application-specific rules, if needed.

<img class="border" alt="Vhost Editor" src={useBaseUrl('img/php/applications/other/vhost-editor.png?v=0.0.1')} />

