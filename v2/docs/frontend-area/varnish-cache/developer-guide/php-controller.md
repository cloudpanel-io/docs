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
is being controlled via a **PHP Controller**, which gets enabled when you enable **Varnish Cache** in the settings.

### How does it work?

The **PHP Controller** for **Varnish Cache** is a **PHP File** that get prepended to the application via **auto_prepend_file**.

When you enable **Varnish Cache**, the **PHP Controller** gets added like other **PHP Settings** via **NGINX VHOST**.

```
auto_prepend_file=/home/siteUser/.varnish-cache/controller.php;
```

For **WordPress/WooCommerce**, **Laravel**, **Symfony**, and other **PHP Applications**, we have a controller 
that can be found in the following git repository [https://github.com/cloudpanel-io/varnish-controllers/](https://github.com/cloudpanel-io/varnish-controllers/).

### The Controller File


<iframe width="100%" frameborder="0" height="4000" src="data:text/html;charset=utf-8, <head><base target='_blank' /></head><body><script src='https://gist.github.com/cloudpanel-io/fc38c8ca468e4348747dbaa897edde89.js'></script></body>"></iframe>