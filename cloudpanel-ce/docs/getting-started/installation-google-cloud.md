---
id: installation-google-cloud
title: Google Cloud
sidebar_label: Google Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on the [Google Cloud](https://cloud.google.com).

## Launching a VM Instance

1) Login into the [Google Cloud Console](https://console.cloud.google.com/).

2) Click in the left navigation on **Compute Engine** --> **VM instances** and click on the button **Create**.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/vm_instance.png')} />

### Name and Region

Enter the **Name** of the instance and select a **Region** to deploy.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/vm_name_region.png')} />

### Machine Configuration

Select the **Machine Family**, **Series** and **Machine Type**.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/machine_configuration.png')} />

### Boot Disk

Use **Debian 10 (Buster)** as **Boot disk** image.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/boot_disk_image.png')} />

### Firewall

1) Allow **HTTP** and **HTTPS** Traffic.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/allow_http_https_traffic.png')} /> <br /> <br />

2) Click on **Management, security, disks, networking, sole tenancy** to continue with the next step.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/management_security_disk_settings.png')} /> <br /> <br />

3) Click on the tab **Security** and enter your [Public SSH Key](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys).

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/public_ssh_key.png')} /> 

### Networking

In the **Networking** section we will add a **Network Tag** and create a **Static IP Address** for our instance.

1) In the field **Network tags** add the tag: **cloudpanel**. <br />
The **Network Tag** is needed for assigning **Firewall Rules** to our instance.

2) In the **Network interface** settings click on **External IP** --> **Create IP address** to create a static IP address.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/networking_network_tag_static_ip_address.png')} /> <br /> <br />

### Create

Click on the button **Create** to launch the **VM Instance**.

## Firewall Rules

For accessing the **CloudPanel** later, we need to create a **Firewall Rule**.

1) Click in the left navigation on **Networking** -> **VPC Network** -> **Firewall**.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/vpc_network_firewall_rules.png?v=1')} /> <br /><br />

2) Click on the button **CREATE FIREWALL RULE** and create the following rule:

**Name:** allow-cloudpanel <br />
**Targets:** Specified target tags <br />
**Target tags:** cloudpanel <br />
**Source filter:** IP ranges <br />
**Source IP ranges:** 0.0.0.0/0 or **your IP** if you have a fixed IP <br />
**Protocols and ports:** tcp: 8443 <br />

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/cloudpanel_firewall_rule.png')} />

## CloudPanel Installation

### SSH Login

For installing **CloudPanel**, we first need to login with **SSH**. <br />

```bash
ssh -i path_to_your_private_key username@staticIpAddress
```

The **username** can be found at the end of your **Public SSH Key**. <br />
In the following example, the **username** would be **john**.

```bash
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDjC22YtN9qsN/F1piw5FHtG3RqXjHhI5CdHIpmN
pQ1LeXRmODsfzv4pntYeGw0dfBFidlmxujNLyd8FMZ8Yida5zcciWkLvqAAkTlwCAWNg/kdJI0R4B
wuSgYUjxgOU5LPYkm4MixSOvC+jI27Ge0nKMiqUaJoSrYfNJqraMNuikNrwQn+I7w3var2aebhQtR
77Lx1dHoAF/pP9DIFYfzFZ7CsQc8pBXj3 john@macbook
```

:::warning
Do not use the username **cloudpanel** as it's a reserved one.
:::

The **static IP Address** can be found on the VM instances overview, it's called **External IP**.

<img class="border" src={useBaseUrl('img/v1/getting_started/gce_installation/static_ip.png')} /> <br /> <br />

### Installer

Before running the installer, we need to switch the user to **root** to install the required packages.

```bash
sudo su root
```

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

To start the **CloudPanel** installation, execute the following command:

```bash
curl -sSL https://installer.cloudpanel.io/ce/v1/install.sh | sudo CLOUD=gce bash
```

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourStaticIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.
