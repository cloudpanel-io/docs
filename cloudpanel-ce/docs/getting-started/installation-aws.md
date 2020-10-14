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
| US East (N.Virginia)      | [ami-03e4ea0ee604c21ec](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-03e4ea0ee604c21ec) | [ami-0285ff847eaeb0a1d](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0285ff847eaeb0a1d) |
| US East (Ohio)            | [ami-09faecce24c5b38cc](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-09faecce24c5b38cc) | [ami-06773376ceb5dfcd8](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-06773376ceb5dfcd8) |
| US West (N. California)   | [ami-0c44c476015f9ae5e](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0c44c476015f9ae5e) | [ami-04713ba8e2941e2ea](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-04713ba8e2941e2ea) |
| US West (Oregon)          | [ami-0701288e6e66764fe](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0701288e6e66764fe) | [ami-09476410ba9abd59e](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-09476410ba9abd59e) |
| Africa (Cape Town)        | [ami-09754cb089e7e2321](https://console.aws.amazon.com/ec2/v2/home?region=af-south-1#LaunchInstanceWizard:ami=ami-09754cb089e7e2321) | Not yet available |
| Asia Pacific (Hong Kong)  | [ami-0101bb746fbe7275e](https://console.aws.amazon.com/ec2/v2/home?region=ap-east-1#LaunchInstanceWizard:ami=ami-0101bb746fbe7275e) | Not yet available |
| Asia Pacific (Mumbai)     | [ami-0e83fb832a4d00675](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-0e83fb832a4d00675) | [ami-01dbb44684fa9a1e1](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-01dbb44684fa9a1e1) |
| Asia Pacific (Seoul)      | [ami-01bea6c8228027074](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-01bea6c8228027074) | Not yet available |
| Asia Pacific (Singapore)  | [ami-029ba1b238c056115](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-029ba1b238c056115) | [ami-0d08c76118b78a7ce](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-0d08c76118b78a7ce) |
| Asia Pacific (Sydney)     | [ami-0a92bdeecf070a966](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0a92bdeecf070a966) | [ami-0aab8b0ac4f5b4806](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0aab8b0ac4f5b4806) |
| Asia Pacific (Tokyo)      | [ami-0eaf41750f0c3986b](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0eaf41750f0c3986b) | [ami-0a6bf14f0d862f993](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0a6bf14f0d862f993) |
| Canada (Central)          | [ami-07b54f15e58ef326c](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-07b54f15e58ef326c) | Not yet available |
| Europe (Frankfurt)        | [ami-03e3b0f5e18beb461](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-03e3b0f5e18beb461) | [ami-0c45178b1beaacfac](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-0c45178b1beaacfac) |
| Europe (Ireland)          | [ami-0dada226f75b344d9](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-0dada226f75b344d9) | [ami-098ac3e0770b39228](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-098ac3e0770b39228) |
| Europe (London)           | [ami-07cb34b794189bbdf](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-07cb34b794189bbdf) | Not yet available |
| Europe (Milan)            | [ami-0571e456aadaca92b](https://console.aws.amazon.com/ec2/v2/home?region=eu-south-1#LaunchInstanceWizard:ami=ami-0571e456aadaca92b) | Not yet available |
| Europe (Paris)            | [ami-02569dca0aa011d6d](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-02569dca0aa011d6d) | Not yet available |
| Europe (Stockholm)        | [ami-001d69c3514e52a10](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-001d69c3514e52a10) | Not yet available |
| Middle East (Bahrain)     | [ami-018c89ab2d3b79cf6](https://console.aws.amazon.com/ec2/v2/home?region=me-south-1#LaunchInstanceWizard:ami=ami-018c89ab2d3b79cf6) | Not yet available |
| South America (Sáo Paulo) | [ami-00c7af2baff22aa6a](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-00c7af2baff22aa6a) | Not yet available |

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