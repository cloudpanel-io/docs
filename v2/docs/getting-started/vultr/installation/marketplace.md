---
id: marketplace
title: Vultr Marketplace
sidebar_label: Marketplace
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


On this page, we explain step by step how to run **CloudPanel** on [VULTR](https://www.vultr.com/).

## Launch an Instance

1. Login nto your [VULTR](https://my.vultr.com/) account.

2. Click on the button **Deploy CloudPanel Instance**.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
]}>
<TabItem value="ubuntu-24.04">

  [![Deploy CloudPanel Instance](/img/getting-started/vultr/deploy-cloudpanel-instance-one-click.png)](#)

</TabItem>
<TabItem value="debian-12">

[![Deploy CloudPanel Instance](/img/getting-started/vultr/deploy-cloudpanel-instance-one-click.png)](#)

</TabItem>
</Tabs>

### Choose Type

Choose the **Type** like **Optimized Cloud Compute - Dedicated CPU** or **Cloud Compute - Shared CPU**.

<img class="border" alt="Server Type" src={useBaseUrl('img/getting-started/vultr/choose-type.png?v=0.0.1')} />

### Choose Location

Choose the **Instance Location** closest to your visitors.

<img class="border" alt="Server Location" src={useBaseUrl('img/getting-started/vultr/choose-location.png?v=0.0.1')} />

### Choose Plan

Select the **Instance Size** you want to deploy. We recommend the **AMD High Performance** with at least **1 vCPU** with **2 GB of Memory**.

<img class="border" alt="Choose Plan" src={useBaseUrl('img/getting-started/vultr/choose-plan.png?v=0.0.1')} />

### Server Settings

Choose an **SSH Key** to connect via **SSH** after deploying the instance.

<img class="border" alt="Server Settings" src={useBaseUrl('img/getting-started/vultr/server-settings.png?v=0.0.1')} />

### Server Hostname & Deploy Now

Enter a **server hostname** and click on the button **Deploy Now**.

<img class="border" alt="Server Settings" src={useBaseUrl('img/getting-started/vultr/server-hostname.png?v=0.0.1')} />

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
It's highly recommended to open port **8443** only for your IP via [firewall](https://www.vultr.com/docs/vultr-firewall/).
:::

You can now access **CloudPanel** via Browser: **https://serverIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />