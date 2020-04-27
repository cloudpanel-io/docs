---
id: cloud-features-aws
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## AWS Access Keys

### Create Access Keys

To enable all **cloud functionalities**, we need to enter **AWS Access Keys** to communicate with the 
services from **Amazon Web Services**.

To create **AWS Access Keys** do the following steps:

1) Login into the [AWS Management Console](https://console.aws.amazon.com/ec2/) <br />

2) Click on **Services** and go to the service **IAM**.

3) In the left menu, click on **Users** and click on the button **Add user**.

Enter a **User name** and select **Programmatic access** as **Access type** and click on the button **Next: Permissions**

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_user_1.png')} /> <br /><br />

4) Click on the button **Attach existing policies directly** and select the **AdministratorAccess** policy and click
on the button **Next: Tags**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_user_2.png')} /> <br /><br />

:::caution Permissions
Experienced **AWS** users should create **AWS Access Keys** with more fine granulated permissions.
:::

5) Skip the **Add tags (optional)** step by clicking on the button **Next: Review**

6) Click on the button **Create user** to create the **AWS Access Keys**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_user_3.png')} /> <br /><br />

Copy the **Access key ID** and **Secret access key**

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_user_4.png')} />

### Enter Access Keys

To enter the **AWS Access Keys** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**

2) Click on the left menu on the **AWS** settings.

Enter the **AWS Access Key** and **AWS Secret Access Key** and click on the button **Save**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/enter_access_keys.png')} />

## Instance

In this **Instance** area, you find information about your **Instance** like **Instance Name**, **Instance ID**,
**Instance Type**, **Region** and, **IPv4 Public IP**. 

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/instance.png')} />

## Security Groups

In this **Security Groups** area, you see all assigned [Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html) of your **Instance**. <br />
With a click on a **Security Group** you can edit rules like adding IPs for SSH or other services.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/security_groups.png')} />

### Adding a Rule

To **Add a Rule** click on the **Security Group** and and then on the button **Add Rule** top right.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_securcan createity_group_rules.png')} /> <br /><br />

Select a **Rule Type** from a list and select the **Source**, which should have access to the service.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_security_group_rule.png')} />

### Deleting a Rule

On the **Security Group** overview site you can delete a rule by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_security_group_rules.png')} /> 

## Route 53

[Amazon Route 53](https://aws.amazon.com/route53/) is a highly available and scalable cloud Domain Name System (DNS) web service. 
It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications 
by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other.

In this **Route 53** area, you can import **Hosted Zones** from [Amazon Route 53](https://aws.amazon.com/route53/) or create new zones to manage.

