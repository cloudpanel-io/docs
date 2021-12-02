---
id: security
title: Security
sidebar_label: Security
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Firewall

The integrated **Firewall** in **CloudPanel** is  based on [UFW](https://en.wikipedia.org/wiki/Uncomplicated_Firewall), also known as **Uncomplicated Firewall**. <br />
Developed to ease iptables firewall configuration, **ufw** provides a user-friendly way to create an IPv4 or IPv6 host-based firewall.

**CloudPanel** is being shipped with pref-configured rules to achieve higher security.

:::warning Recommendation
For higher security, whitelist the **SSH Port (22)** for your IPs. The **CloudPanel Port (8443)** should only be whitelisted if you have a static ip. 
:::

<img class="border" alt="Pre-Configured UFW rules" src={useBaseUrl('img/admin/security/firewall/pre_configured_rules.png')} />

### Adding a Rule

### Deleting a Rule

## Basic Auth

### Enable

### Disable