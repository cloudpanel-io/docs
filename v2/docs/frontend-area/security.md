---
id: security
title: Security
sidebar_label: Security
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## IP Blocking

To block an **IP**, click on the tab **Security** and on the button **Add IP** top right.

<img alt="IP Blocking" class="border" src={useBaseUrl('img/frontend-area/security/ip-blocking.png')} />

The IP to block can be entered as **ipv4** or **ipv6** format. Click on the button **Add IP** to save.

**Examples:**

- **8.8.8.8** (ipv4)
- **192.168.0.1/32** (ipv4 CIDR Format)
- **2400:6180:100:d0::99b:5001** (ipv6)

## Bots Blocking

To block a **Bot**, click on the tab **Security** and on the button **Add Bot** top right.

<img alt="Bots Blocking" class="border" src={useBaseUrl('img/frontend-area/security/bots-blocking.png')} /> 

Enter the **Bot Name** and click on the button **Add Bot** to save.

:::warning Bot Name
The **Bot Name** is case insensitive. As example: **fatbot** would be the same as **FatBot**.
:::

## Basic Authentication

A **Basic Authentication** is useful to prevent traffic to your site when you don't want to have it public, e.g.,
during the development of a project or for test/staging environments.

To enable the **Basic Authentication**, use the switch, enter a **User Name** and **Password**, and click on **Save**.

<img alt="Basic Authentication" class="border" src={useBaseUrl('img/frontend-area/security/basic-authentication.png')} />

## Cloudflare

If you use [Cloudflare](https://www.cloudflare.com), you should **Allow traffic from Cloudflare only** that attackers cannot bypass the domain.

<img alt="Allow traffic from Cloudflare only" class="border" src={useBaseUrl('img/frontend-area/security/allow-traffic-from-cloudflare-only.png')} />

Ensure that your **DNS Records** are **Proxied** (orange cloud) through the **Cloudflare** network.

<img alt="Cloudflare Proxy" class="border" src={useBaseUrl('img/frontend-area/security/cloudflare-proxy.png')} />




