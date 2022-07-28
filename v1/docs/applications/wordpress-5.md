---
id: wordpress-5
title: WordPress 5
sidebar_label: WordPress 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

On this page, we explain step by step how to setup **[WordPress 5](https://wordpress.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[WordPress](https://wordpress.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **WordPress 5 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/wordpress-5/new_domain.png')} /> <br /><br />

### Installation

To install **WordPress** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **WordPress 5** version.

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

6. Open your domain in the browser and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/wordpress-5/installation_wizard.png')} /> <br /> <br />

7. Open the **WordPress** configuration file **wp-config.php**.

```
nano /home/cloudpanel/htdocs/www.domain.com/wp-config.php
```

Add the following line after the other **constants** to download all plugins and themes to the disk.

```
define('FS_METHOD','direct');
```

<img class="border" src={useBaseUrl('img/v1/applications/wordpress-5/fs_method_directory.png')} /> 

8. Done!

