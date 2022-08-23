---
id: backups
title: Remote Backups
sidebar_label: Backups
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With **Remote Backups**, also known as **off-site backup**, you can store copies of your sites to services like **Amazon S3**, **Wasabi**, **Digital Ocean Spaces**, **Dropbox**,
**Google Drive**, **SFTP**, or any other storage provider supported by [Rclone](https://rclone.org/).

:::warning Instance Timezone
Ensure that the [Timezone](../instance/#instance-settings) of your instance is correct to execute the backup job at the right time.
:::

## Setup

### Storage Provider

Select the **Storage Provider** of your choice and click on **Continue**.

<img class="border" alt="Select Storage Provider" src={useBaseUrl('img/admin-area/backups/select-storage-provider.png')} />

### Configuration

<Tabs
defaultValue="custom-rclone-config" values={[
  { label: 'Amazon S3', value: 'amazon-s3', }, 
  { label: 'Wasabi', value: 'wasabi', },
  { label: 'Digital Ocean Spaces', value: 'digital-ocean-spaces', },
  { label: 'Dropbox', value: 'dropbox', },
  { label: 'Google Drive', value: 'google-drive', },
  { label: 'SFTP', value: 'sftp', },
  { label: 'Custom Rclone Config', value: 'custom-rclone-config', },
]}>
<TabItem value="amazon-s3">

1. Log in to the [AWS Management Console](https://console.aws.amazon.com/ec2/).

2. Create an [S3 Bucket](https://aws.amazon.com/aws/s3) and create an [AWS Access Key and Secret Access Key](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html) 
with restricted permissions to **S3**.

3. Fill out the form and click on the button **Save**.

<img class="border" alt="Amazon S3" src={useBaseUrl('img/admin-area/backups/amazon-s3.png')} />

4. Click on the button **Create Button** top right to create the first backup, and go to **S3** to check if it's working as expected.

<img class="border" alt="Amazon S3 - Create Backup" src={useBaseUrl('img/admin-area/backups/amazon-s3-create-backup.png')} />

</TabItem>
<TabItem value="wasabi">

1. Log in to the [Wasabi Console](https://console.wasabisys.com/).

2. Create a **Bucket** and generate [Access Keys](https://console.wasabisys.com/#/access_keys).

3. Fill out the form and click on the button **Save**.

<img class="border" alt="Wasabi" src={useBaseUrl('img/admin-area/backups/wasabi.png')} />

4. Click on the button **Create Button** top right to create the first backup, and go to **Wasabi** to check if it's working as expected.

<img class="border" alt="Wasabi - Create Backup" src={useBaseUrl('img/admin-area/backups/wasabi-create-backup.png')} />

</TabItem>
<TabItem value="digital-ocean-spaces">

1. Login to your [Digital Ocean](https://cloud.digitalocean.com/login) account and go to [Spaces](https://cloud.digitalocean.com/spaces).

2. Go to [API](https://cloud.digitalocean.com/account/api/tokens), scroll down to **Spaces access keys**, and generate **Access Keys**

3. Fill out the form and click on the button **Save**.

The **Space Endpoint** can be found in your **Space Settings** in your **Digital Ocean Account**.

<img class="border" alt="Digital Ocean Spaces" src={useBaseUrl('img/admin-area/backups/digital-ocean-spaces.png')} />

4. Click on the button **Create Button** top right to create the first backup, and go to **Spaces** to check if it's working as expected.

<img class="border" alt="Digital Ocean Spaces - Create Backup" src={useBaseUrl('img/admin-area/backups/digital-ocean-spaces-create-backup.png')} />

</TabItem>
<TabItem value="dropbox">

:::tip Security
**CloudPanel** has no access to your **Dropbox Files** other than **Apps/CloudPanel/**.

All backups are stored in **Apps/CloudPanel/** in your **Dropbox**.
:::

1. Click on **Request Access Code** to authorize access to your **Dropbox**.

<img class="border" alt="Dropbox" src={useBaseUrl('img/admin-area/backups/dropbox.png')} />

2. Click on the button **Create Button** top right to create the first backup, and check your **Dropbox** to see if everything is working as expected.

<img class="border" alt="Dropbox - Create Backup" src={useBaseUrl('img/admin-area/backups/dropbox-create-backup.png')} />

</TabItem>
<TabItem value="google-drive">

:::warning Only for Google Workspace Users
**Google Drive** as storage provider can only be used if you use the paid **Google Workspace** service.
:::

1. To create an **Service Account**, follow the steps on the following site [https://rclone.org/drive/](https://rclone.org/drive/#use-case-google-apps-g-suite-account-and-individual-drive).

2. Fill out the form and click on the button **Save**.

<img class="border" alt="Google Drive" src={useBaseUrl('img/admin-area/backups/google-drive.png')} />

3. Click on the button **Create Button** top right to create the first backup, and check your **Google Drive** to see if everything is working as expected.

<img class="border" alt="Google Drive - Create Backup" src={useBaseUrl('img/admin-area/backups/google-drive-create-backup.png')} />

</TabItem>
<TabItem value="sftp">

:::warning Remote Server Connection Test
Test the connection to the remote server by login into the **CloudPanel** instance via SSH as root user and try to establish an **SSH/SFTP** connection.
:::

1. Test the connection to the remote server from the **CloudPanel Instance**.

2. Fill out the form and click on the button **Save**.

<img class="border" alt="SFTP" src={useBaseUrl('img/admin-area/backups/sftp.png')} />

3. Click on the button **Create Button** top right to create the first backup, and check your **SFTP Server** to see if everything is working as expected.

<img class="border" alt="SFTP - Create Backup" src={useBaseUrl('img/admin-area/backups/sftp-create-backup.png')} />

</TabItem>
<TabItem value="custom-rclone-config">

The **Remote Backup** uses [Rclone](https://rclone.org/), which supports over 40 cloud storage products. With the **Custom Rclone Config** you can configure **Rclone**
to use your preferred storage provider.

1. Login via **SSH** as **root** user.

2. Create a new **Rclone Config**:

```bash
rclone config
```

3. Create a new **Remote** with the name **remote**.

<img class="border" alt="Rclone - New Remote" src={useBaseUrl('img/admin-area/backups/rclone-new-remote.png')} />

4. Create your config by using the **Rclone Wizard**. The configuration is being stored at: **/root/.config/rclone/rclone.conf**

Our example **Backblaze** configuration looks like that:

```bash
[remote]
type = b2
account = 004b6959c792d2a0000000008
key = K004QyHV7vAe5UaRbaXsZKHxE9Se87
endpoint = 
```

5. Create a test file to check if the connection to the storage provider is working.

```bash
touch /tmp/test-file
```

6. Upload the **test file** via **rclone**.

For **S3 Compatible Endpoints** like **Backblaze** use the following command:

```bash
rclone copy /tmp/test-file remote:my-bucket-name/backups/
```

For other storage providers, use the following command as example:

```bash
rclone copy /tmp/test-file remote:backups/
```

7. Go to your storage provider and check if the test file upload was successful.

8. Fill out the form and click on the button **Save**.

<img class="border" alt="Custom Rclone Config" src={useBaseUrl('img/admin-area/backups/custom-rclone.png')} />

9. Click on the button **Create Button** top right to create the first backup, and go to your storage provider to see if everything is working as expected.

<img class="border" alt="Custom Rclone Config - Create Backup" src={useBaseUrl('img/admin-area/backups/custom-rclone-create-backup.png')} />

</TabItem>
</Tabs>

### Excludes

sdfsdfsdf

## Restoring Files

dfsfsdf