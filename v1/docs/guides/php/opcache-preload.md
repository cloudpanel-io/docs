---
id: opcache-preload
title: Opcache Preload
sidebar_label: Opcache Preload
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

With **>= PHP 7.4**, support for [opcache preloading](https://wiki.php.net/rfc/preload) was added, a feature that improves 
the application start **performance up to 60%**.

:::caution
Keep in mind that it's a very new feature that might not be bug-free.
:::

## Configuration

Some frameworks like **Symfony** are already providing scripts for preloading the entire code base to improve the performance.

1. Open the `php.ini` of your **PHP Version**:

```
sudo nano /etc/php/7.4/fpm/php.ini
```

2. Search for `opcache.preload_user` and `opcache.preload` and adjust the values:

```
opcache.preload_user=clp
opcache.preload=/home/cloudpanel/htdocs/www.domain.com/preload.php
```

By default, all **PHP Versions** on CloudPanel have a default PHP-FPM Pool running as user **clp** and group **clp**.

If you are using a custom PHP-FPM Pool, change the **opcache.preload_user**.

3. Restart **PHP-FPM** to apply the changes.

```
sudo systemctl restart php7.4-fpm
```

## Applications

#### Symfony

You may also want to stay up to date with the [Symfony Performance](https://symfony.com/doc/current/performance.html) recommendations.

```
; For Symfony 5.1+
opcache.preload=/home/cloudpanel/htdocs/www.domain.com/var/cache/prod/App_KernelProdContainer.preload.php

; For Symfony 4.4 before 4.4.14
opcache.preload=/home/cloudpanel/htdocs/www.domain.com/var/cache/prod/srcApp_KernelProdContainer.preload.php
```

#### Laravel 7 & 8

Download the `preload.php` for **Laravel 7 & 8** from our [Github Repository](https://github.com/cloudpanel-io/clp-opcache-preloader).

```
cd /home/cloudpanel/htdocs/www.domain.com/
curl -s -o preload.php https://raw.githubusercontent.com/cloudpanel-io/clp-opcache-preloader/master/laravel/preload.php
```

Set the `opcache.preload` path:

```
opcache.preload=/home/cloudpanel/htdocs/www.domain.com/preload.php
```

#### Magento 2

Download the `preload.php` for **Magento 2** from our [Github Repository](https://github.com/cloudpanel-io/clp-opcache-preloader).

```
cd /home/cloudpanel/htdocs/www.domain.com/
curl -s -o preload.php https://raw.githubusercontent.com/cloudpanel-io/clp-opcache-preloader/master/magento/v2/preload.php
```

Set the `opcache.preload` path:

```
opcache.preload=/home/cloudpanel/htdocs/www.domain.com/preload.php
```

#### Other PHP Apps

You can use the [generic preload script](https://github.com/cloudpanel-io/clp-opcache-preloader/blob/master/generic/preload.php) and configure it to your needs.

In the bottom of the script, you can add **paths** to add and **ignore**.

```php
$clpPreloader = new ClpPreloader();
$clpPreloader->setDebug(false);
$clpPreloader->paths(realpath(__DIR__ . '/src'));
$clpPreloader->paths(realpath(__DIR__ . '/vendor'));
$clpPreloader->ignore(realpath(__DIR__ . '/vendor/twig/twig'));
$clpPreloader->preload();
```

## Testing

To test if the **opcache preloading** is working as expected we can check the output of [opcache_get_status()](https://www.php.net/manual/de/function.opcache-get-status.php).

1. Create a file like `t.php` in your document root:

```
nano /home/cloudpanel/htdocs/www.domain.com/public/t.php
```

2. Add the lines of php code:

```php
<?php
echo '<pre>';
print_r(opcache_get_status());
echo '</pre>';
```

3. Restart the **PHP-FPM** service to clear and preload the opcode cache:

```
sudo systemctl restart php7.4-fpm
```

4. Open the file in the browser. The output will look like this:

```
Array
(
    [opcache_enabled] => 1
    [cache_full] => 
    [restart_pending] => 
    [restart_in_progress] => 
    [memory_usage] => Array
        (
            [used_memory] => 28023040
            [free_memory] => 777282624
            [wasted_memory] => 704
            [current_wasted_percentage] => 8.7420145670573E-5
        )

    [interned_strings_usage] => Array
        (
            [buffer_size] => 6291008
            [used_memory] => 4359696
            [free_memory] => 1931312
            [number_of_strings] => 56348
        )

    [opcache_statistics] => Array
        (
            [num_cached_scripts] => 1000
            [num_cached_keys] => 1000
            [max_cached_keys] => 130987
            [hits] => 128
            [start_time] => 1611310634
            [last_restart_time] => 0
            [oom_restarts] => 0
            [hash_restarts] => 0
            [manual_restarts] => 0
            [misses] => 25
            [blacklist_misses] => 0
            [blacklist_miss_ratio] => 0
            [opcache_hit_rate] => 83.660130718954
        )

    [preload_statistics] => Array
        (
            [memory_consumption] => 12108632
            [functions] => Array
                (
                    [0] => Symfony\Component\Routing\{closure}
                    [1] => Symfony\Component\Routing\{closure}
                    [2] => Symfony\Bundle\WebProfilerBundle\Csp\{closure}
                    [3] => Symfony\Component\VarDumper\Dumper\ContextProvider\{closure}
                    [4] => Symfony\Component\VarDumper\Cloner\{closure}
                    [5] => Symfony\Component\Validator\{closure}
                    [6] => Symfony\Component\Translation\{closure}
                    [7] => Symfony\Component\String\{closure}
                    [8] => Symfony\Component\String\{closure}
                    [9] => Symfony\Component\String\{closure}
                    [10] => Symfony\Component\String\{closure}
                    [11] => Symfony\Component\String\{closure}
                    [12] => Symfony\Component\String\{closure}
                    [13] => Symfony\Component\String\{closure}
                    [14] => Symfony\Component\String\{closure}
                    [15] => Symfony\Component\String\{closure}
                    [16] => Symfony\Component\String\{closure}
                    [17] => Symfony\Component\String\{closure}
                    [18] => Symfony\Component\String\Slugger\{closure}
                    [19] => Symfony\Component\HttpKernel\EventListener\{closure}
                    [20] => Symfony\Component\HttpFoundation\Session\Storage\{closure}
                    [21] => Sensio\Bundle\FrameworkExtraBundle\EventListener\{closure}
                    [22] => Sensio\Bundle\FrameworkExtraBundle\Security\{closure}
                    [23] => Sensio\Bundle\FrameworkExtraBundle\Security\{closure}
                    [24] => Sensio\Bundle\FrameworkExtraBundle\EventListener\{closure}
                    [25] => Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\{closure}
                    [26] => Sensio\Bundle\FrameworkExtraBundle\EventListener\{closure}
                    [27] => Symfony\Bundle\SecurityBundle\Security\{closure}
                    ..........
```

As expected, we see all classes and functions are preloaded into the opcache.

