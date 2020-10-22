---
id: installation-digital-ocean-marketplace
title: Digital Ocean Marketplace
sidebar_label: Marketplace
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on [Digital Ocean](https://www.digitalocean.com/) via Marketplace.

## Launching a Droplet

1) Login into your [Digital Ocean](https://cloud.digitalocean.com/login) account. <br />

2) Click on the button **Create CloudPanel Droplet**.

[![Create CloudPanel Droplet](/img/v1/getting_started/do_installation/create_cloudpanel_droplet_one_click.png)](https://cloud.digitalocean.com/droplets/new?onboarding_origin=marketplace&image=mgtcommercegmbh-cloudpanel1-10-4)

### Select Droplet Size

Select the size of your **Droplet** you want to launch.

<img class="border" src={useBaseUrl('img/v1/getting_started/do_installation/select_droplet_size_marketplace.png')} />

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

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourFloatingIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.