---
id: installer
title: Digital Ocean Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [Digital Ocean](https://www.digitalocean.com/).

## Launching a Droplet

1. Login to your [Digital Ocean](https://cloud.digitalocean.com/login) account. 

2. In the left navigation, click on **Droplets** and then on **Create Droplet**.

### Choose Region

Choose the **Region** where you want to run your **Droplet**.

<img class="border" alt="Datacenter Region" src={useBaseUrl('img/getting-started/digital-ocean/datacenter-region.png?v=1')} />

### Choose an image

Select **Ubuntu 24.04 or 22.04** or **Debian 12 or 11** as **OS Image**.

<img class="border" alt="Choose an image" src={useBaseUrl('img/getting-started/digital-ocean/choose-image.png?v=1')} />

### Droplet Size

Choose the size of your **Droplet**, e.g., **Premium AMD with NVMe SSD**.

<img class="border" alt="Droplet Size" src={useBaseUrl('img/getting-started/digital-ocean/droplet-size.png?v=1')} />

### Authentication Method

Select your **Authentication Method**, **SSH keys** or **Password**. <br />
How to create an SSH Key, is explained on the site: [How-to Add SSH Keys to New or Existing Droplets](https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/)

<img class="border" alt="Authentication Method" src={useBaseUrl('img/getting-started/digital-ocean/authentication-method.png?v=1')} />

### Finalize and Create

Enter a **Hostname**, and click on the button **Create Droplet** to launch your **Droplet**.

<img class="border" alt="Finalize and Create" src={useBaseUrl('img/getting-started/digital-ocean/finalize-and-create.png?v=1')} />

## Assigning a Reserved IP

A **Reserved IP** (static ip) is highly recommended to have the same IP after changing the size of your **Droplet**.

To create a **Reserved IP**, do the following steps:

1. In the left navigation, click on **Networking**.

2. Select your **Droplet** and click on the button **Assign Reserved IP**.

<img class="border" alt="Assigning a Reserved IP" src={useBaseUrl('img/getting-started/digital-ocean/assigning-a-reserved-ip.png')} />

## Install CloudPanel

After launching the **Droplet**, log in with **SSH** and run the installer script.

<Tabs
defaultValue="ubuntu-24.04"
values={[
{ label: 'Ubuntu 24.04 LTS', value: 'ubuntu-24.04', },
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 12 LTS', value: 'debian-12', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-24.04">

1. Login via **SSH** to the **Droplet**.

```bash
ssh -i path_to_your_private_key root@yourIpAddress
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
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="ubuntu-22.04">

1. Login via **SSH** to the **Droplet**.

```bash
ssh -i path_to_your_private_key root@yourIpAddress
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
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-12">

1. Login via **SSH** to the **Droplet**.

```bash
ssh -i path_to_your_private_key root@yourIpAddress
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
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-11">

1. Login via **SSH** to the **Droplet**.

```bash
ssh -i path_to_your_private_key root@yourIpAddress
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
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do bash install.sh
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MYSQL_5.7 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "2aefee646f988877a31198e0d84ed30e2ef7a454857b606608a1f0b8eb6ec6b6 install.sh" | \
sha256sum -c && sudo CLOUD=do DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

</Tabs>

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
It's highly recommended to open port **8443** only for your IP via [firewall](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/).
:::

You can now access **CloudPanel** via Browser: **https://yourIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />
