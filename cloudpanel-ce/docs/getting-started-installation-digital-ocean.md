---
id: installation-digital-ocean
title: Digital Ocean
sidebar_label: Digital Ocean
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on [Digital Ocean](https://www.digitalocean.com/).

## Launching a Droplet

1) Login into your [Digital Ocean](https://cloud.digitalocean.com/login) account. <br />

2) Click in the left navigation on **Droplets** and click on button **Create Droplet**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_droplet_1.png')} />

### Choose an image

Select the **Debian 10.3** image and choose the size of your **Droplet**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_droplet_2.png')} />

### Datacenter region

Choose the **datacenter** where you want to run your **Droplet**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_droplet_3.png')} /> 

### Authentication Method

Select your **Authentication Method**, **SSH key** or **Password** <br />
How to create an SSH Key, is explained on the site: [How-to Add SSH Keys to New or Existing Droplets](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/)

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_droplet_4.png?v=1')} />

### Finalize and Create

Enter a **hostname** and click on the button **Create Droplet** to launch your **Droplet**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_droplet_5.png')} /> <br /><br />

## Assigning a Floating IP

A **Floating IP** (static ip) is highly recommended to have the same IP after changing the size of your Droplet.

To create a **Floating IP**, do the following steps:

1) Click in the left navigation on **Networking**.

2) Select your **Droplet** and click on the button **Assign Floating IP**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_floating_ip_1.png')} />

## Creating a Firewall

For better security, you should assign a firewall to control the incoming traffic to your **Droplet**.

1) Click in the left navigation on **Networking**.

2) Click on the button **Create Firewall**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_firewall_1.png')} /> <br /><br />

2) Enter a **Firewall** name and define the following Inbound Rules and apply the firewall to your **Droplet**.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/create_firewall_2.png')} /> <br /><br />

:::warning Security
The port 22 (SSH) and 8443 (CloudPanel) should be restricted to your IPs only.
:::

## CloudPanel Installation

### SSH Login

For installing the CloudPanel, we first need to login with **SSH**.

If you have selected the **SSH Key** authentification method, you can log in with the following command:

```bash
ssh -i path_to_your_private_key root@yourFloatingIpAddress
```

If you have selected the **Password** authentification method, you can login with the following command:

```bash
ssh root@yourFloatingIpAddress
```

### Installer

Before we run the installer, we need to update the sources and install required packages.

```bash
apt update && apt -y install curl wget sudo
```

To start the **CloudPanel** installation, execute the following command:

```bash
curl -sSL https://installer.cloudpanel.io/ce/v1/install.sh | sudo CLOUD=do bash
```

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourFloatingIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.