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

2. Run **dploy init**, to initialize the project. In this step, a pre-configured config file gets downloaded from the [templates repository](https://github.com/cloudpanel-io/dploy-application-templates), and the project directory structure gets created.

<Tabs
defaultValue="generic"
values={[
{ label: 'Generic', value: 'generic', },
{ label: 'WordPress', value: 'wordpress', },
{ label: 'Symfony', value: 'symfony', },
{ label: 'Laravel', value: 'laravel', },
]}>
<TabItem value="generic">

```bash
dploy init
```

</TabItem>
<TabItem value="wordpress">

```bash
dploy init wordpress
```

</TabItem>
<TabItem value="symfony">

```bash
dploy init symfony
```

</TabItem>
<TabItem value="laravel">

```bash
dploy init laravel
```

</TabItem>
</Tabs>
