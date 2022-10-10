---
id: php-controller
title: Developer Guide - PHP Controller
sidebar_label: PHP Controller
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Caching a dynamic site like **WordPress**, **WooCommerce**, or other **PHP Applications** isn't easy. <br />
Most pages can be cached, but some may not be cached as they are individual to each user, such as **carts**, **checkouts**, or **customer areas**.

The caching behavior, like the maximum caching lifetime or if a site path should be excluded from caching, 
is being controlled via a **PHP Controller**, which gets added when you enable **Varnish Cache** in the settings.

## The Controller File

The **PHP Controller** for **Varnish Cache** is a **PHP File** that get prepended to the application via **auto_prepend_file**.

When you enable **Varnish Cache**, the **PHP Controller** gets added like other **PHP Settings** via **NGINX VHOST**.

```
auto_prepend_file=/home/siteUser/.varnish-cache/controller.php;
```

For **WordPress/WooCommerce**, **Laravel**, **Symfony**, and other **PHP Applications**, we have a controller 
that can be found in the following git repository [https://github.com/cloudpanel-io/varnish-controllers/](https://github.com/cloudpanel-io/varnish-controllers/).

When you create a site for an application that supports **Varnish Cache**, the right controller file gets automatically added to **/home/$siteUser/.varnish-cache/**.

The example below shows the **PHP Controller File** used for **WordPress/WooCommerce**.

You will find the varnish controller file in the site's home directory.

```bash
/home/$siteUser/.varnish-cache/controller.php
```

As mentioned earlier, the file gets added via [auto_prepend_file](https://www.php.net/manual/en/ini.core.php#ini.sect.data-handling), which means it's the first code that gets executed.

**Varnish Cache** is being controlled via the **Cache-Control** header.

By sending the following **Cache-Control** header, we say **Varnish Cache** to store a copy of the page for **604800** seconds before it gets expired.

```bash
Cache-Control: public, max-age=604800, s-maxage=604800
```

The controller decides if a page can be cached and is sending headers to **Varnish Cache**:

* X-Cache-Lifetime
* X-Cache-Tags
* Cache-Control

<img alt="Varnish Cache Response Headers" class="border" src={useBaseUrl('img/frontend-area/varnish-cache/developer-guide/response-headers.png')} />

By checking the response headers of a page, you will find **x-cache-age**, **x-cache-lifetime**, and **x-cache-tags**.

The value of **x-cache-age** returns the age of the page in seconds stored in **Varnish Cache** and remains until **x-cache-lifetime** before expiring.

The controller's main function is to check if a page can be cached and to enrich the **X-Cache-Tags** before sending the headers.

### header_register_callback

At line **321**, you see the callback **$headerRegisterCallback** registered.

The [header_register_callback](https://www.php.net/manual/en/function.header-register-callback.php) will be called when PHP starts sending output.

```php
header_register_callback($headerRegisterCallback);
```

In this callback, additional tags are added and required for specific purge operations.

### register_shutdown_function

The [register_shutdown_function](https://www.php.net/manual/en/function.register-shutdown-function.php) callback **$registerShutdownCallback** is responsible for purge operations. <br />
If a specific action is happening, e.g., someone is editing a post in the admin area, all pages for a specific cache tag get purged.

<iframe width="100%" frameborder="0" height="7150" src="data:text/html;charset=utf-8, <head><base target='_blank' /></head><body><script src='https://gist.github.com/cloudpanel-io/fc38c8ca468e4348747dbaa897edde89.js'></script></body>"></iframe>

## Custom Applications

You can set the caching lifetime to your needs for custom **PHP Applications** based on **Laravel**, **Symfony**, or other **PHP frameworks**.

For example, if you have a page that should only be cached for 10 minutes, you can call the static method **setCacheLifetime**.

```php
ClpVarnish::setCacheLifetime(600);
```

For enriching cache tags, e.g., a list of product ids, you can call the static method **addCacheTag**. <br />
Make sure that you use the cache-tag prefix in front.

```php
<?php
$cacheTagPrefix = ClpVarnish::getCacheTagPrefix();
$cacheTag = sprintf('%s-%s', $cacheTagPrefix, 'my-cache-tag');
ClpVarnish::addCacheTag($cacheTag);
```

## Developer Mode

When the developer mode is enabled, all purge requests are logged into the following log file:

```
/home/$siteUser/logs/varnish-cache/purge.log
```

To enable the developer mode, do the following:

1. Login via **SSH** with the site user.

2. Open the **controller.php** file:

```
nano ~/.varnish-cache/controller.php
```

3. Set **VARNISH_DEVELOPER_MODE** to **true**:

```php
define('VARNISH_DEVELOPER_MODE', true);
```

4. Tail the **purge.log** to see the **purges**:

```
tail -f ~/logs/varnish-cache/purge.log -n1000
```