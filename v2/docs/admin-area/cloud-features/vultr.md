---
id: vultr
title: Vultr
sidebar_label: Vultr
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Settings

### API Key

#### Create API Key

To communicate with the **Vultr** interface, you need to enter an **API Key**.

<img class="border" alt="Vultr Settings" src={useBaseUrl('img/admin/cloud-features/vultr/settings.png')} />

To create an **API Key** do the following steps:

1. Login into your [VULTR](https://my.vultr.com/) account.

2. Go to [Settings](https://my.vultr.com/settings/#settingsapi) and click on the tab **API**. Copy and paste the **API Key**. 

<img class="border" alt="Copy API Key" src={useBaseUrl('img/admin/cloud-features/vultr/copy_api_key.png')} />

### Snapshot Settings

1. To enable **Automatic Snapshots**, click in the left menu on **Vultr** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Snapshots" src={useBaseUrl('img/admin/cloud-features/vultr/enable_automatic_snapshots.png')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

Four **Snapshots** will be created per day and deleted after seven days with the following configuration.

## Snapshots

[Snapshots](https://www.vultr.com/docs/vultr-vps-snapshots) are a point-in-time image of the entire instance SSD for data disaster recovery.
The **instance** will not be stopped when taking a snapshot; modern file systems and databases handle this scenario well.

### Create Snapshot

1. To create a **Snapshot**, click in the left menu on **Vultr** and then on the tab **Snapshots**.

2. Click on the button **Create Snapshot** top right.

<img class="border" alt="Create Snapshot" src={useBaseUrl('img/admin/cloud-features/vultr/create_snapshot_1.png')} />

3. Enter the **Snapshot Name** and click on **Create**.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin/cloud-features/vultr/create_snapshot_2.png')} />

4. The **Snapshot** is now being created by **Vultr**.

<img class="border" alt="Snapshot Created" src={useBaseUrl('img/admin/cloud-features/vultr/snapshot_created.png')} />
