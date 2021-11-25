---
id: users
title: Users
sidebar_label: Users
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you will find information about **SSH/SFTP** and **FTP** Users.

## SSH/SFTP

The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. 
It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption.

### Adding a User

To add a new **SSH User** click on the tab **SSH Users** and then on the button **Add User** top right. 

Enter a **User Name** and a strong **Password**. 
CloudPanel automatically adds the suffix **-ssh** at the end of the **User Name** to prevent conflicts with system users.
The **Password** needs to be at least six characters long; the longer, the better.

<img class="border" src={useBaseUrl('img/v1/users/new_ssh_user.png')} />

### Deleting a User

To delete a **SSH User** click on the button **Delete** on the overview page.

<img class="border" src={useBaseUrl('img/v1/users/delete_ssh_user.png')} /> <br /> <br />

:::warning
The entire home directory of the user will be deleted, in that example **/home/john-ssh/**
:::

### Password Change

The **password** for a user can be changed in user view. Enter your **new password** and click on the button **Update**.

<img class="border" src={useBaseUrl('img/v1/users/change_ssh_user_password.png')} /> <br /> <br />

The **password** can also be changed on the command line. After login with [SSH](#ssh-login) enter the following command:

```bash
passwd
```

As **root** user you can change the password of any user with the following command:

```bash
passwd $userName-ssh
```

### SSH Keys

Login via SSH with a key is more secure than using the password authentification method.

On **MacOs** and **Linux**, you can generate a private and public key with the following command in your terminal:

```bash
ssh-keygen -f cloudpanel
```

This command will create the private key file **cloudpanel** and the public key file **cloudpanel.pub**.

**Windows** users can use the tool **puTTYgen**, which is part of [putty](https://www.putty.org/).

Select **RSA** as key type and click on the button **Generate**.

<img class="border" src={useBaseUrl('img/v1/users/generate_puttygen_keys.png')} /> <br /> <br />

Click on the buttons **Save public key** and **Save private key** to store the keys on your computer.

<img class="border" src={useBaseUrl('img/v1/users/save_puttygen_keys.png')} /> <br /> <br />

To add an **SSH Key** for your **SSH User** click on the user and click on the button **Add SSH Key**.

<img class="border" src={useBaseUrl('img/v1/users/new_ssh_key_1.png')} /> <br /> <br />

Enter the **Key Name** and the **Public Key** and click on the button **Add SSH Key** to authorize the key.

<img class="border" src={useBaseUrl('img/v1/users/new_ssh_key_2.png')} /> <br /> <br />

If you have generated your keys with **puTTYgen**, you need to enter the **Public Key** as **OpenSSH** format.

<img class="border" src={useBaseUrl('img/v1/users/puttygen_openssh_format.png')} />

### SSH Login

To login via SSH to the server, you need a terminal like [iterm2](https://www.iterm2.com/) for macOS or [putty](https://www.putty.org/) for Windows.

The **SSH** port is **22** (default port). Before you try to connect with SSH, make sure that the port **22** is open for your ip address.

**Linux and MacOS:**

**SSH login via password**

```bash
ssh john-ssh@serverIpAddress
```

**SSH login via private key**

```bash
ssh -i path_to_your_private_key.pem john-ssh@serverIpAddress
```

**Windows:**

In the **Host Name ** field enter the server ip address and click on the button **Open**.

<img class="border" src={useBaseUrl('img/v1/users/putty_ssh.png')} /> <br /> <br />

In the next step, putty will ask you to enter the **User Name** and **Password**.

### SFTP Login

To login via **SFTP** to the server, you need a client like [FileZilla](https://filezilla-project.org/).

Make sure that the **SSH** port **22** is open for your ip address.

Fill out the **Host**, **Username**, **Password** and **Port** fields and click on the button **Quickconnect**.

<img class="border" src={useBaseUrl('img/v1/users/filezilla_sftp.png')} /> <br /> <br />

:::caution Port
Make sure to use the port **22** for a SFTP connection.
:::

## FTP

The **File Transfer Protocol (FTP)** is a standard network protocol used for the transfer of computer files between a client and server on a computer network.

### Adding a User

To add a new **FTP User** click on the tab **FTP Users** and then on the button **Add User** top right. 

<img class="border" src={useBaseUrl('img/v1/users/new_ftp_user.png')} /> <br /> <br />

Enter a **User Name** and a strong **Password**. 
CloudPanel automatically adds the suffix **-ftp** at the end of the **User Name** to prevent conflicts with system users.
The **Password** needs to be at least six characters long; the longer, the better.

### Deleting a User

To delete a **FTP User** click on the button **Delete** on the overview page.

<img class="border" src={useBaseUrl('img/v1/users/delete_ftp_user.png')} /> <br /> <br />

### Password Change

The **password** for a user can be changed in the user view. Enter your **new password** and click on the button **Update**.

<img class="border" src={useBaseUrl('img/v1/users/change_ftp_user_password.png')} /> <br /> <br />

The **password** can also be changed on the command line.

After login with [SSH](#ssh-login), switch the user to **root** and enter the following command:

```bash
passwd $userName-ftp
```

### FTP Login

To login via FTP to the server, you need a client like [FileZilla](https://filezilla-project.org/).

Make sure that the **FTP** ports **20-21** and the passive ports **49152-65534** are open for your ip address.

It is also important that you have set the [MasqueradeAddress](../admin-area/settings#proftpd-settings) in the **Admin Area**.

Fill out the **Host**, **Username**, **Password** and **Port** fields and click on the button **Quickconnect**.

<img class="border" src={useBaseUrl('img/v1/users/filezilla_ftp.png')} /> 