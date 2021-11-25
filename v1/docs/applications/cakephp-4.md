---
id: cakephp-4
title: CakePHP 4
sidebar_label: CakePHP 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[CakePHP](https://cakephp.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[CakePHP](https://cakephp.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **CakePHP 4 Vhost Template**, and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/cakephp-4/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **webroot** directory.
:::

### Installation

To install **CakePHP** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Install via **composer**:

```
php8.0 /usr/local/bin/composer create-project --prefer-dist cakephp/app:~4.2 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Done! You can now open your domain in your browser to see the **Welcome to CakePHP 4** page.

<img class="border" src={useBaseUrl('img/v1/applications/cakephp-4/welcome.png')} />

