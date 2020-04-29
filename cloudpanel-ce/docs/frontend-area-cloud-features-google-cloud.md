---
id: cloud-features-google-cloud
title: Google Cloud
sidebar_label: Google Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Service Account Keys

To enable all **cloud functionalities**, you need to enter [Service Account Keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys),
that **CloudPanel** can communicate with the **Google Cloud**.

### Create Service Keys

1) Login into the [Google Cloud Console](https://console.cloud.google.com/).

2) Click in the left navigation on **IAM & Admin** and click on **Service Accounts**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_1.png')} /> <br /><br />

3) On the **Service Accounts** overview, go to **Actions** and click on **Create Key**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_2.png')} /> <br /><br />

4) Select **JSON** as **Key type** and click on **Create** to download the **Service Keys** file.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_3.png')} />

### Enter Service Keys

To enter the **Security Account Keys** in **CloudPanel** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**.

2) Click on the left menu on the **Google Cloud** settings.

Open the **Service Account Keys File** and paste the content into the **Service Account Keys** field and click on the button **Save**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/enter_service_account_keys.png')} />

## Instance

In the **Instance** area, you find information about your **Instance** like **Instance Name**, **Instance ID**,
**Machine Type**, **Zone** and, **IPv4 Public IP**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/instance.png')} />

## Firewall Rules

## DNS

## Snapshots