---
id: application-owncloud-10.4
title: ownCloud 10.4
sidebar_label: ownCloud 10.4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **ownCloud 10.4** with **CloudPanel**.

## Installation

In the following example we will setup **ownCloud 10.4** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **ownCloud 10.4**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **ownCloud 10.4 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10.4/new_domain.png')} /> <br /><br />

### Installation

To install **ownCloud 10.4** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **ownCloud 10.4** version.

```
curl -sL https://download.owncloud.org/community/owncloud-10.4.1.tar.bz2 | tar xfj -
```

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

Click on the button **Finish setup** to install **ownCloud 10.4**.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10.4/setup.png')} />

7. Done! **ownCloud 10.4** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/owncloud-10.4/owncloud.png')} />



