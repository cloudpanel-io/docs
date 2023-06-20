---
id: installer
title: Google Compute Engine Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [Google Compute Engine](https://cloud.google.com/).

## Launching an Instance

1. Log in to the [Google Cloud Console](https://console.cloud.google.com/).

2. In the left navigation, click on **Compute Engine** --> **VM instances** and click on the button **Create Instance**.

<img class="border" alt="Create Instance" src={useBaseUrl('img/getting-started/google-compute-engine/create-instance.png')} />

### Name and Region

Enter the **Name** of the instance and select a **Region** to deploy.

<img class="border" alt="Name and Region" src={useBaseUrl('img/getting-started/google-compute-engine/name-and-region.png')} />

### Machine Configuration

Select the **Machine Family**, **Series** and **Machine Type**.

<img class="border" alt="Machine Type" src={useBaseUrl('img/getting-started/google-compute-engine/machine-type.png')} />

### Boot Disk

Select **Ubuntu 22.04** or **Debian 11** as **Boot Disk Image**.

:::warning Minimum Size
Configure as minimum **10 GB Boot Disk Image** and select **SSD persistent disk** as **Boot Disk Type**.
:::

<img class="border" alt="Boot Disk" src={useBaseUrl('img/getting-started/google-compute-engine/boot-disk.png')} />

### Firewall

Allow **HTTP** and **HTTPS** Traffic.

<img class="border" alt="Firewall" src={useBaseUrl('img/getting-started/google-compute-engine/firewall.png')} />

### Networking

1. Add **cloudpanel** in **Network tags**.

<img class="border" alt="Network Tags" src={useBaseUrl('img/getting-started/google-compute-engine/network-tags.png')} />

2. Click on **External IPv4 address** and then on **CREATE IP ADDRESS**.

<img class="border" alt="Create IP Address" src={useBaseUrl('img/getting-started/google-compute-engine/create-ip-address.png')} />

Enter a **Name** for the **Static IP Address** and click on **Reserve**.

### Security

Click on the button **Add Item** and enter your [Public SSH Key](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys).

<img class="border" alt="Add SSH Key" src={useBaseUrl('img/getting-started/google-compute-engine/add-ssh-key.png')} />

### Create

Click on the button **Create** to launch the **VM Instance**.

## Firewall Rules

1. To access **CloudPanel** later, we need to create a **Firewall Rule**.

2. Click on **CREATE FIREWALL RULE** and create the following rule:

**Name:** allow-cloudpanel-all <br />
**Targets:** Specified target tags <br />
**Target tags:** cloudpanel <br />
**Source filter:** IP ranges <br />
**Source IP ranges:** 0.0.0.0/0 <br />
**Protocols and ports:** Allow all <br />

:::warning Security
This firewall rule opens **ALL** ports.
**CloudPanel** has an integrated [Firewall](../../../../admin-area/security/#firewall) which takes care of the **ports**.

If you want to use the **Firewall Rules** from **Google**, you need to open the ports: **22**, **80**, **443**, and **8443 (CloudPanel)**.
Don't forget to remove all **rules** in the admin area of **CloudPanel** to disable the **UFW Firewall**.
:::

<img class="border" alt="Firewall Rule" src={useBaseUrl('img/getting-started/google-compute-engine/firewall-rule.png')} />

## Install CloudPanel

After launching the **Instance**, log in with **SSH** and run the installer script.

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

1. Login via **SSH** to the **Instance**. <br />

The **UserName** is either the **UserName** you specified when you [created the SSH key](https://cloud.google.com/compute/docs/connect/create-ssh-keys)
or the one defined in your [Google Profile](https://cloud.google.com/compute/docs/connect/add-ssh-keys#os-login).

Check the following site [https://cloud.google.com/compute/docs/connect/ssh-using-third-party-tools](https://cloud.google.com/compute/docs/connect/ssh-using-third-party-tools) for a step-by-step guide.

```bash
ssh -i path_to_your_private_key username@yourIpAddress
```

2. Switch to the **root** user:

```bash
sudo su root
```

3. Update the system and install the required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

4. Run the installer with your preferred **Database Engine**.

<Tabs
defaultValue="ubuntu-mysql-8.0"
values={[
{ label: 'MySQL 8.0', value: 'ubuntu-mysql-8.0', },
{ label: 'MariaDB 10.11', value: 'ubuntu-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'ubuntu-mariadb-10.6', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="debian-11">

1. Login via **SSH** to the **Instance**. <br />

The **UserName** is either the **UserName** you specified when you [created the SSH key](https://cloud.google.com/compute/docs/connect/create-ssh-keys)
or the one defined in your [Google Profile](https://cloud.google.com/compute/docs/connect/add-ssh-keys#os-login).

Check the following site [https://cloud.google.com/compute/docs/connect/ssh-using-third-party-tools](https://cloud.google.com/compute/docs/connect/ssh-using-third-party-tools) for a step-by-step guide.

```bash
ssh -i path_to_your_private_key username@yourIpAddress
```

2. Switch to the **root** user:

```bash
sudo su root
```

3. Update the system and install the required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

4. Run the installer with your preferred **Database Engine**.

<Tabs
defaultValue="debian-mysql-8.0"
values={[
{ label: 'MySQL 8.0', value: 'debian-mysql-8.0', },
{ label: 'MySQL 5.7', value: 'debian-mysql-5.7', },
{ label: 'MariaDB 10.11', value: 'debian-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'debian-mariadb-10.6', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce bash install.sh
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce DB_ENGINE=MYSQL_5.7 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "3c30168958264ced81ca9b58dbc55b4d28585d9066b9da085f2b130ae91c50f6 install.sh" | \
sha256sum -c && sudo CLOUD=gce DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
If possible, open port **8443** only for your IP via **firewall**.
:::

You can now access **CloudPanel** via Browser: **https://yourIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />