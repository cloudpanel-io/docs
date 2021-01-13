---
id: installation-aws
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run **CloudPanel** on an EC2 instance on [Amazon Web Services](https://aws.amazon.com/).

## Launching an EC2 Instance

### Choose AMI

1) Login into the [AWS Management Console](https://console.aws.amazon.com/ec2/). <br />

2) Click on the **AMI ID** to launch CloudPanel in your desired AWS Region.

| AWS Region | X64 | ARM64 ([Graviton](https://aws.amazon.com/ec2/graviton/)) |
| :---  | :--- | :--- |
| US East (N.Virginia)      | [Launch](https://ami-launcher.clp.io/?region=us-east-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=us-east-1&arch=arm64&version=1.0.5) |
| US East (Ohio)            | [Launch](https://ami-launcher.clp.io/?region=us-east-2&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=us-east-2&arch=arm64&version=1.0.5) |
| US West (N. California)   | [Launch](https://ami-launcher.clp.io/?region=us-west-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=us-west-1&arch=arm64&version=1.0.5) |
| US West (Oregon)          | [Launch](https://ami-launcher.clp.io/?region=us-west-2&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=us-west-2&arch=arm64&version=1.0.5) |
| Africa (Cape Town)        | [Launch](https://ami-launcher.clp.io/?region=af-south-1&arch=x86_64&version=1.0.5) | Not yet available |
| Asia Pacific (Hong Kong)  | [Launch](https://ami-launcher.clp.io/?region=ap-east-1&arch=x86_64&version=1.0.5) | Not yet available |
| Asia Pacific (Mumbai)     | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=ap-south-1&arch=arm64&version=1.0.5) |
| Asia Pacific (Seoul)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&arch=x86_64&version=1.0.5) | Not yet available |
| Asia Pacific (Singapore)  | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-1&arch=arm64&version=1.0.5) |
| Asia Pacific (Sydney)     | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=ap-southeast-2&arch=arm64&version=1.0.5) |
| Asia Pacific (Tokyo)      | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=ap-northeast-1&arch=arm64&version=1.0.5) |
| Canada (Central)          | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=ca-central-1&arch=arm64&version=1.0.5) |
| Europe (Frankfurt)        | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=eu-central-1&arch=arm64&version=1.0.5) |
| Europe (Ireland)          | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=eu-west-1&arch=arm64&version=1.0.5) |
| Europe (London)           | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=eu-west-2&arch=arm64&version=1.0.5) |
| Europe (Milan)            | [Launch](https://ami-launcher.clp.io/?region=eu-south-1&arch=x86_64&version=1.0.5) | Not yet available |
| Europe (Paris)            | [Launch](https://ami-launcher.clp.io/?region=eu-west-3&arch=x86_64&version=1.0.5) | Not yet available |
| Europe (Stockholm)        | [Launch](https://ami-launcher.clp.io/?region=eu-north-1&arch=x86_64&version=1.0.5) | Not yet available |
| Middle East (Bahrain)     | [Launch](https://ami-launcher.clp.io/?region=me-south-1&arch=x86_64&version=1.0.5) | Not yet available |
| South America (Sáo Paulo) | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&arch=x86_64&version=1.0.5) | [Launch](https://ami-launcher.clp.io/?region=sa-east-1&arch=arm64&version=1.0.5) |

### Choose Instance Type

Choose your instance type and click on the button **Next: Configure Instance Details** 

### Configure Instance

Select your network (VPC) and click on the button **Next: Add Storage**

### Add Storage

Change the size of your EBS volume if needed. The default volume size of the home partition is **25 GB** and can be increased later at any time.

### Add Tags

Click on button **Add Tag** and enter **Name** as Key and in **Value** enter the name of your instance.

<img class="border" src={useBaseUrl('img/v1/getting_started/aws_installation/add_tags.png')} />

### Configure Security Group

1) Create a **security group** with the following ports:

| Type | Protocol | Port Range  | Source  | Comment         |
| :--- | :---     | :---        |  :---   | :---            |
| Custom TCP Rule | TCP | 8443 | Your IP/32 | CloudPanel Port  |
| SSH             | TCP | 22   | Your IP/32 |                  |
| HTTP            | TCP | 80   | Anywhere (0.0.0.0/0, ::/0) ||
| HTTPS           | TCP | 443  | Anywhere (0.0.0.0/0, ::/0) ||

### Review

Select an existing key pair or create a new key pair. <br />
When you select **Create a new key pair** enter a **key pair name** and **Download Key Pair**.

<img class="border" src={useBaseUrl('img/v1/getting_started/aws_installation/create_key_pair.png')} />

Click on the button **Launch Instance** to get your instance up and running.

## Create Elastic IP Address

Having a static IP (Elastic IP Address) is needed for running web applications. <br />

1) To create an **Elastic IP Address** click in the left navigation on **Network & Security** --> **Elastic IPs**.

2) Click on button **Allocate Elastic IP address** to create an **Elastic IP Address**.

3) Select the **Allocated IP Address** and **Associate** it to your launched instance.

<img class="border" src={useBaseUrl('img/v1/getting_started/aws_installation/associate_eip.png')} />

## Access CloudPanel

You can now access the CloudPanel via Browser: **https://yourElasticIpAddress:8443**

<img class="border" src={useBaseUrl('img/v1/getting_started/ignore_self_signed_certificate.png')} />

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to CloudPanel.

### SSH Access

With your previously created private key, you can connect to the instance via SSH. <br />
Make sure that the private key has read-only (chmod 400) permissions.

```bash
ssh -i path_to_your_private_key.pem admin@yourElasticIpAddress
```

With the following command you can become **root**.

```bash
sudo su root
```