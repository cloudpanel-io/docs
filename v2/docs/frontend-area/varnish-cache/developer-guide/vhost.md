---
id: vhost
title: Developer Guide - Vhost
sidebar_label: Vhost
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Basics

[Varnish Cache](http://varnish-cache.org/) is a caching HTTP reverse proxy that speeds up your sites by storing the compressed **Page Source** in memory. <br />
Static files like **CSS, JS,** and **Images** are **NOT** being stored in **Varnish Cache** because **NGINX** delivers them faster.

When you open your site, e.g., **https://www.domain.com**, the request goes to **NGINX**, where **SSL/TLS** gets terminated. <br />
If the request is a static file like a **Stylesheet**, **Javascript**, or an **Image**, it gets delivered immediately by **NGINX**. <br />
All other requests are forwarded to **Varnish Cache** (Port **6081**). 

If **Varnish Cache** has a cache entry for a request, the page source gets immediately returned from memory without being processed by **PHP-FPM**.

If no cache entry exists, the request gets forwarded 
by **Varnish Cache** to **NGINX** port **8080**, where it gets processed by the **PHP Application** via **PHP-FPM**.

## Vhost Explanation

The **Vhost** below is being used for **WordPress/WooCommerce**.

In line **1-10** a redirect for **domain.com** takes place. All requests from **http** and **https** are redirected via **301** to **https://www.domain.com**. 

The static files like **CSS, JS**, and **Images** are delivered at line **97-101**. <br />
All other requests are going through the **location /**, line **79-95**.

At line **80**, you see the placeholder **{{varnish_proxy_pass}}**.

When **Varnish Cache** is disabled, the rendered value for this placeholder is:

```bash
proxy_pass http://127.0.0.1:8080;
```

When **Varnish Cache** is enabled, it uses the value of **Varnish Server** from the [Varnish Cache Settings](../../settings), e.g.,

```bash
proxy_pass http://127.0.0.1:6081;
```

Lines **63-67** are special for **WordPress/WooCommerce**. 

All requests to **/wp-admin/** and **wp-login.php** are bypassed, meaning they are **NOT** going through **Varnish Cache**; they are forwarded to port **8080** (see lines **12-37**),
where they get processed by the **PHP Application** via **PHP-FPM**.