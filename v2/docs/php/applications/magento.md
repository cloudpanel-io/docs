---
id: magento
title: Magento
sidebar_label: Magento
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install [Magento 2](https://business.adobe.com/products/magento/open-source.html) on **CloudPanel**.

## Prerequirements

**Magento 2** requires to have [Elasticsearch 7.9](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/deb.html) installed.

Follow the guide [https://www.elastic.co/guide/en/elasticsearch/reference/7.9/deb.html](https://www.elastic.co/guide/en/elasticsearch/reference/7.9/deb.html) to learn how to install **Elasticsearch 7.9**.

## Creating a Magento Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a PHP Site**.

<img class="border" alt="Create a PHP Site" src={useBaseUrl('img/php/applications/create-php-site.png')} />

2. Select the Application **Magento 2**, enter **Domain Name**, **Site User**, **Site User Password**, and click on **Create**.

<img class="border" alt="Create a Magento Site" src={useBaseUrl('img/php/applications/magento/create-site-form.png')} />

### Via CloudPanel CLI

If you like the command line, you can create a **Magento Site** with the following command as **root user**.

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='Magento 2' --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Magento 2 Project

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Go to **htdocs** and delete the directory which **CloudPanel** has created:

```bash
cd htdocs && rm -rf www.domain.com
```

3. Create a **Magento Project** via **Composer**.

:::warning Magento Authentication Keys Required
Get [Magento Authentication Keys](https://devdocs.magento.com/guides/v2.3/install-gde/prereq/connect-auth.html) before you create the project via **composer**.
:::

```bash
php8.1 /usr/local/bin/composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition www.domain.com
```

4. [Create a Database](../../../frontend-area/databases/#adding-a-database) and copy the **Database Name**, **Database User Name**, and **Database User Password**.

5. Go to the **installation directory** and execute the **setup::install** script from **Magento**:

```bash
cd ~/htdocs/www.domain.com/
```

:::caution Edit Parameters
Edit the parameters like **key**, **db-host**, **db-name** to your needs.
:::

```bash
php8.1 bin/magento setup:install --backend-frontname='admin' --key='18Av6ITivOZG3gwY1DhMDWtlLfx1spLP' --session-save='files' --db-host='127.0.0.1' --db-name='magento2' --db-user='magento2' --db-password='magento2' --base-url='https://www.domain.com/' --base-url-secure='https://www.domain.com/' --admin-user='admin' --admin-password='!admin123!' --admin-email='john@doe.com' --admin-firstname='John' --admin-lastname='Doe'
```

6. Done. **Magento 2** has been installed.

<img class="border" alt="Magento 2 has been installed" src={useBaseUrl('img/php/applications/magento/magento-installed.png')} />