---
id: application-symfony-4
title: Symfony 4
sidebar_label: Symfony 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **Symfony 4** with **CloudPanel**.

## Installation

In the following example we will setup a **Symfony 4** application under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of a **Symfony 4** application, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Symfony 4 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/symfony-4/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **Symfony 4** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Install via **composer**:

```
php7.4 /usr/local/bin/composer create-project symfony/website-skeleton:^4.4 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Done! You can now open your domain in your browser to see **Symfony 4** welcome page.

<img class="border" src={useBaseUrl('img/v1/applications/symfony-4/welcome_to_symfony.png')} /> 