---
id: instance
title: Instance
sidebar_label: Instance
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Reboot

To reboot your instance, click in the left menu on **Instance** and then on the button **Reboot** top right.

<img class="border" alt="Instance Reboot" src={useBaseUrl('img/admin/instance/reboot.png')} />

## Services

To restart a service like **NGINX**, **MySQL** or **PHP-FPM**, click in the left menu on **Instance** and then select the **Service** to restart.

<img class="border" alt="Service Restart" src={useBaseUrl('img/admin/instance/service_restart.png')} />

## Settings

### Proftpd Settings

For connecting via FTP you need to enter the **Instance IP** in the field **MasqueradeAddress**.

The **MasqueradeAddress** causes the instance to display the network information for the specified IP address or DNS hostname 
to the client, on the assumption that the IP address or DNS host is acting as a NAT gateway or port forwarder for the instance.

<img class="border" alt="Proftpd MasqueradeAddress" src={useBaseUrl('img/admin/instance/protpd_masquerade_address.png')} />

### Instance Settings

#### Timezone Change

The **timezone** of your instance is essential for executing **cron jobs** and other scheduled tasks at the right time in your region.

<img class="border" alt="Change Timezone" src={useBaseUrl('img/admin/instance/change_timezone.png')} />

:::warning Attention
**Reboot** the instance after changing the instance that all services are aware of the timezone change.
:::