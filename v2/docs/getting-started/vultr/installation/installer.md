---
id: installer
title: Vultr Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [VULTR](https://www.vultr.com/).

## Launch an Instance

1. Login nto your [VULTR](https://my.vultr.com/) account. 

2. In the left navigation, click on **Products** and then on **Deploy Server**.

### Choose Type

Choose the **Type** like **Optimized Cloud Compute - Dedicated CPU** or **Cloud Compute - Shared CPU**.

<img class="border" alt="Server Type" src={useBaseUrl('img/getting-started/vultr/choose-type.png?v=0.0.1')} />

### Choose Location

Choose the **Instance Location** closest to your visitors.

<img class="border" alt="Server Location" src={useBaseUrl('img/getting-started/vultr/choose-location.png?v=0.0.1')} />

### Choose Image

Select **Ubuntu 24.04 or 22.04** or **Debian 12 or 11** as **OS Image**.

<img class="border" alt="Choose Image" src={useBaseUrl('img/getting-started/vultr/choose-image.png?v=0.0.1')} />

### Choose Plan

Select the **Instance Size** you want to deploy. We recommend the **AMD High Performance** with at least **1 vCPU** with **2 GB of Memory**.

<img class="border" alt="Choose Plan" src={useBaseUrl('img/getting-started/vultr/choose-plan.png?v=0.0.1')} />

### Server Settings

Choose an **SSH Key** to connect via **SSH** after deploying the instance.

<img class="border" alt="Server Settings" src={useBaseUrl('img/getting-started/vultr/server-settings.png?v=0.0.1')} />

### Server Hostname & Deploy Now

Enter a **server hostname** and click on the button **Deploy Now**.

<img class="border" alt="Server Settings" src={useBaseUrl('img/getting-started/vultr/server-hostname.png?v=0.0.1')} />

## Install CloudPanel

After launching the **Instance**, log in with **SSH** and run the installer script.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-24.04">

1. Login via **SSH** to the **Instance**.

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
{ label: 'MariaDB 10.11', value: 'ubuntu-mariadb-10.11', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="ubuntu-22.04">

1. Login via **SSH** to the **Instance**.

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
{ label: 'MariaDB 10.11', value: 'ubuntu-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'ubuntu-mariadb-10.6', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-12">

1. Login via **SSH** to the **Instance**.

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
{ label: 'MariaDB 10.11', value: 'debian-mariadb-10.11', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-11">

1. Login via **SSH** to the **Instance**.

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
{ label: 'MariaDB 10.11', value: 'debian-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'debian-mariadb-10.6', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MYSQL_5.7 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "d5a88a6d7ad05e3afa019b41f5aed5a61311917ef5516f04b6cf6248b414186c install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

</Tabs>

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
It's highly recommended to open port **8443** only for your IP via [firewall](https://www.vultr.com/docs/vultr-firewall/).
:::

You can now access **CloudPanel** via Browser: **https://serverIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />