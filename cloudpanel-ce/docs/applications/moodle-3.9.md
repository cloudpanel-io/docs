---
id: moodle-3.9
title: Moodle 3.9
sidebar_label: Moodle 3.9
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Moodle 3.9](https://moodle.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Moodle](https://moodle.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](users#adding-a-user), a [Database](databases#adding-a-database), and a [Domain](domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Moodle 3.9 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/moodle-3/new_domain.png')} /> <br /><br />

### Installation

To install **Moodle** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go to the users **tmp** directory:

```
cd ~/tmp
```

2. Download and extract the latest **Moodle 3.9** version.

```
curl -sL https://download.moodle.org/download.php/direct/stable39/moodle-latest-39.tgz | tar xfz -
```

3. Move files to the **htdocs** directory of the domain:

```
cp -R moodle/* /home/cloudpanel/htdocs/www.domain.com/
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

<img class="border" src={useBaseUrl('img/v1/applications/moodle-3/installation_wizard.png')} />

7. Done! **Moodle 3.9** is now installed.

<img class="border" src={useBaseUrl('img/v1/applications/moodle-3/moodle_dashboard.png')} />