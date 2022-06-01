---
id: installation-hetzner-cloud
title: Hetzner Cloud
sidebar_label: Hetzner Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on the [Hetzner Cloud](https://www.hetzner.com/cloud).

## Create a Server

1. Login into your [Hetzner Cloud Console](https://console.hetzner.cloud/) account. <br />

2. Go to a **project** and click on the button **ADD SERVER**.

<img class="border" alt="Add Server" src={useBaseUrl('img/getting_started/hetzner_cloud/add_server.png')} />

### Server Location

Choose the **Server Location** where you want to run your **Server**.

<img class="border" alt="Create s Server" src={useBaseUrl('img/getting_started/hetzner_cloud/select_location.png')} />

### OS Image

Select **Ubuntu 22.04** or **Debian 11** as **OS Image**.

<img class="border" alt="Select OS Image" src={useBaseUrl('img/getting_started/hetzner_cloud/os_image.png')} />

### Server Type

Select the **Server Type** you want to deploy. We recommend at least **1 CPU** with **2 GB of Memory**.

<img class="border" alt="Create s Server" src={useBaseUrl('img/getting_started/hetzner_cloud/server_type.png')} />

### Launch Server

Enter the **Server Name** and click on the button **CREATE & BUY NOW** to launch the server.

<img class="border" alt="Launch Server" src={useBaseUrl('img/getting_started/hetzner_cloud/create_buy_now.png')} />

## CloudPanel Installation

### SSH Login

For installing **CloudPanel**, you first need to login with **SSH**.

If you have selected the **SSH Key** authentification method, you can log in with the following command:

```bash
ssh -i path_to_your_private_key root@serverIP
```

If you have selected the **Password** authentification method, you can login with the following command:

```bash
ssh root@serverIP
```

### Installer

Before we run the installer, we need to update the sources and install required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

To start the **CloudPanel** installation, execute the following command:

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner bash
```

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourFloatingIpAddress:8443**

<img class="border" src={useBaseUrl('img/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.

