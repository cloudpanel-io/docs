---
id: joomla-4
title: Joomla 4
sidebar_label: Joomla 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Joomla 4](https://www.joomla.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Joomla](https://www.joomla.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Joomla 4 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/joomla-4/new_domain.png')} /> <br /><br />

### Installation

To install **Joomla** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Joomla 4** version.

```
mkdir ~/tmp/joomla-4 && curl -sL https://downloads.joomla.org/cms/joomla4/4-0-3/Joomla_4-0-3-Stable-Full_Package.tar.gz | tar xfz - -C ~/tmp/joomla-4/
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R joomla-4/* /home/cloudpanel/htdocs/www.domain.com/
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

<img class="border" src={useBaseUrl('img/v1/applications/joomla-4/installation_wizard.png')} />

7. Done! **Joomla 4** is now installed. 

<img class="border" src={useBaseUrl('img/v1/applications/joomla-4/joomla_admin.png')} />



