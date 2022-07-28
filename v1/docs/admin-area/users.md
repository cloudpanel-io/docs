---
id: users
title: Users
sidebar_label: Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

## Users

As an admin user, you can add additional **CloudPanel** users. 
Two different user roles can be added, normal users and users which administrator rights.
Normal users have only access to the frontend area.

### Adding a User

To add a new **User** do the following steps:

1) Login into the **CloudPanel** as **User** with admin rights.

2) Go to the **Admin Area** by clicking on **Admin Area** top right.

3) In the left menu, click on **Users** and click on the button **Add User**.

<img class="border" src={useBaseUrl('img/v1/admin/users/users.png')} /> <br /> <br />

Fill out the form and enter the **User Name**, **E-Mail**, **First Name**, **Last Name**,
**Password**, and select the **Role** and **Timezone**. The **Timezone** is essential for showing the right time
in the monitoring graphs on the dashboard in the frontend area.

<img class="border" src={useBaseUrl('img/v1/admin/users/new_user.png')} />

### Deleting a User

On the **Users** overview site, you can delete a **User** by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/admin/users/delete_user.png')} />

