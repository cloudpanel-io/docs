---
id: installation-microsoft-azure
title: Microsoft Azure
sidebar_label: Microsoft Azure
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run CloudPanel on the [Microsoft Azure](https://azure.microsoft.com/).

## Launching a Virtual Machine

1) Login into the [Microsoft Azure Portal](https://portal.azure.com/)

2) Click in the left navigation on **Virtual Machines** and click on the button **Create virtual machine**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/create_virtual_machine.png')} />

### Instance details

Enter the name of your **Virtual Machine**, select a region and select the **Debian 10 "Buster"** image <br />
and select the size of your instance.

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/instance_details.png')} />

### Administrator account

As **Authentication type** select **SSH Public Key** (Recommended) or **Password**. <br />

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

Select **Standard SSD** as OS disk type and click on the button **Next: Networking >**

<img class="border" src={useBaseUrl('img/v1/getting_started/msa_installation/disks.png')} />