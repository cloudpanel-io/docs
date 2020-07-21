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

| AWS Region|  AMI ID |
| :---  | :--- |
| US East (N.Virginia)      | [ami-0aeded0c7628530be](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0aeded0c7628530be) |
| US East (Ohio)            | [ami-00c94f05179295325](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-00c94f05179295325) |
| US West (N. California)   | [ami-0ec3d360723016cf8](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0ec3d360723016cf8) |
| US West (Oregon)          | [ami-0f04ec17926ddc750](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0f04ec17926ddc750) |
| Africa (Cape Town)        | [ami-03aa8293f19cc6cfa](https://console.aws.amazon.com/ec2/v2/home?region=af-south-1#LaunchInstanceWizard:ami=ami-03aa8293f19cc6cfa) |
| Asia Pacific (Hong Kong)  | [ami-0cf7bb62e3b53b4ce](https://console.aws.amazon.com/ec2/v2/home?region=ap-east-1#LaunchInstanceWizard:ami=ami-0cf7bb62e3b53b4ce) |
| Asia Pacific (Mumbai)     | [ami-0487abb7fd064d5e0](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-0487abb7fd064d5e0) |
| Asia Pacific (Seoul)      | [ami-01f50261986d44db7](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-01f50261986d44db7) |
| Asia Pacific (Singapore)  | [ami-0f09ef1ea11ae0122](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0f09ef1ea11ae0122) |
| Asia Pacific (Sydney)     | [ami-04aa18e93e09cf7f4](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-04aa18e93e09cf7f4) |
| Asia Pacific (Tokyo)      | [ami-079c7c8351441f145](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-079c7c8351441f145) |
| Canada (Central)          | [ami-0218695ab4f872ea2](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0218695ab4f872ea2) |
| Europe (Frankfurt)        | [ami-0857425ade7b3bb4a](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-0857425ade7b3bb4a) |
| Europe (Ireland)          | [ami-05a99feec3bae96ed](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-05a99feec3bae96ed) |
| Europe (London)           | [ami-0606c89e607adb234](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0606c89e607adb234) |
| Europe (Milan)            | [ami-042a3af95f165ce21](https://console.aws.amazon.com/ec2/v2/home?region=eu-south-1#LaunchInstanceWizard:ami=ami-042a3af95f165ce21) |
| Europe (Paris)            | [ami-0bad4ea3f4aab5471](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-0bad4ea3f4aab5471) |
| Europe (Stockholm)        | [ami-054b924f010dc1884](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-054b924f010dc1884) |
| Middle East (Bahrain)     | [ami-09b13604ba1fe54c7](https://console.aws.amazon.com/ec2/v2/home?region=me-south-1#LaunchInstanceWizard:ami=ami-09b13604ba1fe54c7) |
| South America (Sáo Paulo) | [ami-09366743c588302a5](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-09366743c588302a5) |

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