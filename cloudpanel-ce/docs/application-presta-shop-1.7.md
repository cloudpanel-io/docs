---
id: application-presta-shop-1.7
title: PrestaShop 1.7
sidebar_label: PrestaShop 1.7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **PrestaShop 1.7** with **CloudPanel**.

## Installation

In the following example we will setup **PrestaShop 1.7** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **PrestaShop 1.7**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **PrestaShop 1.7 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/new_domain.png')} /> <br /><br />

### Installation

To install **PrestaShop 1.7** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **PrestaShop 1.7** version.

```
curl -sL https://github.com/PrestaShop/PrestaShop/archive/1.7.6.8.tar.gz | tar xfz -
```

:::caution Latest Version
You find the latest version on github: [https://github.com/PrestaShop/PrestaShop/releases](https://github.com/PrestaShop/PrestaShop/releases)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R PrestaShop-1.7.6.8/* /home/cloudpanel/htdocs/www.domain.com/
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

7. Open your domain in the browser and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/installer.png')} />

8. Done! **PrestaShop** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/presta-shop-1.7/frontend.png')} />



