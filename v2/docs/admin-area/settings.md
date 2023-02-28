---
id: settings
title: Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## General

### CloudPanel Custom Domain

To run **CloudPanel** under your **Custom Domain** with a **Let's Encrypt Certificate**, do the following.

1. Click on **Settings** and then on **General** and enter the **Domain Name**.

:::warning DNS Record
A **DNS Record** pointing to this server is required to issue a **Let's Encrypt Certificate**.
:::

<img class="border" alt="CloudPanel Custom Domain" src={useBaseUrl('img/admin-area/settings/cloudpanel-custom-domain.png')} />

2. Click on **Save** and wait seconds before the **Let's Encrypt Certificate** can be issued.

### CloudPanel Custom Domain via Reverse Proxy

An alternative way to run **CloudPanel** under your **Custom Domain** is to use a [Reverse Proxy](../../frontend-area/add-site/#create-a-reverse-proxy), e.g.,
if you want to use your own **SSL/TLS Certificate**, which  is useful where **Let's Encrypt** can't be used.

1. Go to **Sites** and create a [Reverse Proxy](../../frontend-area/add-site/#create-a-reverse-proxy).

2. Enter the **Domain Name**, enter **https://127.0.0.1:8443** as **Reverse Proxy Url**.

<img class="border" alt="CloudPanel Custom Domain via Reverse Proxy" src={useBaseUrl('img/admin-area/settings/cloudpanel-custom-domain-reverse-proxy.png')} />

3. Go to the [SSL/TLS Settings](../../frontend-area/tls/#import-certificate) and import your **Certificate**.

## Database Servers

Using a separate **Database Server** to handle database queries has advantages like **better performance** and the possibility to restore to a specific time. 

All major cloud providers offer **MySQL Database Services** like [Amazon RDS](https://aws.amazon.com/rds/),
[Digital Ocean Managed MySQL](https://www.digitalocean.com/products/managed-databases-mysql/).

Supported Database Versions are: **MySQL 5.7**, **MySQL 8.0**, **>= MariaDB 10.6**

<img class="border" alt="Database Servers" src={useBaseUrl('img/admin-area/settings/database-servers.png')} />

### Add Database Server

1. To add a **Database Server**, click in the left menu on **Settings** and then on the tab **Database Servers**.

2. Enter the **Host**, **User Name**, **Password** and **Port** and click on **Add Database Server**.

<img class="border" alt="Add Database Server" src={useBaseUrl('img/admin-area/settings/add-database-server.png')} />

3. Click on **Set Active** to use the **Database Server**.

<img class="border" alt="Set Database Server Active" src={useBaseUrl('img/admin-area/settings/set-db-server-active.png')} />

4. The local **MySQL Service** is no longer needed and can be stopped and disabled to free up memory. <br />
Login via **SSH** as **root** and disable the service with the following command:

```bash
systemctl stop mysql && systemctl disable mysql
```

### Delete Database Server

1. To add a **Database Server**, click in the left menu on **Settings** and then on the tab **Database Servers**.

2. Click on the **Database Server** you want to **delete**.

<img class="border" alt="Delete Database Server" src={useBaseUrl('img/admin-area/settings/delete-database-server-1.png')} />

3. Click on **Delete** to remove the **Database Server**.

<img class="border" alt="Delete Database Server" src={useBaseUrl('img/admin-area/settings/delete-database-server-2.png')} />