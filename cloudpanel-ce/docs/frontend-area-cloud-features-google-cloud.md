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

In this **Firewall Rules** area, you see all assigned **Firewall Rules** of your **Instance**.

### Adding a Rule

To **Add a Rule** click on the **Firewall Rules** and then on the button **Add Rule** top right.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/firewall_rules.png')} /> <br /><br />

Select a **Rule Type** from a list and select the **Source**, which should have access to the service.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/add_firewall_rule.png')} />

### Deleting a Rule

On the **Firewall Rules** overview site you can delete a rule by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/firewall_rules.png')} />

## DNS

[Google Cloud DNS](https://cloud.google.com/dns) is a scalable, reliable, and managed authoritative 
**Domain Name System (DNS)** service running on the same infrastructure as **Google**. 
It has **low latency**, **high availability** and is a **cost-effective** way to make your applications and services available to your users.

### New Zone

To add a new **DNS Zone**, click on the button top right on **New Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/new_dns_zone_1.png')} /> <br /> <br />

Enter the **Domain Name** and click on **Add DNS Zone** to create a new **DNS Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/new_dns_zone_2.png')} />

## Snapshots