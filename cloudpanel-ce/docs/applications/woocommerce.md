---
id: wocommerce
title: WooCommerce
sidebar_label: WooCommerce
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[WooCommerce](https://woocommerce.com/)** with **CloudPanel**.

## Installation

In the following example we will setup **[WooCommerce](https://woocommerce.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database), and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **WooCommerce Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/new_domain.png')} /> <br /><br />

### Installation

To install **WooCommerce** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **WordPress** version.

```
curl -sL https://wordpress.org/latest.tar.gz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R wordpress/* /home/cloudpanel/htdocs/www.domain.com/
```

4. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

5. Open your domain in the browser and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/installation_wizard.png')} />

6. Open the **WordPress** configuration file **wp-config.php**.

```
nano /home/cloudpanel/htdocs/www.domain.com/wp-config.php
```

Add the following line after the other **constants**:

```
define('FS_METHOD','direct');
```

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/fs_method_directory.png')} /> 

7. Log in into the admin area of **Wordpress** and click on **Plugins** --> **Add New** in the left menu.

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/wordpress_plugins.png')} /> 

8. Search for **WooCommerce** top right and click on the button **Install Now** and then on **Activate**.

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/install_wocommerce_plugin.png')} /> 

9. Go through the **Installation Wizard** to finish the installation.

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/wocommerce_installation_wizard.png')} /> 

9. Done!

<img class="border" src={useBaseUrl('img/v1/applications/woocommerce/setup_store_and_start_selling.png')} /> 


