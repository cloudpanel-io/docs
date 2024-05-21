---
id: vhost
title: Vhost
sidebar_label: Vhost
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Vhost Editor

In the **Vhost Editor**, you can make changes on the **NGINX VHost**, which allows you to apply **rewrites**, **redirects**, **reverse proxies**, and other settings.

Under the hood, **CloudPanel** checks the syntax and reverts the changes to prevent downtime, and throws an error message.

On [Github](https://github.com/cloudpanel-io/vhost-templates/tree/master/v2), you find all vhost templates automatically updated every night.

<img alt="Vhost Editor" class="border" src={useBaseUrl('img/frontend-area/vhost/vhost-editor.png?v=0.0.1')} />

## HTTP/3

:::warning HTTP/3 support 
**Ubuntu 24.04** and **Debian 12** are being shipped with **nginx 1.26.0**, which has experimental support for **HTTP/3**. <br />
If you are using a custom firewall, make sure to have **UDP Port 443** open, as it's required for **HTTP/3**.
:::

**HTTP/3** can be enabled in the **vhost** for each site. By default, **http3** is set to **off**.

To enable **HTTP/3**, set **http3** to **on** and click on the button **Save**.

<img alt="Enable HTTP3" class="border" src={useBaseUrl('img/frontend-area/vhost/vhost-enable-http3.png?v=0.0.2')} />

To check if **HTTP/3** is working for your site, you can use the [HTTP/3 Check](https://http3check.net/).

<img alt="HTTP3 Check" class="border" src={useBaseUrl('img/frontend-area/vhost/http3-check.png?v=0.0.1')} />