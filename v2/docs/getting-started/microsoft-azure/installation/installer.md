---
id: installer
title: Microsoft Azure Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [Microsoft Azure](https://azure.microsoft.com/).

## Launching a Virtual Machine

1. Log in to the [Microsoft Azure Portal](https://portal.azure.com/).

2. Go to **Virtual Machines** and click on **Azure virtual machine**.

<img class="border" alt="Create Virtual Machine" src={useBaseUrl('img/getting-started/microsoft-azure/create-virtual-machine.png?v=.0.0.1')} />

### Instance details

Enter the name of your **Virtual Machine**, select a **Region**, select **Ubuntu 24.04 or 22.04** or the **Debian 12 or 11** image <br />
and choose the size of your instance.

<img class="border" alt="Instance Details" src={useBaseUrl('img/getting-started/microsoft-azure/instance-details.png?v=.0.0.1')} />

### Administrator account

As **Authentication type** select **SSH Public Key** (recommended) or **Password**. <br />

On the following site, you can learn how to create an **SSH Public Key**: <br />
[https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/mac-create-ssh-keys)

Enter the **Username** and your **SSH Public Key**.

<img class="border" alt="SSH Key" src={useBaseUrl('img/getting-started/microsoft-azure/ssh-public-key.png?v=.0.0.1')} />

### Inbound port rules

Select which virtual machine network ports are accessible from the public internet. <br />
You can specify more limited or granular network access on the Networking tab.

Select the inbound ports: **HTTP**, **HTTPS** and **SSH** and click on the button **Next: Disks >**

<img class="border" alt="Inbound port rules" src={useBaseUrl('img/getting-started/microsoft-azure/inbound-port-rules.png?v=.0.0.1')} />

### Disks

Select **Premium SSD** as **OS disk type** and continue to **Review + create**.

<img class="border" alt="Premium SSD" src={useBaseUrl('img/getting-started/microsoft-azure/premium-ssd.png?v=.0.0.1')} />

### Review + create

Click on the button **Create** to launch your virtual machine.

<img class="border" alt="Review and Create" src={useBaseUrl('img/getting-started/microsoft-azure/review-and-create.png?v=.0.0.1')} />

## Firewall

To access the **CloudPanel** after the installation, we need to create a firewall rule.

1. Click in the left navigation on **Networking** --> **Network settings** and click on the button **Create port rule**.

<img class="border" alt="Firewall Rule" src={useBaseUrl('img/getting-started/microsoft-azure/firewall-rule.png?v=.0.0.1')} />

2. Create a firewall rule to allow all **TCP** traffic.

:::warning Security
This firewall rule opens **ALL** ports.
**CloudPanel** has an integrated [Firewall](../../../../admin-area/security/#firewall) which takes care of the **ports**.

If you want to use the **Firewall Rules** from **Azure**, you need to open the TCP ports: **22**, **80**, **443**, and **8443 (CloudPanel)**. <br />
Also, open port **443 for UDP** to allow **HTTP3** connections. <br />
Don't forget to remove all **rules** in the admin area of **CloudPanel** to disable the **UFW Firewall**.
:::

**Source:** Any <br />
**Source port ranges:** * <br />
**Destination:** Any <br />
**Service:** Custom <br />
**Destination port ranges:** 0-65535 <br />
**Protocol:** Any <br />
**Acton:** Allow <br />
**Priority:** 100 <br />
**Name:** Allow_All <br />

<img class="border" alt="Add Firewall Rule" src={useBaseUrl('img/getting-started/microsoft-azure/add-firewall-rule.png?v=.0.0.1')} />

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

1. Login via **SSH** to the **Instance**. <br />

```bash
ssh -i path_to_your_private_key azure@yourIpAddress
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
{ label: 'MariaDB 11.4', value: 'ubuntu-mariadb-11.4', },
{ label: 'MariaDB 10.11', value: 'ubuntu-mariadb-10.11', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MYSQL_8.0 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-11.4">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_11.4 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>


<TabItem value="ubuntu-22.04">

1. Login via **SSH** to the **Instance**. <br />

```bash
ssh -i path_to_your_private_key azure@yourIpAddress
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
{ label: 'MariaDB 11.4', value: 'ubuntu-mariadb-11.4', },
{ label: 'MariaDB 10.11', value: 'ubuntu-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'ubuntu-mariadb-10.6', },
]}>
<TabItem value="ubuntu-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MYSQL_8.0 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-11.4">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_11.4 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-12">

1. Login via **SSH** to the **Instance**. <br />

```bash
ssh -i path_to_your_private_key azure@yourIpAddress
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
{ label: 'MariaDB 11.4', value: 'debian-mariadb-11.4', },
{ label: 'MariaDB 10.11', value: 'debian-mariadb-10.11', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MYSQL_8.0 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-11.4">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_11.4 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>

<TabItem value="debian-11">

1. Login via **SSH** to the **Instance**. <br />

```bash
ssh -i path_to_your_private_key azure@yourIpAddress
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
{ label: 'MariaDB 11.4', value: 'debian-mariadb-11.4', },
{ label: 'MariaDB 10.11', value: 'debian-mariadb-10.11', },
{ label: 'MariaDB 10.6', value: 'debian-mariadb-10.6', },
]}>
<TabItem value="debian-mysql-8.0">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MYSQL_8.0 bash install.sh
```

</TabItem>
<TabItem value="debian-mysql-5.7">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MYSQL_5.7 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-11.4">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_11.4 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="debian-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "a3ba69a8102345127b4ae0e28cfe89daca675cbc63cd39225133cdd2fa02ad36 install.sh" | \
sha256sum -c && sudo CLOUD=msa DB_ENGINE=MARIADB_10.6 bash install.sh
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