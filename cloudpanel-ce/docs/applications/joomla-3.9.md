---
id: joomla-3.9
title: Joomla 3.9
sidebar_label: Joomla 3.9
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Joomla 3.9](https://www.joomla.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Joomla](https://www.joomla.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Joomla 3.9 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/joomla-3.9/new_domain.png')} /> <br /><br />

### Installation

To install **Joomla** do the following steps:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Joomla 3.9** version.

```
mkdir ~/tmp/joomla-3.9 && curl -sL https://downloads.joomla.org/cms/joomla3/3-9-24/Joomla_3-9-24-Stable-Full_Package.tar.gz | tar xfz - -C ~/tmp/joomla-3.9/
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R joomla-3.9/* /home/cloudpanel/htdocs/www.domain.com/
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

<img class="border" src={useBaseUrl('img/v1/applications/joomla-3.9/installation_wizard.png')} />

7. Done! **Joomla 3.9** is now installed. 

<img class="border" src={useBaseUrl('img/v1/applications/joomla-3.9/joomla_admin.png')} />



