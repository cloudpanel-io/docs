---
id: multisite
title: WordPress - Multisite
sidebar_label: Multisite
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, you will find a guide on creating and configuring a **WordPress Multisite** via **Subdirectories** with **CloudPanel**.

1. [Create a WordPress Site](../../../frontend-area/add-site/#create-a-wordpress-site) and set **Multisite** to **Yes**.

<img alt="Create a WordPress Multisite" class="border" src={useBaseUrl('img/frontend-area/add-site/create-a-wordpress-multisite.png')} />

2. Login into your **WordPress Admin** and click on **Add New**.

<img alt="Create New WordPress Multisite" class="border" src={useBaseUrl('img/guides/wordpress/multisite/create-new-site.png')} />

3. In our example, we create a german site with **de** in the url.

<img alt="German Site" class="border" src={useBaseUrl('img/guides/wordpress/multisite/create-de-site.png')} />

4. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

5. Go to the directory where **WordPress** has been installed:

```bash
cd htdocs/www.domain.com/
```

6. Execute the following command to create a symlink for **de** that points to the same directory.

:::caution Redirection
Create a symlink for each site you have created in WordPress.
:::

```bash
ln -s . de
```

7. Done. Our **german** site is now working.