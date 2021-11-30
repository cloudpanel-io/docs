---
id: owncloud-10
title: ownCloud 10
sidebar_label: ownCloud 10
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[ownCloud 10](https://owncloud.com/)** with **CloudPanel**.

## Installation

In the following example we will setup **[ownCloud](https://owncloud.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **ownCloud 10 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10/new_domain.png?v=1')} /> <br /><br />

### Installation

To install **ownCloud** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **ownCloud 10** version.

```
curl -sL https://download.owncloud.org/community/owncloud-complete-20210721.tar.bz2 | tar xfj -
```

:::caution Latest Version
You find the latest version on ownCloud website: [https://owncloud.com/older-versions/#server](https://owncloud.com/older-versions/#server)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R owncloud/* /home/cloudpanel/htdocs/www.domain.com/
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

6. Open your domain in the browser and enter your **admin account** and **database credentials**.

Click on the button **Finish setup** to install **ownCloud 10**.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10/setup.png')} />

7. Done! **ownCloud** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10/owncloud.png')} />



