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
Experienced **AWS** users can create **AWS Access Keys** with more fine granulated permissions.
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

In the frontend area on the **Instance** overview, you find information about your **Instance** like **Instance Name**, **Instance ID**,
**Instance Type**, **Region** and **IPv4 Public IP**. 

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/instance.png')} />

## Security Groups

## Route53

