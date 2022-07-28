---
id: pagespeed-module
sidebar_label: PageSpeed Module
title: PageSpeed Module
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

:::warning ARM64
The PageSpeed Module is only available for **X86** and not yet for **ARM64**.
:::

On this site, you will find a step by step guide on enabling and using the [PageSpeed Module](https://developers.google.com/speed/pagespeed/module) from Google.

The **Pagespeed Module** is already compiled and shipped with **CloudPanel** and can be used right away.

The **PageSpeed Module** for **NGINX** improves the performance of your site by:

- Combining CSS
- Combining Javascript
- Minifying HTML
- Defer JavaScript
- Optimize Images  
- Rewriting Images
- Layz Loading Images
- Rewriting Javascript
- [And many more](https://www.modpagespeed.com/doc/)

## Enabling the PageSpeed Module

The **PageSpeed Module** needs to be enabled in the [NGINX Vhost](../../frontend-area/domains#vhost) on domain level.

1. Go to the [Vhost](../../frontend-area/domains#vhost) of your **domain** and add the following lines:

```
include /etc/nginx/pagespeed.conf;
pagespeed on;
pagespeed FileCachePath "/home/cloudpanel/htdocs/domain.com/wp-content/cache/ngx_pagespeed/";
```

:::tip WordPress
If you have selected the **WordPress Vhost Template**, then lines already exist. Remove the **#** to enable it.
:::

<img class="border" src={useBaseUrl('img/v1/guides/nginx/pagespeed-module/enable_vhost.png')} /> <br /><br />

2. Change the **FileCachePath** to your **WordPress** installation.

3. Click on the button **Update** to enable the **PageSpeed Module**.

## Configuration

The configuration of the **PageSpeed Module** can be found in the following file:

```
/etc/nginx/pagespeed.conf
```

## Testing

After enabling the **PageSpeed Module**, you should see your website is **loading faster** because it's about **40%** smaller.
All **CSS**, **Javascript**, and **Images** are compressed and optimized.

By checking the **page source** or the requests with the [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools) you see 
that the **CSS**, **JS**, and **Images** have been optimized by the **NGINX Module**.

<img class="border" src={useBaseUrl('img/v1/guides/nginx/pagespeed-module/optimized_css_files.png')} /> <br /><br />

## Purging Cache

The **PageSpeed Module** can be cleared by deleting all files of the **FileCachePath** directory that you adjusted.

```
pagespeed FileCachePath "/home/cloudpanel/htdocs/domain.com/wp-content/cache/ngx_pagespeed/";
```