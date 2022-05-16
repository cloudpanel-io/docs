---
id: add-site
title: Add Site
sidebar_label: Add Site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

With **CloudPanel**, you can [Create a WordPress Site](#create-a-wordpress-site), [Create a PHP Site](#create-a-php-site),
[Create a Node.js Site](#create-a-nodejs-site), [Create a Static HTML Site](#create-a-static-html-site) or [Create a Python Site](#create-a-python-site).

<img alt="Select Application" class="border" src={useBaseUrl('img/v2/frontend-area/add-site/add-site.png')} />

## Create a WordPress Site

1. Fill out all fields and click on **Create** to **Create a WordPress Site**.

<img alt="Create a WordPress Site" class="border" src={useBaseUrl('img/v2/frontend-area//add-site/create-a-wordpress-site.png')} />

2. Copy the credentials for your created WordPress site in a secure place.

:::warning Site User
The **Site User** is an **SSH User**. All files will be stored in his home directory: **/home/$siteUser**
:::

<img alt="WordPress Site has been created!" class="border" src={useBaseUrl('img/v2/frontend-area//add-site/wordpress-site-credentials.png')} />

## Create a PHP Site

1. Select the **Application**, the **Domain Name**, and the **PHP Version**. The **PHP Version** can be changed later if needed.

:::caution Redirection
When you enter the **Domain Name** with **www**, a redirection from non-www to www will be created automatically and vice versa.
All **HTTP** requests are redirected to **HTTPS** by default.
:::

<img alt="New PHP Site" class="border" src={useBaseUrl('img/v2/frontend-area//add-site/create-php-site.png')} />

2. Click on **Create** to create the **PHP Site**.

3. You can now use the **Site User** to log in via **SSH** to upload the application files.

## Create a Node.js Site

1. Enter the **Domain Name**, select the **Node.js Version**, and the **App Port**.

The **Node.js Versions** are managed via [Node Version Manager](https://github.com/nvm-sh/nvm).

:::caution Redirection
When you enter the **Domain Name** with **www**, a redirection from non-www to www will be created automatically and vice versa.
All **HTTP** requests are redirected to **HTTPS** by default.
:::

<img alt="New Node.js Site" class="border" src={useBaseUrl('img/v2/frontend-area/add-site/create-nodejs-site.png')} />

2. You can now use the **Site User** to log in via **SSH** to upload the application files.

## Create a Static HTML Site

1. Enter the **Domain Name** you want to use for your site.

:::caution Redirection
When you enter the **Domain Name** with **www**, a redirection from non-www to www will be created automatically and vice versa.
All **HTTP** requests are redirected to **HTTPS** by default.
:::

<img alt="Create a Static HTML Site" class="border" src={useBaseUrl('img/v2/frontend-area/add-site/create-a-static-html-site.png')} />

2. You can now use the **Site User** to log in via **SSH** to upload the HTML files.

## Create a Python Site

1. Enter the **Domain Name**, select the **Python Version** and enter the **App Port**.

:::caution Redirection
When you enter the **Domain Name** with **www**, a redirection from non-www to www will be created automatically and vice versa.
All **HTTP** requests are redirected to **HTTPS** by default.
:::

<img alt="Create a Python Site" class="border" src={useBaseUrl('img/v2/frontend-area/add-site/create-a-python-site.png')} />

2. You can now use the **Site User** to log in via **SSH** to upload the application files.


