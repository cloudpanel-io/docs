---
id: installation-microsoft-azure
title: Microsoft Azure
sidebar_label: Microsoft Azure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on the [Microsoft Azure](https://azure.microsoft.com/).

## Launching a Virtual Machine

1) Login into the [Microsoft Azure Portal](https://portal.azure.com/)

2) Click in the left navigation on **Virtual Machines** and click on the button **Create virtual machine**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/create_virtual_machine.png')} />

### Instance details

Enter the name of your **Virtual Machine**, select a region and select the **Debian 10 "Buster"** image <br />
and select the size of your instance.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/instance_details.png')} />

### Administrator account

As **Authentication type** select **SSH Public Key** (recommended) or **Password**. <br />

On the following site, you can learn how to create an **SSH Public Key**: <br /> 
[https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys)

Enter the **Username** and your **SSH Public Key**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/ssh_username_public_key.png')} />

### Inbound port rules

Select which virtual machine network ports are accessible from the public internet. 
You can specify more limited or granular network access on the Networking tab.

Select the inbound ports: **HTTP**, **HTTPS** and **SSH** and click on the button **Next: Disks >**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/inbound_port_rules.png')} />

### Disks

Select **Standard SSD** as OS disk type and continue to **Advanced**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/disks.png')} />

### Advanced

Select the latest **VM generation** to benefit from the newest developments and continue to **Review + create**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/vm_generation.png')} />

### Review + create

Click on the button **Create** to launch your virtual machine.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/final_create_virtual_machine.png')} />

## Static IP Address

For web applications, a **Static IP Address** is needed. <br />

1) To make your assigned **Public IP Address** static, click on the **IP**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/create_static_ip_1.png')} /> <br /><br />

2) Change the **Assignment** from **Dynamic** to **Static** and click on the button **Save**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/create_static_ip_2.png')} />

## Firewall

To access the **CloudPanel** after the installation, we need to create an inbound port rule for the port **8443**.

1) Click in the left navigation on **Settings** --> **Networking** and click on the button **Add inbound port rule**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/create_cloudpanel_inbound_port.png')} /> <br /><br />

2) As **Source** select **Any** or better **IP Addresses** to restrict the **CloudPanel** access to specific IPs.

Click on the button **Add** to create the **security rule**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/cloudpanel_inbound_port_rule.png')} />

## CloudPanel Installation

### SSH Login

For installing the CloudPanel, we first need to login with **SSH**. <br />

```bash
ssh -i path_to_your_private_key cloudpanel@staticIpAddress
```

The **static IP Address** can be found on the instance overview, it's called **Public IP address**.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/instance_overview_public_ip_address.png')} />

### Installer

Before running the installer, we need to switch the user to **root** to install the required packages.

```bash
sudo su root
```

```bash
apt update && apt -y install curl wget sudo
```

To start the **CloudPanel** installation, execute the following command:

```bash
curl -sSL https://installer.cloudpanel.io/ce/v1/install.sh | sudo CLOUD=msa bash
```

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourStaticIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.







