---
id: security
title: Security
sidebar_label: Security
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Firewall

The integrated **Firewall** in **CloudPanel** is  based on [UFW](https://en.wikipedia.org/wiki/Uncomplicated_Firewall), also known as **Uncomplicated Firewall**. <br />
Developed to ease iptables firewall configuration, **ufw** provides a user-friendly way to create an IPv4 or IPv6 host-based firewall.

**CloudPanel** is being shipped with pre-configured rules to achieve higher security.

:::warning Recommendation
For higher security, whitelist the **SSH Port (22)** for your IPs only. The **CloudPanel Port (8443)** should only be whitelisted if you have a static ip. 
:::

<img class="border" alt="Pre-Configured UFW rules" src={useBaseUrl('img/admin-area/security/firewall/pre-configured-rules.png?v=0.0.1')} />

### Adding a Rule

1. To add a new **Rule**, click on the button **Add Rule**.

2. Select the **Type**, enter the **Port Range**, **Source**, and **Description (optional)** and click on **Add Rule** to apply the firewall rule.

<img class="border" alt="Add Rule" src={useBaseUrl('img/admin-area/security/firewall/add-rule.png?v=0.0.1')} />

### Editing a Rule

1. Click on the **Rule** you want to edit.

<img class="border" alt="Edit Rule" src={useBaseUrl('img/admin-area/security/firewall/edit-rule.png?v=0.0.1')} />

2. Edit the **Firewall Rule** and click on the button **Save**.

<img class="border" alt="Edit Rule Form" src={useBaseUrl('img/admin-area/security/firewall/edit-rule-form.png?v=0.0.1')} />

### Deleting a Rule

1. Select the **Rule** you want to remove and click on **Delete**.

<img class="border" alt="Delete Rule" src={useBaseUrl('img/admin-area/security/firewall/delete-rule.png?v=0.0.1')} />

## Basic Auth

If you don't have a static ip to close port **8443**, a **Basic Auth** in front of **CloudPanel** is recommended to restrict the access.

### Enable Basic Auth

#### Via Web Interface

1. To enable **Basic Auth**, click in the left menu on **Security** and then on the tab **Basic Auth**.

2. Enter a **User Name** and **Password** and click on **Save** to enable basic auth.

<img class="border" alt="Enable Basic Auth" src={useBaseUrl('img/admin-area/security/basic-auth/enable.png?v=0.0.1')} />

#### Via Command Line (CLI)

To enable **Basic Auth** via the command line, log in via **SSH** and execute the following command as the **root** user.

```bash
clpctl cloudpanel:enable:basic-auth --userName='john.doe' --password='password123'
```

### Disable Basic Auth

#### Via Web Interface

To disable **Basic Auth**, click in the left menu on **Security** and then on the tab **Basic Auth**.

<img class="border" alt="Disable Basic Auth" src={useBaseUrl('img/admin-area/security/basic-auth/disable.png?v=0.0.1')} />

#### Via Command Line (CLI)

To disable **Basic Auth** via the command line, log in via **SSH** and execute the following command as the **root** user.

```bash
clpctl cloudpanel:disable:basic-auth
```