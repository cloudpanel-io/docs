---
id: digital-ocean
title: Digital Ocean
sidebar_label: Digital Ocean
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### Access Token

#### Create Access Token

To communicate with **Digital Ocean**, you need to enter an **Access Token**.

<img class="border" alt="Digital Ocean Settings" src={useBaseUrl('img/admin/cloud-features/digital_ocean/settings.png')} />

To create an **Access Token** do the following steps:

1. Login into your [Digital Ocean](https://cloud.digitalocean.com/login) account. 

2. Click in the left navigation on **API** and click on button **Generate New Token**.

<img class="border" alt="Generate Token" src={useBaseUrl('img/admin/cloud-features/digital_ocean/generate_token.png')} />

### Snapshot Settings

1. To enable **Automatic Snapshots**, click in the left menu on **Digital Ocean** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Snapshots" src={useBaseUrl('img/admin/cloud-features/digital_ocean/enable_automatic_snapshots.png')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

Four **Snapshots** will be created per day and deleted after seven days with the following configuration.

## Snapshots

[Snapshots](https://www.digitalocean.com/docs/images/snapshots/) are on-demand disk images of **DigitalOcean Droplets**
and volumes saved to your **Digital Ocean** account.

### Create Snapshot

1. To create a **Snapshot**, click in the left menu on **Digital Ocean** and then on the tab **Snapshots**.

2. Click on the button **Create Snapshot** top right.

<img class="border" alt="Create Snapshot" src={useBaseUrl('img/admin/cloud-features/digital_ocean/create_snapshot_1.png')} />

3. Enter the **Snapshot Name** and click on **Create**.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin/cloud-features/digital_ocean/create_snapshot_2.png')} />

4. The **Snapshot** is now being created by **Digital Ocean** and will appear when it's created, which can take several minutes.

<img class="border" alt="Snapshot Created" src={useBaseUrl('img/admin/cloud-features/digital_ocean/snapshot_created.png')} />