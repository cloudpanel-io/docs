---
id: matomo-3
title: Matomo 3
sidebar_label: Matomo 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Matomo 3](https://matomo.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Matomo](https://matomo.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Matomo 3 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-3/new_domain.png')} /> <br /><br />

### Installation

To install **Matomo** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Matomo 3** version.

```
curl -sL https://github.com/matomo-org/matomo/archive/3.14.1.tar.gz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R matomo-3.14.1/* /home/cloudpanel/htdocs/www.domain.com/
```

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

6. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

7. Open your domain in the browser and go through the **installation wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-3/installation_wizard.png')} />

8. Done! **Matomo 3** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-3/matomo_admin.png')} />