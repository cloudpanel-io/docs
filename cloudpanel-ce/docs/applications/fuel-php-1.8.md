---
id: fuel-php-1.8
title: FuelPHP 1.8
sidebar_label: FuelPHP 1.8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[FuelPHP 1.8](https://fuelphp.com/)** with **CloudPanel**.

## Installation

In the following example we will setup **[FuelPHP](https://fuelphp.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database), and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **FuelPHP 1.8 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/fuel-php-1.8/new_domain.png')} /> <br /><br />

### Installation

To install **FuelPHP** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **FuelPHP 1.8** version.

```
curl -sL https://github.com/fuel/fuel/archive/1.8.2.tar.gz | tar xfz -
```

:::caution Latest Version
You find the latest version on github: [https://github.com/fuel/fuel/releases](https://github.com/fuel/fuel/releases)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R fuel-1.8.2/* /home/cloudpanel/htdocs/www.domain.com/
```

4. Install via **composer**:

```
cd /home/cloudpanel/htdocs/www.domain.com/
php7.2 /usr/local/bin/composer install
```

5. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

6. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

7. Done! **FuelPHP** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/fuel-php-1.8/welcome.png')} />



