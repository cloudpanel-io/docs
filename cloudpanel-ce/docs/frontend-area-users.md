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

### SSH Keys

Login via SSH with a key is more secure than using the password authentification.

On **MacOs** and **Linux**, you can generate a private and public key with the following command:

```bash
ssh-keygen -f cloudpanel
```

This command will create the private key file **cloudpanel** and the public key file **cloudpanel.pub**.

**Windows** users can use the tool **puTTYgen**, which is part of [putty](https://www.putty.org/).

Select **RSA** as key type and click on the button **Generate**.

<img class="border" src={useBaseUrl('img/v1/users/puttygen_generate_keys.png')} /> <br /> <br />

Click on the buttons **Save public key** and **Save private key** to store the keys on your computer.

<img class="border" src={useBaseUrl('img/v1/users/puttygen_save_keys.png')} /> <br /> <br />

To add an **SSH Key** for your **SSH User** click on the user and click on the button **Add SSH Key**.

<img class="border" src={useBaseUrl('img/v1/users/add_ssh_key_1.png')} /> <br /> <br />

Enter the **Key Name** and the **Public Key** and click on the button **Add SSH Key** to authorize the key.

<img class="border" src={useBaseUrl('img/v1/users/add_ssh_key_2.png')} /> <br /> <br />

If you have generated your keys with **puTTYgen**, you need to enter the **Public Key** as **OpenSSH** format.

<img class="border" src={useBaseUrl('img/v1/users/puttygen_openssh_format.png')} />

### SSH Login

To login via SSH to the server, you need a terminal like [iterm2](https://www.iterm2.com/) for macOS or [putty](https://www.putty.org/) for Windows.

The SSH port is 22 (default port). Before you try to connect with SSH, make sure that the port **22** is open for your ip address.

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

To login via SFTP to the server, you need a client like [FileZilla](https://filezilla-project.org/).

Before you try to connect via SFTP, make sure that the port **22** is open for your ip address.

Fill out the **Host**, **Username**, **Password** and **Port** fields and click on the button **Quickconnect**.

<img class="border" src={useBaseUrl('img/v1/users/filezilla_sftp.png')} /> <br /> <br />

:::caution Port
Make sure to use the port **22** for a SFTP connection.
:::

## FTP