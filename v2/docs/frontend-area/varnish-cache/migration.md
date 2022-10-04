---
id: migration
title: Migration
sidebar_label: Migration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Attention
The following script is to enable **Varnish Cache** for sites that have been created before **2.1**.
:::

1. Login via **SSH** as **root** user.

2. Download the script to enable varnish.

```bash
curl -sSL https://raw.githubusercontent.com/cloudpanel-io/scripts/master/varnish/enable.php > /tmp/enable-varnish.php
```

3. Run the command to enable **Varnish Cache** for your site. 

The first parameter is your **Domain Name** and the second one is the **Application**.

<Tabs
defaultValue="wordpress"
values={[
{ label: 'WordPress', value: 'wordpress', },
{ label: 'Generic', value: 'generic', },
{ label: 'Codeigniter', value: 'codeigniter', },
{ label: 'Laravel', value: 'laravel', },
{ label: 'Symfony', value: 'symfony', },
{ label: 'Slim', value: 'slim', },
]}>
<TabItem value="wordpress">

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'WordPress'
```
</TabItem>
<TabItem value="generic">

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Generic'
```

</TabItem>
<TabItem value="codeigniter">

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Codeigniter 4'
```

</TabItem>
<TabItem value="laravel">

**Laravel 9**

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Laravel 9'
```

**Laravel 8**

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Laravel 8'
```

</TabItem>
<TabItem value="symfony">

**Symfony 6**

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Symfony 6'
```

**Symfony 5**

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Symfony 5'
```

</TabItem>
<TabItem value="slim">

```bash
php8.1 /tmp/enable-varnish.php www.domain.com 'Slim 4'
```

</TabItem>
</Tabs>
