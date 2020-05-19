---
id: application-magento-1
title: Magento 1
sidebar_label: Magento 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **Magento 1** with **CloudPanel**.

## Installation

In the following example we will setup a **Magento 1** shop under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of a **Magento 1** shop, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Magento 1 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/magento1/new_domain.png')} />

### Installation

To install **Magento 1** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Magento 1** version.

```
curl -sL https://github.com/cloudpanel-io/applications/raw/master/magento1/magento-1.9.4.5.tar.gz | tar xfz -
```

:::caution Download Magento 1 Version
The latest version of **Magento 1** can also be found and downloaded on the following site: <br /> [https://magento.com/tech-resources/download](https://magento.com/tech-resources/download)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R magento/* /home/cloudpanel/htdocs/www.domain.com/
```

4. Reset file permissions to 775.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

5. Open [https://www.domain.com/](https://www.domain.com/) and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/magento1/installation_wizard.png')} />

