---
id: cloud-features-google-cloud
title: Google Cloud
sidebar_label: Google Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Service Account Keys

To enable all **cloud functionalities**, you need to enter [Service Keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys),
that **CloudPanel** can communicate with the **Google Cloud**.

### Create Service Keys

1) Login into the [Google Cloud Console](https://console.cloud.google.com/).

2) Click in the left navigation on **IAM & Admin** and click on **Service Accounts**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_1.png')} /> <br /><br />

3) On the **Service Accounts** overview go to **Actions** and click on **Create Key**.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_2.png')} /> <br /><br />

4) Select **JSON** as **Key type** and click on **Create** to download the **Service Keys** file.

<img class="border" src={useBaseUrl('img/v1/cloud-features/gce/create_service_keys_3.png')} /> <br /><br />

### Enter Service Keys