---
id: ami
title: Amazon Web Services AMI
sidebar_label: AMI
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to run **CloudPanel** on an EC2 instance on [Amazon Web Services](https://aws.amazon.com/).

:::warning MySQL 8.0
The provided **AMIS** have **MySQL 8.0** installed. If you need **MariaDB**, you need to use the [Installer](../installer).
:::

## Launching an EC2 Instance

### Choose AMI

1. Log in to the [AWS Management Console](https://console.aws.amazon.com/ec2/). 

2. Select an **Operating System** and click on **Launch** to start a **CloudPanel** instance.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
]}>
<TabItem value="ubuntu-24.04">

| AWS Region                | X86_64                                                                                                         | ARM64 ([Graviton](https://aws.amazon.com/ec2/graviton/))                                                      |
|:--------------------------|:---------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| US East (N.Virginia)      | [Launch](https://ami-launcher.clp.io/?region=us-east-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-east-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| US East (Ohio)            | [Launch](https://ami-launcher.clp.io/?region=us-east-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-east-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| US West (N. California)   | [Launch](https://ami-launcher.clp.io/?region=us-west-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-west-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| US West (Oregon)          | [Launch](https://ami-launcher.clp.io/?region=us-west-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-west-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| Africa (Cape Town)        | [Launch](https://ami-launcher.clp.io/?region=af-south-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=af-south-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Asia Pacific (Hong Kong)  | [Launch](https://ami-launcher.clp.io/?region=ap-east-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=ap-east-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| Asia Pacific (Mumbai)     | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Asia Pacific (Seoul)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1) |
| Asia Pacific (Singapore)  | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1) |
| Asia Pacific (Sydney)     | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1) |
| Asia Pacific (Tokyo)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1) |
| Canada (Central)          | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)   |
| Europe (Frankfurt)        | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)   |
| Europe (Ireland)          | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| Europe (London)           | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| Europe (Milan)            | [Launch](https://ami-launcher.clp.io/?region=eu-south-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-south-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Europe (Paris)            | [Launch](https://ami-launcher.clp.io/?region=eu-west-3&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-3&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |
| Europe (Spain)            | [Launch](https://ami-launcher.clp.io/?region=eu-south-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-south-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Europe (Stockholm)        | [Launch](https://ami-launcher.clp.io/?region=eu-north-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-north-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Europe (Zurich)           | [Launch](https://ami-launcher.clp.io/?region=eu-central-2&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=eu-central-2&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)   |
| Middle East (Bahrain)     | [Launch](https://ami-launcher.clp.io/?region=me-south-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=me-south-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)     |
| Middle East (UAE)         | [Launch](https://ami-launcher.clp.io/?region=me-central-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=me-central-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)   |
| South America (Sáo Paulo) | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&name=cloudpanel-ubuntu-24.04-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&name=cloudpanel-ubuntu-24.04-arm64&version=2.5.1)      |

</TabItem>
<TabItem value="debian-12">

| AWS Region                | X86_64                                                                                                      | ARM64 ([Graviton](https://aws.amazon.com/ec2/graviton/))                                                   |
|:--------------------------|:------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| US East (N.Virginia)      | [Launch](https://ami-launcher.clp.io/?region=us-east-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-east-1&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| US East (Ohio)            | [Launch](https://ami-launcher.clp.io/?region=us-east-2&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-east-2&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| US West (N. California)   | [Launch](https://ami-launcher.clp.io/?region=us-west-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-west-1&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| US West (Oregon)          | [Launch](https://ami-launcher.clp.io/?region=us-west-2&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=us-west-2&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| Africa (Cape Town)        | [Launch](https://ami-launcher.clp.io/?region=af-south-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=us-west-2&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| Asia Pacific (Hong Kong)  | [Launch](https://ami-launcher.clp.io/?region=ap-east-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=af-south-1&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Asia Pacific (Mumbai)     | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Asia Pacific (Seoul)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-debian-12-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-debian-12-arm64&version=2.5.1) |
| Asia Pacific (Singapore)  | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&name=cloudpanel-debian-12-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&name=cloudpanel-debian-12-arm64&version=2.5.1) |
| Asia Pacific (Sydney)     | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&name=cloudpanel-debian-12-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&name=cloudpanel-debian-12-arm64&version=2.5.1) |
| Asia Pacific (Tokyo)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-debian-12-x86_64&version=2.5.1) | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&name=cloudpanel-debian-12-arm64&version=2.5.1) |
| Canada (Central)          | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&name=cloudpanel-debian-12-arm64&version=2.5.1)   |
| Europe (Frankfurt)        | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&name=cloudpanel-debian-12-arm64&version=2.5.1)   |
| Europe (Ireland)          | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| Europe (London)           | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| Europe (Milan)            | [Launch](https://ami-launcher.clp.io/?region=eu-south-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-south-1&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Europe (Paris)            | [Launch](https://ami-launcher.clp.io/?region=eu-west-3&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=eu-west-3&name=cloudpanel-debian-12-arm64&version=2.5.1)      |
| Europe (Spain)            | [Launch](https://ami-launcher.clp.io/?region=eu-south-2&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-south-2&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Europe (Stockholm)        | [Launch](https://ami-launcher.clp.io/?region=eu-north-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=eu-north-1&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Europe (Zurich)           | [Launch](https://ami-launcher.clp.io/?region=eu-central-2&name=cloudpanel-debian-12-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=eu-central-2&name=cloudpanel-debian-12-arm64&version=2.5.1)   |
| Middle East (Bahrain)     | [Launch](https://ami-launcher.clp.io/?region=me-south-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)     | [Launch](https://ami-launcher.clp.io/?region=me-south-1&name=cloudpanel-debian-12-arm64&version=2.5.1)     |
| Middle East (UAE)         | [Launch](https://ami-launcher.clp.io/?region=me-central-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)   | [Launch](https://ami-launcher.clp.io/?region=me-central-1&name=cloudpanel-debian-12-arm64&version=2.5.1)   |
| South America (Sáo Paulo) | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&name=cloudpanel-debian-12-x86_64&version=2.5.1)      | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&name=cloudpanel-debian-12-arm64&version=2.5.1)      |

</TabItem>
</Tabs>

### Name and tags

Enter the name of your **EC2 Instance**, e.g., **my-cloudpanel-instance**.

<img alt="Name and Tags" src={useBaseUrl('img/getting-started/amazon-web-services/name-and-tags.png?v=0.0.1')} />

### Instance Type

Choose an **instance type** and ensure that it fits the [minimum requirements](../../../../requirements).

<img alt="Instance Type" src={useBaseUrl('img/getting-started/amazon-web-services/instance-type.png?v=0.0.2')} />

### Key pair (login)

Select a **Key pair** or [Create a new key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html?icmpid=docs_ec2_console) to log in via **SSH** after launching the **instance**.

<img alt="Key Pair" src={useBaseUrl('img/getting-started/amazon-web-services/key-pair.png?v=0.0.2')} />

### Network settings

1. Click on **Edit** to make changes on the **Network Settings**.

<img alt="Edit Network Settings" src={useBaseUrl('img/getting-started/amazon-web-services/network-settings-edit.png?v=0.0.3')} />

2. Select the **VPC**, **Subnet**, and enter a **Security Group Name** and **Description**.

<img alt="Edit Network Settings" src={useBaseUrl('img/getting-started/amazon-web-services/network-settings-security-group-name.png?v=0.0.2')} />

#### Inbound security groups rules

:::warning CloudPanel Firewall
All pre-configured [CloudPanel Firewall Rules](../../../../admin-area/security/#firewall) are not needed and should be removed. <br />
If you want to use the **CloudPanel** integrated firewall for whitelisting ports, create a **security group** with one rule which allows **All TCP**.
In that case, all traffic is filtered by the [CloudPanel Firewall](../../../../admin-area/security/#firewall) and not by **AWS**.
:::

Create a **Security Group** with the following rules:

- **SSH (22)** - For your IP only
- **HTTP (80)** - For everyone
- **HTTPS (443)** - For everyone
- **UDP (443)** - For everyone (Required for HTTP3)
- **CloudPanel (8443)** - For your IP only

<img alt="Inbound security groups rules" src={useBaseUrl('img/getting-started/amazon-web-services/network-settings-inbound-rules.png?v=0.0.1')} />

### Configure Storage

By default, the **root partition** has **10 GB** and the **home partition** **25 GB**. <br />
If you need more disk space, increase the **home partition**, e.g. to **50 GB**.

<img alt="Configure Storage" src={useBaseUrl('img/getting-started/amazon-web-services/configure-storage.png?v=0.0.1')} />

### Launch Instance

Click on the button **Launch Instance** to launch the **Instance**.

<img alt="Launch Instance" src={useBaseUrl('img/getting-started/amazon-web-services/launch-instance.png?v=0.0.1')} />

## Create Elastic IP Address

A static IP ([Elastic IP Address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)) is needed for running web applications. <br />

1. To create an **Elastic IP Address** click in the left navigation on **Network & Security** --> **Elastic IPs**.

2. Click on button **Allocate Elastic IP address** to create an **Elastic IP Address**.

3. Select the **Allocated IP Address** and **Associate** it to your launched instance.

<img alt="Associate Elastic IP Address" class="border" src={useBaseUrl('img/getting-started/amazon-web-services/associate-eip.png')} />

## Access CloudPanel

You can now access **CloudPanel** via Browser: **https://yourElasticIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />

### SSH Access

With your previously created private key, you can connect to the instance via **SSH**. <br />

Make sure that the private key has read-only (chmod 400) permissions.

<Tabs
defaultValue="ubuntu"
values={[
{ label: 'Ubuntu', value: 'ubuntu', },
{ label: 'Debian', value: 'debian', },
]}>
<TabItem value="ubuntu">

```bash
ssh -i path_to_your_private_key.pem ubuntu@yourElasticIpAddress
```

With the following command, you can become **root**.

```bash
sudo su root
```

</TabItem>
<TabItem value="debian">

```bash
ssh -i path_to_your_private_key.pem admin@yourElasticIpAddress
```

With the following command, you can become **root**.

```bash
sudo su root
```

</TabItem>
</Tabs>