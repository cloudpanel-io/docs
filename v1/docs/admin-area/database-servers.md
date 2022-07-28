---
id: database-servers
title: Database Servers
sidebar_label: Database Servers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

## Database Servers

Using a separate **Database Server** to handle all database queries has advantages like better **performance** and the possibility to **restore** to a specific time.
All major cloud providers are offering MySQL database services.

### Add Database Server

To add a new **Database Server** do the following steps:

1) Login into the **CloudPanel** as **User** with admin rights.

2) Go to the **Admin Area** by clicking on **Admin Area** top right.

3) In the left menu, click on **Database Servers** and click on the button **Add Database Server**.

<img class="border" src={useBaseUrl('img/v1/admin/database_servers/database_servers.png')} /> <br /> <br />

Enter the **Host**, **Port**, **User Name** and **Password** of the **Database Server**.

The **User** should have super privileges like the **root** user.

<img class="border" src={useBaseUrl('img/v1/admin/database_servers/add_database_server.png')} /> <br /> <br />

:::warning MySQL Versions
Only **MySQL 5.5**, **5.6** and **5.7** are supported. **MySQL 8.0** will be supported in the next major **CloudPanel** version.
:::

### Use Database Server

To use a **Database Server**, go to the **Database Servers** overview site and click on **Use**.

<img class="border" src={useBaseUrl('img/v1/admin/database_servers/use_database_server.png')} /> <br /> <br />