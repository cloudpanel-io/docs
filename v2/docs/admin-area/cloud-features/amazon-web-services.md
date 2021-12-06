---
id: amazon-web-services
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### AWS Credentials

#### Create AWS Credentials

To communicate with **Amazon Web Services**, you need to enter **AWS Credentials** like **AWS Access Key** and **AWS Secret Access Key**.

<img class="border" alt="Amazon Web Services Settings" src={useBaseUrl('img/admin/cloud-features/aws/settings.png')} />

To create **AWS Access Keys** do the following steps:

1. Login into the [AWS Management Console](https://console.aws.amazon.com/ec2/).

2. Go to the [IAM Service](https://console.aws.amazon.com/iamv2/home).

3. In the left menu, click on **Users** and click on the button **Add users** top right.

Enter a **User name** and select **Access key - Programmatic access** as credential type and click on the button **Next: Permissions**

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin/cloud-features/aws/create_access_keys_1.png')} />

4. Click on **Attach existing policies directly** and select the **AdministratorAccess** policy and click on the button **Next: Tags**

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin/cloud-features/aws/create_access_keys_2.png')} />

:::caution Permissions
Experienced **AWS** users should create **AWS Access Keys** with more fine granulated permissions.
:::

5. Skip the **Add tags (optional)** step by clicking on the button **Next: Review**

6. Click on the button **Create user** to create the **AWS Access Keys**.

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin/cloud-features/aws/create_access_keys_3.png')} />

Copy the **Access key ID** and **Secret access key**.

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin/cloud-features/aws/create_access_keys_4.png')} />

### Images Settings

## Images

