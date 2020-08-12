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
| US East (N.Virginia)      | [ami-088659bd4a7fff3e2](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-088659bd4a7fff3e2) |
| US East (Ohio)            | [ami-0495afb4f1e6367a4](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-0495afb4f1e6367a4) |
| US West (N. California)   | [ami-0def8854073603046](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-0def8854073603046) |
| US West (Oregon)          | [ami-0a285fe98f50d3acf](https://console.aws.amazon.com/ec2/v2/home?region=us-west-2#LaunchInstanceWizard:ami=ami-0a285fe98f50d3acf) |
| Africa (Cape Town)        | [ami-0146de6accef3c6ea](https://console.aws.amazon.com/ec2/v2/home?region=af-south-1#LaunchInstanceWizard:ami=ami-0146de6accef3c6ea) |
| Asia Pacific (Hong Kong)  | [ami-0b6e2885bb76383eb](https://console.aws.amazon.com/ec2/v2/home?region=ap-east-1#LaunchInstanceWizard:ami=ami-0b6e2885bb76383eb) |
| Asia Pacific (Mumbai)     | [ami-0e391bcb0a700351d](https://console.aws.amazon.com/ec2/v2/home?region=ap-south-1#LaunchInstanceWizard:ami=ami-0e391bcb0a700351d) |
| Asia Pacific (Seoul)      | [ami-06f4395cf98852317](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-06f4395cf98852317) |
| Asia Pacific (Singapore)  | [ami-07837b8ff95b87d82](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#LaunchInstanceWizard:ami=ami-07837b8ff95b87d82) |
| Asia Pacific (Sydney)     | [ami-0314bab60b169e07d](https://console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#LaunchInstanceWizard:ami=ami-0314bab60b169e07d) |
| Asia Pacific (Tokyo)      | [ami-0628fa858b51ac27a](https://console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:ami=ami-0628fa858b51ac27a) |
| Canada (Central)          | [ami-04de82e3d3e07d2a8](https://console.aws.amazon.com/ec2/v2/home?region=ca-central-1#LaunchInstanceWizard:ami=ami-04de82e3d3e07d2a8) |
| Europe (Frankfurt)        | [ami-045097c2cec7b9e49](https://console.aws.amazon.com/ec2/v2/home?region=eu-central-1#LaunchInstanceWizard:ami=ami-045097c2cec7b9e49) |
| Europe (Ireland)          | [ami-04c08ddd7a6941d4e](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-1#LaunchInstanceWizard:ami=ami-04c08ddd7a6941d4e) |
| Europe (London)           | [ami-0fa385070ea8e31e1](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-2#LaunchInstanceWizard:ami=ami-0fa385070ea8e31e1) |
| Europe (Milan)            | [ami-00dbbaf155c5478c4](https://console.aws.amazon.com/ec2/v2/home?region=eu-south-1#LaunchInstanceWizard:ami=ami-00dbbaf155c5478c4) |
| Europe (Paris)            | [ami-0b8ba851661e47296](https://console.aws.amazon.com/ec2/v2/home?region=eu-west-3#LaunchInstanceWizard:ami=ami-0b8ba851661e47296) |
| Europe (Stockholm)        | [ami-045c7f75eb5c9ff2f](https://console.aws.amazon.com/ec2/v2/home?region=eu-north-1#LaunchInstanceWizard:ami=ami-045c7f75eb5c9ff2f) |
| Middle East (Bahrain)     | [ami-0933cd18b826f79fb](https://console.aws.amazon.com/ec2/v2/home?region=me-south-1#LaunchInstanceWizard:ami=ami-0933cd18b826f79fb) |
| South America (Sáo Paulo) | [ami-074810b7681755763](https://console.aws.amazon.com/ec2/v2/home?region=sa-east-1#LaunchInstanceWizard:ami=ami-074810b7681755763) |

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