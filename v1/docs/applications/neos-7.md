---
id: neos-7
title: Neos 7
sidebar_label: Neos 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

On this page, we explain step by step how to setup **[Neos 7](https://www.neos.io/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Neos](https://www.neos.io/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Neos 7 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/neos-7/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **Web** directory.
:::

### Installation

To install **Neos** do the following steps:

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
php7.4 /usr/local/bin/composer create-project neos/neos-base-distribution:~7 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Open your domain in the browser and start the setup process: [https://www.domain.com/setup/](https://www.domain.com/setup/)

<img class="border" src={useBaseUrl('img/v1/applications/neos-7/setup_password.png')} />

Enter the **Setup Password** to start the installation process. 

The **Setup Password** can be displayed with the following command:

```
cat /home/cloudpanel/htdocs/www.domain.com/Data/SetupPassword.txt
```

6. Go through all setup steps to finish the installation.

<img class="border" src={useBaseUrl('img/v1/applications/neos-7/setup_steps.png')} />

7. Done! **Neos** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/neos-7/welcome.jpg')} />



