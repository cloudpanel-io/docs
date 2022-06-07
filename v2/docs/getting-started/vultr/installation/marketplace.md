---
id: marketplace
title: Marketplace
sidebar_label: Marketplace
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [VULTR](https://www.vultr.com/) via Marketplace.

## Launch an Instance

1. Login nto your [VULTR](https://my.vultr.com/) account.

2. Click on the button **Deploy CloudPanel Instance**.

[![Deploy CloudPanel Instance](/img/getting-started/vultr/deploy-cloudpanel-instance-one-click.png)](https://my.vultr.com/deploy?marketplace_app=cloudpanel1&marketplace_vendor_username=cloudpanel&ref=6879286)

### Server Type

Choose the **Server Type** you want to run the **Instance** on.

<img class="border" alt="Server Type" src={useBaseUrl('img/getting-started/vultr/server-type.png')} />

### Server Location

Choose the **Server Location** closest to your visitors.

<img class="border" alt="Server Location" src={useBaseUrl('img/getting-started/vultr/server-location.png')} />

### Server Image

Select **Ubuntu 22.04** or **Debian 11** as **Server Image**.

<img class="border" alt="Server Image" src={useBaseUrl('img/getting-started/vultr/server-image.png')} />

### Server Size

Select the **Server Size** you want to deploy. We recommend at least **1 vCPU** with **2 GB of Memory**.

<img class="border" alt="Server Size" src={useBaseUrl('img/getting-started/vultr/server-size.png')} />

### Finalize and Deploy

1. Select an **SSH Key** or receive the **root password** via e-mail.

<img class="border" alt="SSH Keys" src={useBaseUrl('img/getting-started/vultr/ssh-keys.png')} />

2. Enter the **Server Hostname & Label** and click on the button **Deploy Now** to launch the instance.

<img class="border" alt="Deploy Now" src={useBaseUrl('img/getting-started/vultr/deploy-now.png')} />

## Access CloudPanel

You can now access **CloudPanel** via Browser: **https://serverIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />