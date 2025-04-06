---
id: mailcow
title: Mailcow
sidebar_label: Mailcow
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this site, you will find a **step-by-step guide** on how to run the mail server [Mailcow](https://mailcow.email/) on **CloudPanel**. <br />
The mail server [Mailcow](https://mailcow.email/) is a dockerized application that is addressed via **Reverse Proxy**.

:::warning System Requirements
  - **>= 1 Core**
 - **>= 6 GB of RAM**
 - **>= 20 GB Disk**
:::

## Disable Postfix 

Login via **SSH** as **root** and stop and disable the **postfix** service:

```bash
systemctl stop postfix && systemctl disable postfix
```

## Docker Installation

1. Login via **SSH** as **root**:

```bash
ssh root@instance-ip-address
```

2. Install **Docker** with **Docker Compose** with the following command:

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

Install **docker** and the **docker compose plugin**:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable sh && apt install docker-compose-plugin
```

</TabItem>
<TabItem value="debian-11">

1. Install **apparmor** first as a workaround for the following [issue](https://github.com/mailcow/mailcow-dockerized/issues/5057).

```bash
apt update && apt -y install apparmor
```

2. Install **docker** and the **docker compose plugin**:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable sh && apt install docker-compose-plugin
```

</TabItem>
</Tabs>

## Mailcow Installation

1. Clone the [Mailcow Git Repository](https://github.com/mailcow/mailcow-dockerized) to **/opt/mailcow-dockerized**:

```bash
git clone https://github.com/mailcow/mailcow-dockerized /opt/mailcow-dockerized
```

2. Initialize **Mailcow** by executing the **generate_config.sh** script:

```bash
cd /opt/mailcow-dockerized/ && ./generate_config.sh
```

3. Set the **Mail server hostname (FQDN)**, e.g., **mail.domain.com**.

<img alt="Set Mail Server Hostname (FQDN)" src={useBaseUrl('img/guides/applications/mailcow/mail-server-hostname.png')} />

4. Open the configuration file and change the values for **HTTP_PORT**, **HTTP_BIND**, **HTTPS_PORT**, **HTTPS_BIND**.

```bash
nano /opt/mailcow-dockerized/mailcow.conf
```

```bash
HTTP_PORT=7080
HTTP_BIND=127.0.0.1

HTTPS_PORT=7443
HTTPS_BIND=127.0.0.1
```

## Starting Mailcow

To start **Mailcow**, we go to the directory **/opt/mailcow-dockerized/** and launch the docker containers.

```bash
cd /opt/mailcow-dockerized/ && docker compose pull && docker compose up -d
```

## Reverse Proxy Configuration

To access **Mailcow** via our domain **https://mail.domain.com**, we create a [Reverse Proxy](../../../frontend-area/add-site/#create-a-reverse-proxy) and forward the traffic to port **7443**.

1. In **CloudPanel**, create a [Reverse Proxy](../../../frontend-area/add-site/#create-a-reverse-proxy) with your **Domain Name** and **https://127.0.0.1:7443** as **Reverse Proxy Url**.

<img class="border" alt="CloudPanel Reverse Proxy Configuration" src={useBaseUrl('img/guides/applications/mailcow/reverse-proxy-configuration.png')} />

2. Go to your **Reverse Proxy** and issue an [SSL/TLS Certificate](../../../frontend-area/tls/).

3. Done. You can now login [https://mail.domain.com/admin](https://mail.domain.com/admin) with the username **admin** and password **moohoo**.

<img alt="Mailcow Login" src={useBaseUrl('img/guides/applications/mailcow/mailcow-login.png')} />

4. For security reasons, we recommend putting a [Basic Authentication](../../../frontend-area/security/#basic-authentication) in front of your **Mailcow** installation.
