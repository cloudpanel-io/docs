---
id: application-shopware-6
title: Shopware 6
sidebar_label: Shopware 6
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **Shopware 6** with **CloudPanel**.

## Installation

In the following example we will setup **Shopware 6** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **Shopware 6**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Shopware 6 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/shopware-6/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory and to use **PHP 7.3**.
:::

### Installation

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract **Shopware 6**:

```
curl -sLo shopware6.zip https://www.shopware.com/de/Download/redirect/version/sw6/file/install_v6.3.0.2_b5788541058257e6114b7405a41a36946132af9c.zip && unzip shopware6.zip -d shopware6
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R shopware6/* /home/cloudpanel/htdocs/www.domain.com/
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

<img class="border" src={useBaseUrl('img/v1/applications/shopware-6/installation_wizard.png')} /> <br /> <br />

6. Done! You can now login to the **Shopware 6** admin area.

<img class="border" src={useBaseUrl('img/v1/applications/shopware-6/admin_login_form.png')} />