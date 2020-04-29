---
id: cloud-features-aws
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## AWS Access Keys

### Create Access Keys

To enable all **cloud functionalities**, your need to enter **AWS Access Keys** that **CloudPanel** can communicate with **Amazon Web Services**.

To create **AWS Access Keys** do the following steps:

1) Login into the [AWS Management Console](https://console.aws.amazon.com/ec2/). <br />

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

Copy the **Access key ID** and **Secret access key**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_user_4.png')} />

### Enter Access Keys

To enter the **AWS Access Keys** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**.

2) Click on the left menu on the **AWS** settings.

Enter the **AWS Access Key** and **AWS Secret Access Key** and click on the button **Save**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/enter_access_keys.png')} />

## Instance

In this **Instance** area, you find information about your **Instance** like **Instance Name**, **Instance ID**,
**Instance Type**, **Region** and, **IPv4 Public IP**. 

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/instance.png')} />

## Security Groups

In this **Security Groups** area, you see all assigned [Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html) of your **Instance**.<br />
With a click on a **Security Group**, you can edit rules like adding IPs for SSH or other services.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/security_groups.png')} />

### Adding a Rule

To **Add a Rule** click on the **Security Group** and then on the button **Add Rule** top right.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_security_group_rules.png')} /> <br /><br />

Select a **Rule Type** from a list and select the **Source**, which should have access to the service.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_security_group_rule.png')} />

### Deleting a Rule

On the **Security Group** overview site you can delete a rule by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_security_group_rules.png')} /> 

## Route 53

[Amazon Route 53](https://aws.amazon.com/route53/) is a highly available and scalable cloud Domain Name System (DNS) web service. <br />
It is designed to give developers and businesses a reliable and cost-effective way to route end users to Internet applications 
by translating names like www.example.com into the numeric IP addresses like 8.8.8.8 that computers use to connect to each other.

In this **Route 53** area, you can import **Hosted Zones** from [Amazon Route 53](https://aws.amazon.com/route53/) or create new zones to manage.

### New Hosted Zone

To create a **New Hosted Zone**, click on the button top right on **New Hosted Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/new_route53_hosted_zone.png')} /> <br /> <br />

Enter the **Domain Name** and click on **Add Hosted Zone** to create a new **Hosted Zone** in [Amazon Route 53](https://aws.amazon.com/route53/).

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/new_route53_hosted_zone_domain.png')} />

### Import Hosted Zone

If you already have an existing **Hosted Zone** in your [Amazon Route 53](https://aws.amazon.com/route53/), and if you want to manage the DNS records via
**CloudPanel**, you can import the **Hosted Zone**.

To import an existing **Hosted Zone**, click on the button top right on **Import Hosted Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/import_hosted_zone.png')} /> <br /> <br />

The **Hosted Zone ID** of a **Domain Name** can be found in the **AWS Management Console** -> **Services** -> **Route 53**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/aws_route53_hosted_zone_id.png')} />

### Adding a DNS Record

To add a [DNS Record](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html), click on your **Hosted Zone** and click on the button **Add Record** top right.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_dns_record_hosted_zone.png')} /> <br /> <br />

Select the [Type](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html), enter the **Name**, **Value**,
and select the **TTL** before clicking on the button **Add Record**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/add_dns_record.png')} />

### Deleting a DNS Record

To delete a **DNS Record**, click on your **Hosted Zone** and click on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/delete_dns_record.png')} />

## Amazon Machine Images (AMI)

An [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) is a special type of virtual appliance that is 
used to create a virtual machine within the [Amazon Elastic Compute Cloud (EC2)](https://aws.amazon.com/ec2/).

### Automatic Backups

We use **AMIs** to backup the entire **Instance**, including all disks. All **AMIs** are done incrementally, which means the first image
is a full backup, and all further **AMIs** contain the data differences.

To enable **Automatic Backups** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**

2) Click on the left menu on the **AWS** settings.

Set **Automatic Backups** to **Yes** and select the **Backup Frequency** and **Backup Retention Period**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/enable_automatic_backups.png')} /> <br /><br />

With the following configuration, two **Backups (AMIs)** will be created per day and held for seven days, 14 **AMIs** in total.

### Manual Backups

Often you want to do a backup before releasing a new version of your application, and you want to retain the manually created backup
for some time.

To create a **Backup**, click on the tab **Backup (AMIs)** and then on the button **Create Backup** top right.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/create_manual_backup_1.png')} /> <br /><br />

Enter the **Name** of your **Backup (AMI)** and click on the button **Create Backup**.  <br />
AWS will immediately start creating an **AMI** of your **Instance**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/aws/create_manual_backup_2.png')} /> <br /><br />

:::important AMI Retention
Manually created **AMIs** will not be deleted automatically; they need to be **deleted** manually as well.
:::
