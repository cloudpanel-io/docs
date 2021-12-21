---
id: installation-hetzner-cloud
title: Hetzner Cloud
sidebar_label: Hetzner Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on [VULTR](https://www.vultr.com/).

## Deploy an Instance

1) Login into your [VULTR](https://my.vultr.com/) account. <br />

2) Click on the button **Deploy CloudPanel Instance**.

[![Deploy CloudPanel Instance](/img/v1/getting_started/vultr_installation/create_cloudpanel_instance_one_click.png)](https://my.vultr.com/deploy?marketplace_app=cloudpanel1&marketplace_vendor_username=cloudpanel&ref=6879286)

### Choose Server Type

Choose the **Server Type** you want to run the **Instance** on.

<img class="border" src={useBaseUrl('img/v1/getting_started/vultr_installation/choose_server_type_marketplace.png')} />

### Server Location

Choose the **Server Location** where you want to run your **Instance**.

<img class="border" src={useBaseUrl('img/v1/getting_started/vultr_installation/select_server_location_marketplace.png')} />

### Server Size

Select the **Server Size** you want to **deploy**. We recommend at least **1 CPU** and **2 GB of Memory**. 

<img class="border" src={useBaseUrl('img/v1/getting_started/vultr_installation/choose_server_size_marketplace.png')} />

### Finalize and Deploy

Enter a **Server Hostname & Label** like **cloudpanel** and click on the button **Deploy Now**.

<img class="border" src={useBaseUrl('img/v1/getting_started/vultr_installation/enter_server_hostname_deploy.png')} /> <br /><br />

## Creating a Firewall

For higher security, we recommend assigning a **Firewall** to control the incoming traffic to your **Instance**.

1) Click in the left navigation on **Products** and then on the tab **Firewall**.

2) Click on button **Add Firewall Group**.

3) Add a **Description** like **CloudPanel** and click on the button **Add Firewall Group**.

4) Open the ports **80 (HTTP)** and **443 (HTTPS)** for everyone.

<img class="border" src={useBaseUrl('img/v1/getting_started/vultr_installation/add_firewall_group.png')} />

5) Click on **Linked Instances** in the left menu and add your instance.

:::warning Security
The port 22 (SSH) and 8443 (CloudPanel) should be restricted to your IPs only.
:::

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourFloatingIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.






