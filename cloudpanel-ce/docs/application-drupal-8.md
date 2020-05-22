---
id: application-drupal-8
title: Drupal 8
sidebar_label: Drupal 8
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **Drupal 8** with **CloudPanel**.

## Installation

In the following example we will setup **Drupal 8** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation of **Drupal 8**, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database) <br />
and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Drupal 8 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/drupal8/new_domain.png')} /> <br /><br />

### Installation

To install **Drupal 8** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Drupal 8** version.

```
curl -sL https://ftp.drupal.org/files/projects/drupal-8.8.6.tar.gz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R drupal-8.8.6/* /home/cloudpanel/htdocs/www.domain.com/
```

4. Install dependencies with **composer**:

```
cd /home/cloudpanel/htdocs/www.domain.com/
php7.4 /usr/local/bin/composer install --no-dev
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

7. Copy **Drupal** settings file.

```
cd /home/cloudpanel/htdocs/www.domain.com/
cp sites/default/default.settings.php sites/default/settings.php
```

8. Open your domain in the browser and go through the **Drupal Installer**.

<img class="border" src={useBaseUrl('img/v1/applications/drupal8/installer.png')} /> 

9. Done! **Drupal 8** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/drupal8/welcome.png')} /> 