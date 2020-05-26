---
id: application-oro-commerce-4.1
title: OroCommerce 4.1
sidebar_label: OroCommerce 4.1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **OroCommerce 4.1** with **CloudPanel**.

## Installation

In the following example we will setup **OroCommerce 4.1** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **OroCommerce 4.1**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **OroCommerce 4.1 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce4.1/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **OroCommerce 4.1** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Install via **composer**:

```
php7.4 /usr/local/bin/composer create-project oro/commerce-crm-application:4.1.* www.domain.com --repository=https://satis.oroinc.com
```

4. Enter the **database credentials** and other **parameters**:

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce4.1/application_parameters.png')} /> <br /><br />

5. Run **oro:install** command:

```
php7.4 /home/cloudpanel/htdocs/www.domain.com/bin/console oro:install --env=prod --timeout=2000
```

Enter the **Application URL**, **Organization name** and the admin **Username** and **Password**:

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce4.1/enter_application_data.png')} />

6. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

7. Done! You can now open your domain in your browser and start working with **OroCommerce**.

The admin area can be reached at the following path: https://www.domain.com/admin/

<img class="border" src={useBaseUrl('img/v1/applications/oro-commerce4.1/sample_data_homepage.png')} />