---
id: ssh-ftp
title: SSH/FTP
sidebar_label: SSH/FTP
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## SSH/FTP

The **SSH protocol** (also referred to as **Secure Shell**) is a method for securing remote login from one computer to another. <br />
It provides several alternative options for strong authentication, and it protects the communication's security and integrity with strong encryption.

### Adding a User

To add a new **SSH User**, click on the tab **SSH/FTP** and enter a **User Name** and **Password** and click on **Add User**.

<img alt="Adding a SSH User" class="border" src={useBaseUrl('img/v2/frontend-area/ssh-ftp/adding-a-ssh-user.png')} />

Add your **Public SSH Key(s)** if you want to log in via  [Public Key authentication](https://www.ssh.com/academy/ssh/public-key-authentication).

### Deleting a User

To delete an **SSH User**, click on the tab **SSH/FTP** and then on **Delete** and confirm your action.

<img alt="Delete a SSH User" class="border" src={useBaseUrl('img/v2/frontend-area/ssh-ftp/delete-ssh-user.png')} />

### Password Change

To change the password for an **SSH User**, click on the tab **SSH/FTP** and then on the **User Name**.

Enter a new strong **Password** or click on **Generate new password** and click on **Save**.

<img alt="Change SSH User Password" class="border" src={useBaseUrl('img/v2/frontend-area/ssh-ftp/change-ssh-user-password.png')} />

### SSH Login

To login via **SSH** to the server, you need a terminal like [iterm2](https://www.iterm2.com/) for macOS or [putty](https://www.putty.org/) for Windows.

The **SSH** port is **22** (default port). Before you try to connect with SSH, make sure that port **22** is open for your ip address.

**Linux and MacOS:**

**SSH login via password**

```bash
ssh john-doe@server-ip-address
```

**SSH login via private key**

```bash
ssh -i path_to_your_private_key.pem john-doe@server-ip-address
```

### SFTP Login


## FTP

### Adding a User

### Deleting a User

### Password Change

### FTP Login