---
id: mautic-4
title: Mautic 4
sidebar_label: Mautic 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

On this page, we explain step by step how to setup **[Mautic 4](https://www.mautic.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Mautic](https://www.mautic.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Mautic 4 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/mautic-4/new_domain.png')} /> <br /><br />

### Installation

To install **Mautic** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Clone the latest version from the [Mautic Git Repository](https://github.com/mautic/mautic):

```
git clone -b 4.0.0 https://github.com/mautic/mautic.git /home/cloudpanel/htdocs/www.domain.com
```

:::caution Latest Version
You find the latest version on github: [https://github.com/mautic/mautic/releases](https://github.com/mautic/mautic/releases)
:::

4. Install via **composer**:

```
cd /home/cloudpanel/htdocs/www.domain.com/
php7.4 /usr/local/bin/composer install
```

5. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```
6. Open your domain in the browser and go through the installation wizard.

<img class="border" src={useBaseUrl('img/v1/applications/mautic-4/installation_wizard.png')} /> <br /><br />

7. Done! **Mautic 4** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/mautic-4/admin_login.png')} />



