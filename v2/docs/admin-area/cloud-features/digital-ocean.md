---
id: digital-ocean
title: Digital Ocean
sidebar_label: Digital Ocean
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### Access Token

#### Create Access Token

For the communication with **Digital Ocean**, you need to enter an **Access Token**.

<img class="border" alt="Digital Ocean Settings" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/settings.png?v=0.0.2')} />

To create an **Access Token**, do the following steps:

1. Login into your [Digital Ocean](https://cloud.digitalocean.com/login) account. 

2. Click in the left navigation on **API** and click on button **Generate New Token**.

<img class="border" alt="Generate Token" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/generate-token.png?v=0.0.2')} />

### Snapshot Settings

1. To enable **Automatic Snapshots**, click in the left menu on **Digital Ocean** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Snapshots" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/enable-automatic-snapshots.png?v=0.0.2')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

Four **Snapshots** will be created per day and deleted after seven days with the following configuration.

## Snapshots

[Snapshots](https://www.digitalocean.com/docs/images/snapshots/) are on-demand disk images of **DigitalOcean Droplets**
and volumes saved to your **Digital Ocean** account.

### Create Snapshot

1. To create a **Snapshot**, click in the left menu on **Digital Ocean** and then on the tab **Snapshots**.

2. Click on the button **Create Snapshot** top right.

<img class="border" alt="Create Snapshot" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/create-snapshot-1.png?v=0.0.2')} />

3. Enter the **Snapshot Name** and click on **Create**.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/create-snapshot-2.png?v=0.0.2')} />

4. The **Snapshot** is now being created by **Digital Ocean** and will appear when it's created, taking several minutes.

<img class="border" alt="Snapshot Created" src={useBaseUrl('img/admin-area/cloud-features/digital-ocean/snapshot-created.png?v=0.0.2')} />