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

1. To add a new **Rule**, click on the button **Add Rule**.

2. Select the **Type**, enter the **Port Range**, **Source**, and **Description (optional)** and click on **Add Rule** to apply the firewall rule.

<img class="border" alt="Add Rule" src={useBaseUrl('img/admin/security/firewall/add_rule.png')} />

### Editing a Rule

1. Select the **Rule** you want to edit.

<img class="border" alt="Edit Rule" src={useBaseUrl('img/admin/security/firewall/edit_rule.png')} />

2. Edit the **Firewall Rule** and click on the button **Save**.

<img class="border" alt="Edit Rule Form" src={useBaseUrl('img/admin/security/firewall/edit_rule_form.png')} />

### Deleting a Rule

1. Select the **Rule** you want to remove and click on **Delete**.

<img class="border" alt="Delete Rule" src={useBaseUrl('img/admin/security/firewall/delete_rule.png')} />

## Basic Auth

### Enable Basic Auth

### Disable Basic Auth