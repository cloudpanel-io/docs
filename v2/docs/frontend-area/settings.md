---
id: settings
title: Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Domain Settings

In the **Domain Settings**, you can change your site's **Root Directory**. By default, the **Domain Name** will be used but can be changed to your needs.

<img alt="Domain Settings" class="border" src={useBaseUrl('img/v2/frontend-area/settings/domain-settings.png')} />

## Site User Settings

In the **Site User Settings**, you can reset the password for the primary **SSH User** or add **SSH Keys** if you want to use **SSH Public Key Authentication**.

<img alt="Site User Settings" class="border" src={useBaseUrl('img/v2/frontend-area/settings/site-user-settings.png')} />

## PHP/Node.js/Python Settings

<Tabs
defaultValue="php-settings"
values={[
{ label: 'PHP Settings', value: 'php-settings', },
{ label: 'Node.js Settings', value: 'nodejs-settings', },
{ label: 'Python Settings', value: 'python-settings', },
]}>
<TabItem value="php-settings">

In the **PHP Settings**, you can change the **PHP Version** and change other settings like:

- memory_limit
- max_execution_time
- max_input_time
- max_input_vars
- post_max_size
- upload_max_filesize

The most common settings can be modified to your needs, but you can overwrite them in the <br />
**Additional Configuration Directives** if you need to change other parameter values.

<img alt="PHP Settings" class="border" src={useBaseUrl('img/v2/frontend-area/settings/php-settings.png')} />

</TabItem>
<TabItem value="nodejs-settings">

In the **Node.js Settings** you can change the **Node.js Version** and the **App Port**. <br />
The **App Port** is being used to forward NGINX traffic via reverse proxy to the **Node App**. <br />
The **Node.js Versions** are managed via [Node Version Manager](https://github.com/nvm-sh/nvm).

:::caution Node.js Version change
After changing the **Node.js Version**, log out from an active **SSH Session** and connect again to see the new version. <br/>
Type: **node -v** to see the changed version.
:::

<img alt="Node.js Settings" class="border" src={useBaseUrl('img/v2/frontend-area/settings/nodejs-settings.png')} />

</TabItem>
<TabItem value="python-settings">

Python Settings

</TabItem>
</Tabs>

## PageSpeed

## Delete Site