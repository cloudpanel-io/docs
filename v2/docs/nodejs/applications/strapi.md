---
id: strapi
title: Strapi 4
sidebar_label: Strapi 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install and configure [Strapi 4](https://strapi.io/) on **CloudPanel**.

## Creating a Node.js Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a Node.js Site**.

<img class="border" alt="Add Node.js Site" src={useBaseUrl('img/nodejs/applications/strapi/add-site.png')} />

2. Enter the **Domain Name**, **Node.js Version**, and the **App Port**, and click on **Create**.

<img alt="Add Node.js Site Form" class="border" src={useBaseUrl('img/nodejs/applications/strapi/add-site-form.png')} />

### Via CloudPanel CLI

You can create a **Node.js Site** with the following command as **root user** if you like the command line.

```bash
clpctl site:add:nodejs --domainName=www.domain.com --nodejsVersion=14 --appPort=1337 --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Strapi project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to htdocs and delete the directory which CloudPanel has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Strapi Project**:

```bash
npx create-strapi-app@latest www.domain.com
```

### Building the Admin Panel

To build the **Admin Panel**, go to the **root directory** of your strapi installation

```bash
cd htdocs/www.domain.com/
```

and execute **npm run build** with **NODE_ENV=production**:

```bash
NODE_ENV=production npm run build
```

### Running Strapi

To run **Strapi**, go to the **root directory** of your strapi installation

```bash
cd htdocs/www.domain.com/
```

and execute **npm start** with **NODE_ENV=production**:

```bash
NODE_ENV=production npm start
```

The output will look like this:

<img class="border" alt="NPM start" src={useBaseUrl('img/nodejs/applications/strapi/npm-start.png')} />

To create a user, you can now open your **Strapi Installation** in the browser **https://www.domain.com/admin**.

<img class="border" alt="NPM start" src={useBaseUrl('img/nodejs/applications/strapi/welcome-to-strapi-form.png')} />

## Production Deployment

For running **Strapi** in production, it's essential to have an **process manager** like **pm2** who takes care of the node processes.

Follow the [Node.js Deployment](../../../nodejs/deployment/pm2/) for a step-by-step guide.