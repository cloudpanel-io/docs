---
id: installation
title: Installation
sidebar_label: Installation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Under Development
**DPLOY** is currently in the testing phase and has not yet been officially released.
:::

On this page, we explain step by step how to install and use **DPLOY** on **CloudPanel**.

## Download

1. Login via **SSH** as root user.

2. Download **DPLOY** and save it to **/usr/local/bin/dploy**.

```bash
curl -sS https://dploy.cloudpanel.io/dploy -o /usr/local/bin/dploy && chmod +x /usr/local/bin/dploy
```

## Initialize

With the **dploy init** command, the config file and the project directory structure gets created.

1. Login via **SSH** as the **site user**.

2. Run **dploy init**, to initialize the project. A pre-configured config file is downloaded from the [templates repository](https://github.com/cloudpanel-io/dploy-application-templates), and the project directory structure is created.

<Tabs  defaultValue="php-applications" values={[
{ label: 'PHP Applications', value: 'php-applications', },
{ label: 'Node.js Applications', value: 'node-js-applications', },
{ label: 'Static HTML Sites', value: 'static-html-sites', },
]}>
<TabItem value="php-applications">

<Tabs defaultValue="generic" values={[
{ label: 'Generic', value: 'generic', },
{ label: 'Laravel', value: 'laravel', },
{ label: 'Symfony', value: 'symfony', },
{ label: 'Magento 2 ', value: 'magento2', },
{ label: 'WordPress', value: 'wordpress', },
{ label: 'WooCommerce', value: 'woocommerce', },
]}>
<TabItem value="generic">

```bash
dploy init
```

</TabItem>
<TabItem value="laravel">

```bash
dploy init laravel
```

</TabItem>
<TabItem value="symfony">

```bash
dploy init symfony
```

</TabItem>
<TabItem value="magento2">

```bash
dploy init magento2
```

</TabItem>
<TabItem value="wordpress">

```bash
dploy init wordpress
```

</TabItem>
<TabItem value="woocommerce">

```bash
dploy init woocommerce
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="node-js-applications">

<Tabs defaultValue="ghost" values={[
{ label: 'Ghost', value: 'ghost', },
]}>
<TabItem value="ghost">

```bash
dploy init ghost
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="static-html-sites">

```bash
dploy init static-html-site
```

</TabItem>
</Tabs>

3. Enter your **Git Repository SSH URL** and the **Deploy Directory**.

<img alt="dploy init" class="border" src={useBaseUrl('img/dploy/dploy-init.png')} />

## Configuration

The **dploy init** command creates the **dploy** configuration file **config.yml**.

Open the **config.yml** and change the **shared directories**, **before and after commands**, if needed.

:::caution PHP Applications
Make sure to reload the right php-fpm service in the **after_commands**.
:::

```bash
nano ~/.dploy/config.yml
```

## Sudoers Permissions

For security reasons, the site users cannot reload the **PHP-FPM Service**, which is needed to clear the **realpath** cache after switching the current symlink to the latest release.

To allow site users to reload only the **PHP-FPM Service**, we create a **sudoers file**.

Replace **moby** with your **site user** and execute the following command as root:

```bash
echo 'moby ALL = NOPASSWD: systemctl reload php*-fpm' >> /etc/sudoers.d/dploy
```