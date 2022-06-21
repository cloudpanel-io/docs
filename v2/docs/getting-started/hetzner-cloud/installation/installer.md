---
id: installer
title: Hetzner Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [Hetzner Cloud](https://www.hetzner.com/cloud).

## Create a Server

1. Login to your [Hetzner Cloud Console](https://console.hetzner.cloud/) account. <br />

2. Go to a **project** and click on the button **ADD SERVER**.

<img class="border" alt="Add Server" src={useBaseUrl('img/getting-started/hetzner-cloud/add-server.png')} />

### Server Location

Choose the **Server Location** where you want to run your **Server**.

<img class="border" alt="Create s Server" src={useBaseUrl('img/getting-started/hetzner-cloud/select-location.png')} />

### OS Image

Select **Ubuntu 22.04** or **Debian 11** as **OS Image**.

<img class="border" alt="Select OS Image" src={useBaseUrl('img/getting-started/hetzner-cloud/os-image.png')} />

### Server Type

:::tip High Performance
In our benchmarks, the **CPX (AMD EPYC 2nd Gen processors)** servers were the fastest for **web applications**.
:::

Select the **Server Type** you want to deploy. We recommend at least **1 vCPU** with **2 GB of Memory**.

<img class="border" alt="Create s Server" src={useBaseUrl('img/getting-started/hetzner-cloud/server-type.png')} />

### Launch Server

1. Select an **SSH Key** or receive the **root password** via e-mail.

2. Enter the **Server Name** and click on the button **CREATE & BUY NOW** to launch the server.

<img class="border" alt="Launch Server" src={useBaseUrl('img/getting-started/hetzner-cloud/create-buy-now.png')} />

## Install CloudPanel

After launching the **Server**, log in with **SSH** and run the installer script.

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

1. Login via **SSH** to the **EC2 Instance**.

```bash
ssh -i path_to_your_private_key root@serverIpAddress
```

2. Update the system and install the required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

3. Run the installer with your preferred **Database Engine**.

<Tabs
defaultValue="ubuntu-mysql-8.0"
values={[
{ label: 'MySQL 8.0', value: 'ubuntu-mysql-8.0', },
{ label: 'MariaDB 10.6', value: 'ubuntu-mariadb-10.6', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner bash
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner DB_ENGINE=MARIADB_10.6 bash
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="debian-11">

1. Login via **SSH** to the **Server**.

```bash
ssh -i path_to_your_private_key root@serverIpAddress
```

2. Update the system and install the required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

3. Run the installer with your preferred **Database Engine**.

<Tabs
defaultValue="debian-mysql-8.0"
values={[
{ label: 'MySQL 8.0', value: 'debian-mysql-8.0', },
{ label: 'MySQL 5.7', value: 'debian-mysql-5.7', },
{ label: 'MariaDB 10.7', value: 'debian-mariadb-10.7', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner bash
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner DB_ENGINE=MYSQL_5.7 bash
```

</TabItem>
<TabItem value="debian-mariadb-10.7">

```bash
curl -sSL https://installer.cloudpanel.io/ce/v2/install.sh | sudo CLOUD=hetzner DB_ENGINE=MARIADB_10.7 bash
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Access CloudPanel

You can now access **CloudPanel** via Browser: **https://serverIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />