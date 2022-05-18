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

<img alt="Domain Settings" class="border" src={useBaseUrl('img/frontend-area/settings/domain-settings.png')} />

## Site User Settings

In the **Site User Settings**, you can reset the password for the primary **SSH User** or add **SSH Keys** if you want to use **SSH Public Key Authentication**.

<img alt="Site User Settings" class="border" src={useBaseUrl('img/frontend-area/settings/site-user-settings.png')} />

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

<img alt="PHP Settings" class="border" src={useBaseUrl('img/frontend-area/settings/php-settings.png')} />

</TabItem>
<TabItem value="nodejs-settings">

In the **Node.js Settings**, you can change the **Node.js Version** and the **App Port**.

The **App Port** is used to forward NGINX traffic via reverse proxy to the **Node App**.

The **Node.js Versions** are managed via [Node Version Manager](https://github.com/nvm-sh/nvm).

:::caution Node.js Version change
After changing the **Node.js Version**, log out from an active **SSH Session** and connect again to see the new version. <br/>
Type: **node -v** to see the new version.
:::

<img alt="Node.js Settings" class="border" src={useBaseUrl('img/frontend-area/settings/nodejs-settings.png')} />

</TabItem>
<TabItem value="python-settings">

In the **Python Settings**, you can change the **Python Version** and the **App Port**.

The **App Port** is used to forward NGINX traffic via reverse proxy to the **Python App**.

By default, the **Python Version** of the operating system is installed.

:::caution Python Version change
After changing the **Python Version**, log out from an active **SSH Session** and connect again to see the new version. <br/>
Type: **python --version** to see the new version.
:::

<img alt="Python Settings" class="border" src={useBaseUrl('img/frontend-area/settings/python-settings.png')} />

</TabItem>
</Tabs>

## PageSpeed

**CloudPanel** is shipped with the [Google PageSpeed Module for NGINX](https://developers.google.com/speed/pagespeed/module), automatically optimizing your site for **better performance**.

Enable the **PageSpeed** module for **NGINX** by using the switch and clicking on the button **Save**.

You can modify the rules; see the [PageSpeed Documentation](https://www.modpagespeed.com/doc/) for detailed information.

<img alt="Google PageSpeed" class="border" src={useBaseUrl('img/frontend-area/settings/pagespeed.png')} />

## Delete Site

To delete a site, click on the button **Delete Site** and confirm the action by entering the **Domain Name**.

:::warning Attention
Deleting a site will permanently remove all site files, databases, users, and configs, and they will be non-recoverable.
:::

<img alt="Delete Site" class="border" src={useBaseUrl('img/frontend-area/settings/delete-site.png')} />