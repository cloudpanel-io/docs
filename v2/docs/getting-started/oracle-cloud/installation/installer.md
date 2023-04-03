---
id: installer
title: Oracle Cloud Installer
sidebar_label: Installer
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install **CloudPanel** on [Oracle Cloud](https://www.oracle.com/cloud/).

## Create a Virtual Cloud Network

1. Go to [Virtual Cloud Networks](https://cloud.oracle.com/networking/vcns) and click on **Start VNC Wizard**.

<img class="border" alt="Start VNC Wizard" src={useBaseUrl('img/getting-started/oracle-cloud/create-virtual-cloud-network-start-wizard.png')} />

2. Enter a **VCN Name** and click on the button **Next** bottom left.

<img class="border" alt="Virtual Cloud Network Form" src={useBaseUrl('img/getting-started/oracle-cloud/virtual-cloud-network-form.png')} />

3. Review and click on **Create**.

## Firewall Configuration

1. Click on your created **VCN**, and then click on the **public subnet**.

<img class="border" alt="Public Subnet" src={useBaseUrl('img/getting-started/oracle-cloud/virtual-cloud-network-details.png')} />

2. Click on **Default Security List for cloudpanel** for whitelisting ports.

<img class="border" alt="Public Subnet" src={useBaseUrl('img/getting-started/oracle-cloud/public-subnet-default-security-list.png')} />

3. Click on **Add Ingress Rules**  and create a rule for **80**, **443**, and **8443**.

<img class="border" alt="Ingress Rules" src={useBaseUrl('img/getting-started/oracle-cloud/ingress-rules.png')} />

4. The **Ingress Rules** should look like the following table now.

<img class="border" alt="Ingress Rules Table" src={useBaseUrl('img/getting-started/oracle-cloud/ingress-rules-table.png')} />

## Create Instance

1. Go to [Instances](https://cloud.oracle.com/compute/instances) and click on the button **Create Instance**.

2. Enter the **Name** of the Instance and select the **compartment**.

<img class="border" alt="Name of the Instance" src={useBaseUrl('img/getting-started/oracle-cloud/instance-name.png')} />

### Placement

<img class="border" alt="Placement" src={useBaseUrl('img/getting-started/oracle-cloud/placement.png')} />

### Image and Shape

Change the image to **Ubuntu 22.04** or **Debian 11** and select your **Shape**.

<img class="border" alt="Change shape to Ubuntu 22.04 or Debian 11" src={useBaseUrl('img/getting-started/oracle-cloud/select-image.png')} />

### Networking

Select your created **Virtual Cloud Network** and select the **public subnet**.

<img class="border" alt="Virtual Cloud Network and Public Subnet" src={useBaseUrl('img/getting-started/oracle-cloud/virtual-cloud-network-and-subnet.png')} />

### SSH Keys

Upload your **SSH Keys** or generate a new key pair.

<img class="border" alt="Add SSH Keys" src={useBaseUrl('img/getting-started/oracle-cloud/add-ssh-keys.png')} />

### Provision Instance

Click on **Create** to provision the instance, it may take some minutes.

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
ssh -i path_to_your_private_key ubuntu@serverIpAddress
```

2. Switch from the user **ubuntu** to **root**:

```bash
sudo su root
```

3. Update the system and install the required packages.

```bash
apt update && apt -y upgrade && apt -y install curl wget sudo cron
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
echo "e0838864b7376b0390b4855d8d5c1425d83edffb38d2c980cf5b1c1a71d105bc install.sh" | \
sha256sum -c && sudo CLOUD=oci bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.11">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "e0838864b7376b0390b4855d8d5c1425d83edffb38d2c980cf5b1c1a71d105bc install.sh" | \
sha256sum -c && sudo CLOUD=oci DB_ENGINE=MARIADB_10.11 bash install.sh
```

</TabItem>
<TabItem value="ubuntu-mariadb-10.6">

```bash
curl -sS https://installer.cloudpanel.io/ce/v2/install.sh -o install.sh; \
echo "e0838864b7376b0390b4855d8d5c1425d83edffb38d2c980cf5b1c1a71d105bc install.sh" | \
sha256sum -c && sudo CLOUD=oci DB_ENGINE=MARIADB_10.6 bash install.sh
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="debian-11">

Not yet supported by the **Oracle Cloud**.

</TabItem>
</Tabs>

## Access CloudPanel

:::warning Security
For security reasons, access **CloudPanel** as fast as possible to create the admin user. There is a small time window where bots can create the user.
It's highly recommended to open port **8443** only for your IP.
:::

**Reboot the Instance**, and after booting, you can now access **CloudPanel** via Browser: **https://publicIpAddress:8443**

Ignore the self-signed certificate warning and click on **Advanced** and **Proceed** to continue to **CloudPanel**.

<img alt="Ignore Self-Signed Certificate" class="border" src={useBaseUrl('img/getting-started/ignore-self-signed-certificate.png')} />