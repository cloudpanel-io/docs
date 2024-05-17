---
id: settings
title: Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Varnish Cache** is integrated into **CloudPanel** as a turn-key solution. Enable **Varnish Cache** to get blazing fast page loads, **up to 250 times faster**.
Change the **Cache Lifetime**, **Excluded Params**, and **Excludes** to your needs.

<img alt="Varnish Cache Settings" class="border" src={useBaseUrl('img/frontend-area/varnish-cache/settings.png?v=0.0.1')} />

## Cache Tag Prefix

The **Cache Tag Prefix** is the main cache tag used on every page. Other cache tags use this prefix in front.

## Excluded Params

The **Excluded Params** is a list of **GET Parameters** to disable caching. 

As example, the following Urls are not being cached.

* https://www.domain.com/?noCache=1
* https://www.domain.com/?page=1&__SID=e71d59d553fc2d8faa774627c48a02ba

## Excludes

:::caution Attention
Purge the url/file from the cache after adding it to the **Excludes**.
:::

In the **Excludes**, you can configure **files** or **paths** that shouldn't be cached.

**Example Excludes:**

* ^/my-account/ --> Urls starting with **/my-account/** are not being cached
* /cart/ --> Urls containing **/cart/** are not being cached
* wp-login.php --> File will not be cached

## Purge Cache

**Purge Entire Cache** removes the entire cache for a site from **Varnish Cache**. 

Under the hood, a **PURGE** request with the header **X-Cache-Tags** is being sent to port 6081 (Varnish Cache):

```bash
curl -v -X PURGE -H 'X-Cache-Tags: aac6' 127.0.0.1:6081
```

You can purge more specifically by entering a single url or tags separated by a comma.

## Developer Guide

Check out the [Developer Guide](../developer-guide/vhost) for a detailed guide on how **Varnish Cache** works and how it's integrated into **CloudPanel**.