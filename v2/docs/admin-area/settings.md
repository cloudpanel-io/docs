---
id: settings
title: Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## General

## Database Servers

By default, **CloudPanel** is being shipped with **MySQL 8.0**. You can use a database service like [Amazon RDS](https://aws.amazon.com/rds/), [Digital Ocean Managed MySQL](https://www.digitalocean.com/products/managed-databases-mysql/), 
or your server. **MySQL 5.7**, **MySQL 8.0**, **MariaDB 10.6** and **MariaDB 10.7** are supported.

<img class="border" alt="Database Servers" src={useBaseUrl('img/admin-area/settings/database_servers.png')} />

### Add Database Server

1. To add a **Database Server**, click in the left menu on **Settings** and then on the tab **Database Servers**.

2. Click on the button **Add Database Server** top right.

<img class="border" alt="Add Database Server" src={useBaseUrl('img/admin-area/settings/add_database_server.png')} />

3. Click on **Set Active**.

<img class="border" alt="Set Database Server Active" src={useBaseUrl('img/admin-area/settings/set_db_server_active.png')} />

4. The local **MySQL Service** is not needed any longer and can be stopped and disabled to free up memory. <br />
Login via **SSH** as **root** and disable the service with the following command:

```bash
systemctl stop mysql && systemctl disable mysql
```

### Delete Database Server

1. To add a **Database Server**, click in the left menu on **Settings** and then on the tab **Database Servers**.

2. Click on the **Database Server** you want to **delete**.

<img class="border" alt="Delete Database Server" src={useBaseUrl('img/admin-area/settings/delete_database_server_1.png')} />

3. Click on the button **Delete** bottom left to delete the **Database Server**.

<img class="border" alt="Delete Database Server" src={useBaseUrl('img/admin-area/settings/delete_database_server_2.png')} />