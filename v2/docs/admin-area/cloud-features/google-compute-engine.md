---
id: google-compute-engine
title: Google Compute Engine
sidebar_label: Google Compute Engine
---

import useBaseUrl from '@docusaurus/useBaseUrl';


## Settings

### Service Account Keys

#### Create Service Account Keys

To communicate with the **Google Compute Engine** interface, you need to enter **Service Account Keys**.

<img class="border" alt="Google Compute Engine Settings" src={useBaseUrl('img/admin/cloud-features/google/settings.png')} />

To create the **Service Account Keys** do the following steps:

1. Login into the [Google Cloud Console](https://console.cloud.google.com/).

2. Click in the left navigation on **IAM & Admin** and click on **Service Accounts**.

3. On the **Service Accounts** overview, go to **Actions** and click on **Manage Keys**.

<img class="border" alt="Manage Keys" src={useBaseUrl('img/admin/cloud-features/google/manage_keys.png')} />

4. Click on **Create new Key**.

<img class="border" alt="Create new Key" src={useBaseUrl('img/admin/cloud-features/google/create_new_key.png')} />

5. Select Key type **JSON** and click on **Create** to download the **Service Account Keys** file.

<img class="border" alt="Key Type JSON" src={useBaseUrl('img/admin/cloud-features/google/key_type_json.png')} />

6. Open the downloaded file and paste the content into the **Service Account Keys** field.

### Snapshot Settings

1. To enable **Automatic Snapshots**, click in the left menu on **Google Compute Engine** and then on the tab **Settings**.

<img class="border" alt="Enable Automatic Snapshots" src={useBaseUrl('img/admin/cloud-features/google/enable_automatic_snapshots.png')} />

2. Select the **Frequency** and **Retention Period** and click on the button **Save**.

Four **Snapshots** will be created per day and deleted after seven days with the following configuration.

## Snapshots

[Snapshots](https://cloud.google.com/compute/docs/disks/create-snapshots) are a central part of the Google Cloud Backup architecture—they allow you to create a point-in-time backup 
of a persistent disk attached to a virtual machine instance and save it to Google Cloud Storage. 
You can also rapidly restore a snapshot to a persistent disk.

### Create Snapshot

1. To create a **Snapshot**, click in the left menu on **Google Compute Engine** and then on the tab **Snapshots**.

2. Click on the button **Create Snapshot** top right.

<img class="border" alt="Create Snapshot" src={useBaseUrl('img/admin/cloud-features/google/create_snapshot_1.png')} />

3. Enter the **Snapshot Name** and click on **Create**.

<img class="border" alt="Create Image" src={useBaseUrl('img/admin/cloud-features/google/create_snapshot_2.png')} />

4. The **Snapshot** is now being created by the **Google Compute Engine**.

<img class="border" alt="Snapshot Created" src={useBaseUrl('img/admin/cloud-features/google/snapshot_created.png')} />