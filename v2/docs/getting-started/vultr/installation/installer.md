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

### Server Type

Choose the **Server Type** you want to run the **Instance** on.

<img class="border" alt="Server Type" src={useBaseUrl('img/getting-started/vultr/server-type.png')} />

### Server Location

Choose the **Server Location** closest to your visitors.

<img class="border" alt="Server Location" src={useBaseUrl('img/getting-started/vultr/server-location.png')} />

### Server Image

Select **Ubuntu 22.04** or **Debian 11** as **Server Image**.

<img class="border" alt="Server Image" src={useBaseUrl('img/getting-started/vultr/server-image.png')} />

### Server Size

Select the **Server Size** you want to deploy. We recommend at least **1 vCPU** with **2 GB of Memory**.

<img class="border" alt="Server Size" src={useBaseUrl('img/getting-started/vultr/server-size.png')} />

### Finalize and Deploy

1. Select an **SSH Key** or receive the **root password** via e-mail.

<img class="border" alt="SSH Keys" src={useBaseUrl('img/getting-started/vultr/ssh-keys.png')} />

2. Enter the **Server Hostname & Label** and click on the button **Deploy Now** to launch the instance.

<img class="border" alt="Deploy Now" src={useBaseUrl('img/getting-started/vultr/deploy-now.png')} />

## Install CloudPanel

After launching the **Instance**, log in with **SSH** and run the installer script.

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
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
{ label: 'MariaDB 10.9', value: 'ubuntu-mariadb-10.9', },
{ label: 'MariaDB 10.8', value: 'ubuntu-mariadb-10.8', },
{ label: 'MariaDB 10.6', value: 'ubuntu-mariadb-10.6', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.9">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.9 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.8">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.8 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.6 bash install.sh
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
{ label: 'MariaDB 10.9', value: 'debian-mariadb-10.9', },
{ label: 'MariaDB 10.8', value: 'debian-mariadb-10.8', },
{ label: 'MariaDB 10.7', value: 'debian-mariadb-10.7', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr bash install.sh
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MYSQL_5.7 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.9">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.9 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.8">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.8 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2d3812327d8229c372f599156515c4639d18badd5c6a972616affbf86960c24f  install.sh" | \
sha256sum -c && sudo CLOUD=vultr DB_ENGINE=MARIADB_10.7 bash install.sh
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