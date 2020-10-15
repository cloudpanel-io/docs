---
id: magento-2
title: Magento 2
sidebar_label: Magento 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Magento 2](https://magento.com/)** with **CloudPanel**.

## Installation

In the following example we will setup a **[Magento](https://magento.com/)** shop under the domain ***www.domain.com***.

## Elasticsearch

The latest **Magento 2** version requires **Elasticsearch 7.9**.

A step by step guide how to install **Elasticsearch 7.9** on **Debian 10** can be found on the following site: 

[https://www.elastic.co/guide/en/elasticsearch/reference/7.9/deb.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/deb.html)

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Magento 2 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/magento-2/new_domain.png?v=1')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **pub** directory.
:::

### Installation

To install **Magento** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Run the **composer** command to install the latest **Magento 2 Version**.

Before you run the **composer** command, make sure to have [Magento Authentication Keys](https://devdocs.magento.com/guides/v2.3/install-gde/prereq/connect-auth.html) created.

```
php7.4 /usr/local/bin/composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition www.domain.com
```

Enter the **Username** and **Password** (Authentication Keys) and press enter.

<img class="border" src={useBaseUrl('img/v1/applications/magento-2/authentication_keys.png')} /> <br /><br />

4. Go to the installation directory and execute the **setup::install** script from **Magento**:

```
cd /home/cloudpanel/htdocs/www.domain.com/
```

:::caution Edit Parameters
Edit the parameters like **key**, **db-host**, **db-name** and so on to your needs.
:::

```
php7.4 bin/magento setup:install --backend-frontname='admin' --key='18Av6ITivOZG3gwY1DhMDWtlLfx1spLP' --session-save='files' --db-host='127.0.0.1' --db-name='magento2' --db-user='magento2' --db-password='magento2' --base-url='https://www.domain.com/' --base-url-secure='https://www.domain.com/' --admin-user='admin' --admin-password='!admin123!' --admin-email='john@doe.com' --admin-firstname='John' --admin-lastname='Doe'
```

5. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

6. Done!

You can now access the frontend and backend.

In our case the backend url would be:

[https://www.domain.com/admin/](https://www.domain.com/admin/)

**Username**: admin <br />
**Password:** !admin123!

:::warning Admin User Password
For security reasons, make sure to **NOT** use the default password **!admin123!**.
:::

