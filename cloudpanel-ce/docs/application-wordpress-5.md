---
id: application-wordpress-5
title: WordPress 5
sidebar_label: WordPress 5
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **WordPress 5** with **CloudPanel**.

## Installation

In the following example we will setup **WordPress 5** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **WordPress 5**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **WordPress 5 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/wordpress5/new_domain.png')} /> <br /><br />

### Installation

To install **WordPress 5** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **WordPress 5** version.

```
curl -sL https://wordpress.org/wordpress-5.4.1.tar.gz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R wordpress/* /home/cloudpanel/htdocs/www.domain.com/
```

4. Reset permissions.

```
clpctl system:permissions:reset www.domain.com 775
```

5. Clean up the **tmp** directory.

```
rm -rf ~/tmp/*
```

5. Open your domain in the browser and go through the **Installation Wizard**.

<img class="border" src={useBaseUrl('img/v1/applications/wordpress5/installation_wizard.png')} /> <br /> <br />

6. Done!

