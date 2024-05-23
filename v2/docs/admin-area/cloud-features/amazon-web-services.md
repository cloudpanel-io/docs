---
id: amazon-web-services
title: Amazon Web Services
sidebar_label: Amazon Web Services
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### AWS Credentials

#### Create AWS Credentials

For the communication with **Amazon Web Services**, you need to enter **AWS Credentials** like **AWS Access Key** and **AWS Secret Access Key**.

<img class="border" alt="Amazon Web Services Settings" src={useBaseUrl('img/admin-area/cloud-features/aws/settings.png?v=0.0.1')} />

To create **AWS Access Keys** do the following steps:

1. Login into the [AWS Management Console](https://console.aws.amazon.com/ec2/).

2. Go to the [IAM Service](https://console.aws.amazon.com/iamv2/home).

3. In the left menu, click on **Users** and click on the button **Add users** top right.

Enter a **User name** and click on the button **Next**.

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-1.png?v=0.0.1')} />

4. Click on **Attach policies directly** and select the **AdministratorAccess** policy and click on the button **Next**.

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-2.png?v=0.0.1')} />

:::caution Permissions
Experienced **AWS** users should create **AWS Access Keys** with more fine granulated permissions.
:::

5. Click on the button **Create user** to create the **AWS Access Keys**.

<img class="border" alt="Create Access Keys" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-3.png?v=0.0.1')} />

6. Go to the user details page and click on the tab **Security credentials** and then on the button **Create access key**.

<img class="border" alt="Security credentials - Create Access Keys" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-4.png?v=0.0.1')} />

7. As Use Case, select **Command Line Interface (CLI)** and click on **Next**.

<img class="border" alt="Command Line Interface (CLI)" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-5.png?v=0.0.1')} />

8. Enter a **Description tag value (optional)** and click on **Create access key**.

<img class="border" alt="Create access key" src={useBaseUrl('img/admin-area/cloud-features/aws/create-access-keys-6.png?v=0.0.1')} />

### Images Settings

1. To enable **Automatic Images**, click in the left menu on **Amazon Web Services** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Images" src={useBaseUrl('img/admin-area/cloud-features/aws/enable-automatic-images.png?v=0.0.1')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

With the following configuration, two **Images** will be created per day and held for **14 AMIs** for seven days.

## Images

An [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) is a special type of virtual appliance
used to create a virtual machine within the [Amazon Elastic Compute Cloud (EC2)](https://aws.amazon.com/ec2/).

**CloudPanel** can create an **Image** of your instance on a defined frequency, e.g.,
**Hourly**, **Every Three Hours**, **Every Six Hours**, **Every Twelve Hours**, or **Once per Day**.

### Create Image

1. To create an **Image**, click in the left menu on **Amazon Web Services** and then on the tab **Images**.

2. Click on the button **Create Image** top right.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin-area/cloud-features/aws/create-image-1.png?v=0.0.1')} />

3. Enter an **Image Name** and click on **Create**. 

<img class="border" alt="Create Image" src={useBaseUrl('img/admin-area/cloud-features/aws/create-image-2.png?v=0.0.1')} />

4. The **Image** is now being created by **Amazon Web Services**.
The **Image** status changes from **Pending** to **Available** when it's done.

<img class="border" alt="Image Created" src={useBaseUrl('img/admin-area/cloud-features/aws/image-created.png?v=0.0.1')} />