---
id: add-site
title: Add Site
sidebar_label: Add Site
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Select the **application** you want to install. You can [Create a WordPress Site](#create-a-wordpress-site), [Create a PHP Site](#create-a-php-site),
[Create a Node.js Site](#create-a-nodejs-site), [Create a Static HTML Site](#create-a-static-html-site) or [Create a Python Site](#create-a-python-site).

<img alt="Select Application" class="border" src={useBaseUrl('img/v2/frontend-area/add-site.png')} />

## Create a WordPress Site

1. Fill out all fields and click on **Create** to **Create a WordPress Site**.

<img alt="Create a WordPress Site" class="border" src={useBaseUrl('img/v2/frontend-area/create-a-wordpress-site.png')} />

2. Copy the credentials for your created WordPress site in a secure place.

:::warning Site User
The **Site User** is an **SSH User**. All files will be stored in his home directory: **/home/$siteUser**
:::

<img alt="WordPress Site has been created!" class="border" src={useBaseUrl('img/v2/frontend-area/wordpress-site-credentials.png')} />

## Create a PHP Site

1. Select the **Application**, the **Domain Name**, and the **PHP Version**.

:::caution Redirection
When you enter the **Domain Name** with **www**, a redirection from non-www to www will be created automatically and vice versa.
All **HTTP** requests are redirected to **HTTPS** by default.
:::

<img alt="New PHP Site" class="border" src={useBaseUrl('img/v2/frontend-area/create-php-site.png')} />

2. Click on **Create** to create the **PHP Site**.

## Create a Node.js Site

## Create a Static HTML Site

## Create a Python Site

