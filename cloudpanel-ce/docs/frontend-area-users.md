---
id: users
title: Users
sidebar_label: Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find information about **SSH/SFTP** and **FTP** Users.

## SSH Users

The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. 
It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption.

### Addding a User

To add a new **SSH User** click on the button **Add User** top right. 

Enter a **User Name** and a strong **Password**. 
CloudPanel automatically adds the suffix **-ssh** at the end of the **User Name** to prevent conflicts with system users.
The **Password** needs to be at least six characters long; the longer, the better.

<img class="border" src={useBaseUrl('img/v1/users/add_ssh_user.png')} /> <br /> <br />

### Deleting a User

To delete a **SSH User** click on the button **Delete** on the overview page.

<img class="border" src={useBaseUrl('img/v1/users/delete_ssh_user.png')} /> <br /> <br />

:::warning
The entire home directory of the user will be deleted, in that example **/home/john-ssh/**
:::

### SSH Login

To login via SSH to the server, you need a terminal like [iterm2](https://www.iterm2.com/) (macOS) or [putty](https://www.putty.org/) (windows).

The SSH port is 22 (default port). Before you try to connect with SSH, make sure that the port 22 is open for your IP address.

**Linux and MacOS Users:**

**SSH login via password**

```bash
ssh john-ssh@serverIpAddress
```

**SSH login via private key**

```bash
ssh -i path_to_your_private_key.pem john-ssh@serverIpAddress
```

**Windows**

### SFTP Login

dsfsdfsdf

## FTP Users