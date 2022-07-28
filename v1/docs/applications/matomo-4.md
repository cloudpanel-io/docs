---
id: matomo-4
title: Matomo 4
sidebar_label: Matomo 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

On this page, we explain step by step how to setup **[Matomo 4](https://matomo.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Matomo](https://matomo.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Matomo 4 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-4/new_domain.png')} /> <br /><br />

### Installation

To install **Matomo** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Matomo 4** version.

```
curl -sL https://builds.matomo.org/matomo-latest.tar.gz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R matomo/* /home/cloudpanel/htdocs/www.domain.com/
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

6. Open your domain in the browser and go through the **installation wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-4/installation_wizard.png')} />

7. Done! **Matomo 4** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/matomo-4/matomo_admin.png')} />