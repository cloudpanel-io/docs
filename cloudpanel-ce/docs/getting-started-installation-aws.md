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

2) Click on the **AMI ID** to launch your CloudPanel in your desired AWS Region.

| Name | Region | AMI ID |
| :---         | :---      | :--- |
| US East (N.Virginia)       | us-east-1      | [ami-0ddf302af2476aada](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#LaunchInstanceWizard:ami=ami-0ddf302af2476aada) |
| US East (Ohio)             | us-east-2      | [ami-88888888](https://console.aws.amazon.com/ec2/v2/home?region=us-east-2#LaunchInstanceWizard:ami=ami-88888888) |
| US West (N. California)    | us-west-1      | [ami-88888888](https://console.aws.amazon.com/ec2/v2/home?region=us-west-1#LaunchInstanceWizard:ami=ami-88888888) |
| US West (Oregon)           | us-west-2      | ami-88888888 |
| Asia Pacific (Hong Kong)   | ap-east-1      | ami-88888888 |
| Asia Pacific (Mumbai)      | ap-south-1     | ami-88888888 |
| Asia Pacific (Seoul)       | ap-northeast-2 | ami-88888888 |
| Asia Pacific (Singapore)   | ap-southeast-1 | ami-88888888 |
| Asia Pacific (Sydney)      | ap-southeast-2 | ami-88888888 |
| Asia Pacific (Tokyo)       | ap-northeast-1 | ami-88888888 |
| Canada (Central)           | ca-central-1   | ami-88888888 |
| Europe (Frankfurt)         | eu-central-1   | ami-88888888 |
| Europe (Ireland)           | eu-central-1   | ami-88888888 |
| Europe (London)            | eu-west-3      | ami-88888888 |
| Europe (Stockholm)         | eu-north-1     | ami-88888888 |
| Middle East (Bahrain)      | me-south-1     | ami-88888888 |
| South America (Sáo Paulo)  | me-south-1     | ami-88888888 |

### Choose Instance Type

Choose your instance type and click on the button **Next: Configure Instance Details** 

### Configure Instance 

Select your Network (VPC) and Subnet in which you want you to launch the instance and click on the button <br />

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

## Allocate Elastic IP Address

adsffsdf