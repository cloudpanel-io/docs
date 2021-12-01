---
id: users
title: Users
sidebar_label: Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Roles

You can create additional users with restricted access.
Each **role** has specific permissions which will be explained in following section.

### Admin

Users with the **Admin** role have full permissions and are not restricted to the **frontend**, **admin area**, or to a **specific site**.

### Site Manager

Users with the **Site Manager** role have full access to manage all sites but no access to the **admin area**. 

### User

Users with the **User** role are restricted to specific **sites**. They only see the assigned **sites** and cannot see and manage other **sites**.

## User

### Adding a User

To add a new **User** do the following steps:

1. In the left menu, click on **Users** and click on the button **Add User**.

<img class="border" alt="Users" src={useBaseUrl('img/admin/users/users.png')} />

2. Fill the form and click on the button **Add User**.

<img class="border" alt="Add User" src={useBaseUrl('img/admin/users/add_user.png')} />

:::important Timezone
The **Timezone** is essential for showing the right time in the monitoring graphs on the dashboard in the frontend area.
:::


### Deleting a User

1. In the left menu, click on **Users** and click on the **User Name** you want to delete.

<img class="border" alt="Add User" src={useBaseUrl('img/admin/users/user_list.png')} />

2. To delete the user, click on the button **Delete** bottom left.

<img class="border" alt="Add User" src={useBaseUrl('img/admin/users/delete_user.png')} />
