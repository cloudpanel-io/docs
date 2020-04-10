---
id: installation-aws
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to run CloudPanel on an EC2 instance on Amazon Web Services.

## Launching an EC2 Instance

### Choose AMI

1) Open the [AWS Management Console](https://console.aws.amazon.com/ec2/) <br />

2) Click on the **AMI ID** to launch CloudPanel in your desired AWS Region.

| AWS Region|  AMI ID |
| :---  | :--- |
| US East (N.Virginia)      | [ami-0ddf302af2476aada](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0ddf302af2476aada) |
| US East (Ohio)            | [ami-88888888](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-88888888) |
| US West (N. California)   | [ami-88888888](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-88888888) |
| US West (Oregon)          | ami-88888888 |
| Asia Pacific (Hong Kong)  | ami-88888888 |
| Asia Pacific (Mumbai)     | ami-88888888 |
| Asia Pacific (Seoul)      | ami-88888888 |
| Asia Pacific (Singapore)  | ami-88888888 |
| Asia Pacific (Sydney)     | ami-88888888 |
| Asia Pacific (Tokyo)      | ami-88888888 |
| Canada (Central)          | ami-88888888 |
| Europe (Frankfurt)        | ami-88888888 |
| Europe (Ireland)          | ami-88888888 |
| Europe (London)           | ami-88888888 |
| Europe (Stockholm)        | ami-88888888 |
| Middle East (Bahrain)     | ami-88888888 |
| South America (Sáo Paulo) | ami-88888888 |

### Choose Instance Type

Choose your instance type and click on the button **Next: Configure Instance Details** 

### Configure Instance 

Select your network (VPC) and subnet and click on the button **Next: Add Storage**

### Add Storage

Change the size of your EBS volume if needed. The default volume size of the home partition is **25 GB** and can be increased later at any time.

### Add Tags

Click on button **Add Tag** and enter **Name** as Key and in **Value** enter the name of your instance.

<img class="border" src={useBaseUrl('img/v1/getting_started/aws_installation/add_tags.png')} />

### Configure Security Group

1) Create a **security group** with the following ports:

| Type | Protocol | Port Range  | Source  | Comment         |
| :--- | :---     | :---        |  :---   | :---            |
| Custom TCP Rule | TCP | 8443 | Your IP | CloudPanel Port  |
| SSH             | TCP | 22   | Your IP |                  |
| HTTP            | TCP | 80   | Anywhere (0.0.0.0/0, ::/0) ||
| HTTPS           | TCP | 443  | Anywhere (0.0.0.0/0, ::/0) ||

### Review

Select an existing key pair or create a new key pair. <br />
When you select **Create a new key pair** enter a **key pair name** and **Download Key Pair**.

<img class="border" src={useBaseUrl('img/v1/getting_started/aws_installation/create_key_pair.png')} />

Click on the button **Launch Instance** to get your instance up and running.

## Create Elastic IP Address

Having a static IP (Elastic IP Address) is needed for running web applications. <br />

1) To create an **Elastic IP Address** click in the left navigation on **Network & Security** --> **Elastic IPs**

2) Click on button **Allocate Elastic IP address** to create an **Elastic IP Address**

3) Select the allocated IP address and associate it to your launched instance

## Access CloudPanel

You can now access the CloudPanel: **https://yourElasticIpAddress:8443**

### SSH Access

With your previously created private key you can connect to the instance via SSH.

```
ssh -i /path_to_your_private_key.pem admin@elasticIpAddress
```

