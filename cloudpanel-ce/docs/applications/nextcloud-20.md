---
id: nextcloud-20
title: Nextcloud 20
sidebar_label: Nextcloud 20
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Nextcloud 20](https://nextcloud.com/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Nextcloud](https://nextcloud.com/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Nextcloud 20 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/nextcloud-20/new_domain.png')} /> <br /><br />

### Installation

To install **Nextcloud** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Nextcloud 20** version.

```
curl -sLo nextcloud-20.zip https://download.nextcloud.com/server/releases/nextcloud-20.0.7.zip && unzip nextcloud-20.zip -d nextcloud-20
```

:::caution Latest Version
You find the latest version on github: [https://github.com/nextcloud/server/releases](https://github.com/nextcloud/server/releases)
:::

3. Move files to the **htdocs** directory of the domain:

```
cp -R nextcloud-20/nextcloud/* /home/cloudpanel/htdocs/www.domain.com/
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

Click on the button **Finish setup** to install **Nextcloud 20**.

<img class="border" src={useBaseUrl('img/v1/applications/nextcloud-20/setup.png')} />

7. Done! **Nextcloud 20** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/nextcloud-20/nextcloud.png')} />



