---
id: marketplace
title: Digital Ocean Marketplace
sidebar_label: Marketplace
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to run **CloudPanel** on [Digital Ocean](https://www.digitalocean.com/).

## Launching a Droplet

1. Login to your [Digital Ocean](https://cloud.digitalocean.com/login) account.

2. Click on the button **Create CloudPanel Droplet**.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
]}>
<TabItem value="ubuntu-24.04">

[![Create CloudPanel Droplet](/img/getting-started/digital-ocean/create-droplet-one-click.png)](https://marketplace.digitalocean.com/apps/cloudpanel-2-ubuntu-24-04)

</TabItem>

</Tabs>

### Choose Region

Choose the **Region** where you want to run your **Droplet**.

<img class="border" alt="Datacenter Region" src={useBaseUrl('img/getting-started/digital-ocean/datacenter-region.png')} />

### Droplet Size

Choose the size of your **Droplet**, e.g., **Premium AMD with NVMe SSD**.

<img class="border" alt="Droplet Size" src={useBaseUrl('img/getting-started/digital-ocean/droplet-size.png')} />

### Authentication Method

Select your **Authentication Method**, **SSH keys** or **Password**. <br />
How to create an SSH Key, is explained on the site: [How-to Add SSH Keys to New or Existing Droplets](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/)

<img class="border" alt="Authentication Method" src={useBaseUrl('img/getting-started/digital-ocean/authentication-method.png')} />

### Finalize and Create

Enter a **hostname**, and click on the button **Create Droplet** to launch your **Droplet**.

<img class="border" alt="Finalize and Create" src={useBaseUrl('img/getting-started/digital-ocean/finalize-and-create.png')} />

## Assigning a Reserved IP

A **Reserved IP** (static ip) is highly recommended to have the same IP after changing the size of your **Droplet**.

To create a **Reserved IP**, do the following steps:

1. In the left navigation, click on **Networking**.

2. Select your **Droplet** and click on the button **Assign Reserved IP**.

<img class="border" alt="Assigning a Reserved IP" src={useBaseUrl('img/getting-started/digital-ocean/assigning-a-reserved-ip.png?v=0.0.1')} />

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
It's highly recommended to open port **8443** only for your IP via [firewall](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/).
:::

You can now access **CloudPanel** via Browser: **https://yourIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />