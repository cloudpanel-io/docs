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

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/create_service_keys_1.png')} /> <br /><br />

3) On the **Service Accounts** overview, go to **Actions** and click on **Create Key**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/create_service_keys_2.png')} /> <br /><br />

4) Select **JSON** as **Key type** and click on **Create** to download the **Service Keys** file.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/create_service_keys_3.png')} />

### Enter Service Keys

To enter the **Security Account Keys** in **CloudPanel** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**.

2) Click on the left menu on the **Google Cloud** settings.

Open the **Service Account Keys File** and paste the content into the **Service Account Keys** field and click on the button **Save**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/enter_service_account_keys.png')} />

## Instance

In the **Instance** area, you find information about your **Instance** like **Instance Name**, **Instance ID**,
**Machine Type**, **Zone** and, **IPv4 Public IP**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/instance.png')} />

## Firewall Rules

In this **Firewall Rules** area, you see all assigned **Firewall Rules** of your **Instance**.

### Adding a Rule

To **Add a Rule** click on the **Firewall Rules** and then on the button **Add Rule** top right.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/firewall_rules.png')} /> <br /><br />

Select a **Rule Type** from a list and select the **Source**, which should have access to the service.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/add_firewall_rule.png')} />

### Deleting a Rule

On the **Firewall Rules** overview site you can delete a rule by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/firewall_rules.png')} />

## DNS

[Google Cloud DNS](https://cloud.google.com/dns) is a scalable, reliable, and managed authoritative 
**Domain Name System (DNS)** service running on the same infrastructure as **Google**. 
It has **low latency**, **high availability** and is a **cost-effective** way to make your applications and services available to your users.

### New DNS Zone

To add a new **DNS Zone**, click on the button top right on **New Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/new_dns_zone_1.png')} /> <br /> <br />

Enter the **Domain Name** and click on **Add DNS Zone** to create a new **DNS Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/new_dns_zone_2.png')} />

### Import DNS Zone

If you already have an existing **DNS Zone** in your **Google Cloud Account**, and if you want to manage the DNS records via
**CloudPanel**, you can import the **DNS Zone**.

To import an existing **DNS Zone**, click on the button top right on **Import Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/import_dns_zone_1.png')} /> <br /> <br />

Enter the **Domain Name** and click on **Import DNS Zone** to import the **DNS Zone**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/import_dns_zone_2.png')} />

### Adding a DNS Record

To add a [DNS Record](https://cloud.google.com/dns/records), click on your **DNS Zone** and click on the button **Add Record** top right.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/dns_records.png')} /> <br /><br />

Select the **Type**, enter the **Name**, **Value**, and select the **TTL** before clicking on the button **Add Record**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/add_dns_record.png')} />

### Deleting a DNS Record

To delete a **DNS Record**, click on your **DNS Zone** and click on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/delete_dns_record.png')} />

## Snapshots

A **Snapshot** is the state of a system at a particular point in time. 
We use **Snapshots** to periodically back up data of your **Instance** on a regular interval.
**Google** takes and stores the **Snapshots**; **CloudPanel** triggers them on a scheduled interval.

### Automatic Backups

To enable **Automatic Backups** do the following:

1) Login into your **CloudPanel** as **Admin** and go to the **Admin Adrea**.

2) Click on the left menu on the **Google Cloud** settings.

Set **Automatic Backups** to **Yes** and select the **Backup Frequency** and **Backup Retention Period**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/enable_automatic_backups.png')} /> <br /><br />

With the following configuration, two **Snapshots** will be created per day and held for seven days, 14 **Snapshots** in total.

### Manual Backups

Often you want to do a **Backup** before releasing a new version or feature of your application.

To create a **Backup**, click on the tab **Snapshots** and then on the button **Create Snapshot** top right.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/snapshots.png')} /> <br /><br />

Enter the **Name** of your **Snapshot** and click on the button **Create Snapshot**.  <br />
The **Google Cloud** will immediately start creating a **Snapshot** of your **Instance**.

<img class="border" src={useBaseUrl('img/v1/cloud_features/gce/create_manual_snapshot.png')} />