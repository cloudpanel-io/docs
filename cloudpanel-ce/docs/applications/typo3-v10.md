---
id: typo3-v10
title: TYPO3 v10
sidebar_label: TYPO3 v10
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[TYPO3 v10](https://typo3.org/)** with **CloudPanel**.

## Installation

In the following example we will setup **[TYPO3](https://typo3.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user), a [Database](../frontend-area/databases#adding-a-database), and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](domains#adding-a-domain), make sure to select the **TYPO3 10 Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/typo3-v10/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the **public** directory.
:::

### Installation

To install **TYPO3** do the following steps:

1. [Login via SSH](users#ssh-login) to the server e.g. with **john-ssh** and go **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

2. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/www.domain.com
```

3. Install via **composer**:

```
php7.4 /usr/local/bin/composer create-project typo3/cms-base-distribution:~10 www.domain.com
```

4. Reset permissions.

```
cd /home/cloudpanel/htdocs/
clpctl system:permissions:reset www.domain.com 775
```

5. Open your domain in your browser and go through the **installation wizard**:

<img class="border" src={useBaseUrl('img/v1/applications/typo3-v10/installation_wizard.png')} /> 

6. Create the empty file **FIRST_INSTALL** and reload the browser:

```
touch /home/cloudpanel/htdocs/www.domain.com/public/FIRST_INSTALL
```

7. Enter the **database credentials** and go through all further steps:

<img class="border" src={useBaseUrl('img/v1/applications/typo3-v10/installation_wizard_db.png')} /> 

7. Done! Login into the **TYPO3** backend to get started:

<img class="border" src={useBaseUrl('img/v1/applications/typo3-v10/backend_login_form.png')} /> 





