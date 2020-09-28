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
| US East (N.Virginia)      | [ami-09df0065bfb628ecf](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-09df0065bfb628ecf) | [ami-00b348d45bd85b0d6](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-00b348d45bd85b0d6) |
| US East (Ohio)            | [ami-08148747ca2df6b4f](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-08148747ca2df6b4f) | [ami-02ce804f97cdddec5](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-02ce804f97cdddec5) |
| US West (N. California)   | [ami-05006c2e5904bb4a5](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-05006c2e5904bb4a5) | [ami-0d552ea26a3350367](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0d552ea26a3350367) |
| US West (Oregon)          | [ami-0f40de9ff6ef1f78e](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0f40de9ff6ef1f78e) | [ami-0a00535949d25d284](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0a00535949d25d284) |
| Africa (Cape Town)        | [ami-0731b370719e014fa](https://console.aws.amazon.com/ec2/v2/home?region=af-south-1#LaunchInstanceWizard:ami=ami-0731b370719e014fa) | Not yet available |
| Asia Pacific (Hong Kong)  | [ami-0573e336c18a57df3](https://console.aws.amazon.com/ec2/v2/home?region=ap-east-1#LaunchInstanceWizard:ami=ami-0573e336c18a57df3) | Not yet available |
| Asia Pacific (Mumbai)     | [ami-02972fcc732f0c42d](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-02972fcc732f0c42d) | [ami-0ebbf6fd671e9c72b](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0ebbf6fd671e9c72b) |
| Asia Pacific (Seoul)      | [ami-038ae448098fd9007](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-038ae448098fd9007) | Not yet available |
| Asia Pacific (Singapore)  | [ami-04d1cbff70cd29a19](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-04d1cbff70cd29a19) | [ami-05d798d446be38099](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-05d798d446be38099) |
| Asia Pacific (Sydney)     | [ami-06b46d1f5f85ca77d](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-06b46d1f5f85ca77d) | [ami-0a43582793a3fd219](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0a43582793a3fd219) |
| Asia Pacific (Tokyo)      | [ami-074a3dc3d9f3134f1](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-074a3dc3d9f3134f1) | [ami-0440d5071e13ca116](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0440d5071e13ca116) |
| Canada (Central)          | [ami-0b40d6afac1ceee8e](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-0b40d6afac1ceee8e) | Not yet available |
| Europe (Frankfurt)        | [ami-0e5b3ee6dd0872115](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-0e5b3ee6dd0872115) | [ami-041aabae5ca84b124](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-041aabae5ca84b124) |
| Europe (Ireland)          | [ami-0579442f9a7dbed8b](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0579442f9a7dbed8b) | [ami-0f7ab90fd715b8464](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0f7ab90fd715b8464) |
| Europe (London)           | [ami-0f06ece96c196c34d](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0f06ece96c196c34d) | Not yet available |
| Europe (Milan)            | [ami-02c2b24ba47e6a07a](https://console.aws.amazon.com/ec2/v2/home?region=eu-south-1#LaunchInstanceWizard:ami=ami-02c2b24ba47e6a07a) | Not yet available |
| Europe (Paris)            | [ami-05019cbfd70d0cdc7](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-05019cbfd70d0cdc7) | Not yet available |
| Europe (Stockholm)        | [ami-08c21272bd4e8fa47](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-08c21272bd4e8fa47) | Not yet available |
| Middle East (Bahrain)     | [ami-03a41f58dcc700190](https://console.aws.amazon.com/ec2/v2/home?region=me-south-1#LaunchInstanceWizard:ami=ami-03a41f58dcc700190) | Not yet available |
| South America (Sáo Paulo) | [ami-082b12f2e337c9beb](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-082b12f2e337c9beb) | Not yet available |

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