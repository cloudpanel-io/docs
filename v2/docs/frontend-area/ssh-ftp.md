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

<img alt="Adding a SSH User" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/adding-a-ssh-user.png?v=0.0.1')} />

Add your **Public SSH Key(s)** if you want to log in via  [Public Key authentication](https://www.ssh.com/academy/ssh/public-key-authentication).

### Deleting a User

To delete an **SSH User**, click on the tab **SSH/FTP** and then on **Delete** and confirm your action.

<img alt="Delete a SSH User" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/delete-ssh-user.png?v=0.0.1')} />

### Password Change

To change the password for an **SSH User**, click on the tab **SSH/FTP** and then on the **User Name**.

Enter a new strong **Password** or click on **Generate new password** and click on **Save**.

<img alt="Change SSH User Password" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/change-ssh-user-password.png?v=0.0.1')} />

### SSH Login

To login via **SSH** to the instance, you need a terminal like [iterm2](https://www.iterm2.com/) for macOS or [putty](https://www.putty.org/) for Windows.

The **SSH** port is **22** (default port). Before you try to connect with SSH, make sure that port **22** is open for your ip address.

**Linux and MacOS:**

**SSH login via password**

```bash
ssh john-doe@instance-ip-address
```

**SSH login via private key**

```bash
ssh -i path_to_your_private_key.pem john-doe@instance-ip-address
```

**Windows:**

In the **Host Name ** field, enter the **instance ip address** and click on the button **Open**.

<img alt="Change SSH User Password" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/putty-ssh.png')} />

Putty will ask you to enter the **User Name** and **Password** in the next step.

### SFTP Login

To login via **SFTP** to the instance, you need a client like [FileZilla](https://filezilla-project.org/).

Make sure that the **SSH** port **22** is open for your ip address.

Enter the **Host**, **Username**, **Password** and **Port** fields and click on the button **Quickconnect**.

:::warning Port
Make sure to use port **22** for an SFTP connection.
:::

<img alt="SFTP Login via Filezilla" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/sftp-login-filezilla.png')} />

## FTP

The **File Transfer Protocol (FTP)** is a standard network protocol used to transfer computer files between a client and server on a computer network.

### Adding a User

To add a new **FTP User**, click on the tab **SSH/FTP** and enter a **User Name**, **Password**, and **Home Directory** and click on **Add User**.

<img alt="Adding a FTP User" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/adding-a-ftp-user.png?v=0.0.1')} />

### Deleting a User

To delete an **FTP User**, click on the tab **SSH/FTP** and then on **Delete** and confirm your action.

<img alt="Delete a FTP User" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/delete-ftp-user.png?v=0.0.1')} />

### Password Change

To change the password for an **FTP User**, click on the tab **SSH/FTP** and then on the **User Name**.

Enter a new strong **Password** or click on **Generate new password** and click on **Save**.

<img alt="Change SSH User Password" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/change-ftp-user-password.png?v=0.0.1')} />

### FTP Login

To login via FTP to the server, you need a client like [FileZilla](https://filezilla-project.org/).

1. Ensure the [Proftpd MasqueradeAddress](../../admin-area/instance#proftpd-settings) is correctly set.

2. Go to the [Firewall](../../admin-area/security#adding-a-rule) in the **Admin Area** and add the following rule.

<img alt="Add FTP Firewall Rule" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/add-ftp-firewall-rule.png?v=0.0.1')} />

3. Click on **Add Rule** to open the ports **20-21** for your IP. 

**CloudPanel** will also create the rule **ProFTPD Passive Ports** which opens the port range **49152-65534** for your IP.

4. Open **Filezilla** and enter **Host**, **Username**, **Password** and **Port** fields and click on the button **Quickconnect**.

:::warning Port
Make sure to use port **21** for an FTP connection.
:::

<img alt="FTP Login via Filezilla" class="border" src={useBaseUrl('img/frontend-area/ssh-ftp/ftp-login-filezilla.png')} />