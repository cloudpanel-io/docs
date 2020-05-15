---
id: security
title: Security
sidebar_label: Security
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page you find information about how to block **IPs** and **Bots**.

## IP Blocking

To block an **IP**, click on the tab **IP Blocking** and on the button **Add IP** top right.

<img class="border" src={useBaseUrl('img/v1/security/new_ip.png')} /> <br /> <br />

The IP to block can entered as **ipv4** or **ipv6** format. Click on the button **Add IP** to save.
 
**Examples:**

- **8.8.8.8** (ipv4)
- **192.168.0.1/32** (ipv4 CIDR Format)
- **2400:6180:100:d0::99b:5001** (ipv6)
 

## Bot Blocking

To block a **Bot**, click on the tab **Bots Blocking** and on the button **Add Bot** top right.

<img class="border" src={useBaseUrl('img/v1/security/new_bot.png')} /> <br /> <br />

Enter the **Bot Name** and click on the button **Add Bot** to save.

:::note Bot Name
The **Bot Name** is case insensitive. As example: **fatbot** would be the same as **FatBot**.
:::