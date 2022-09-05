---
id: php-site
title: Best Practices - PHP Site Migration
sidebar_label: PHP Site
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You will find best practices on this site on how to migrate a **PHP Site** to **CloudPanel**. 
In our example, we will migrate our site **www.domain.com** to **CloudPanel**. 
Before going live, we need to ensure that our site is running as well as expected before doing the live switch.

## Create a PHP Site

:::warning Live Domain
Create your site with the live domain so that the redirection from **non-www** to **www** and vice versa is correctly generated.
:::

1. [Create a PHP Site](../../../../frontend-area/add-site/#create-a-php-site) via **CloudPanel** or via [CLI](../../../../cloudpanel-cli/root-user-commands/#adding-a-php-site) with your domain **www.domain.com**.

In the [Vhost](../../../../frontend-area/vhost) of your site, you see that the subdomain **www1.domain.com** has been added by **CloudPanel**, which will be used as our **pre-live** domain for testing purposes.

<img alt="www1 subdomain" class="border" src={useBaseUrl('img/guides/best-practices/migration/php-site/www1-subdomain.png')} />

2. Create a DNS Record (A) for the subdomain **www1.domain.com**.

3. Enable [Basic Authentication](../../../../frontend-area/security/#basic-authentication) to prevent being indexed by search engines.

## Site Migration

1. Copy your sites files from the **old server** to **CloudPanel**.

2. Export the database by using [**mysqldump**](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html):

```bash
mysqldump -h127.0.0.1 -u$userName -p --opt --single-transaction --quick $databaseName > dump.sql
```

3. Upload the database dump **dump.sql** to **CloudPanel**.

4. Login via **SSH** with the site user and import it via [CloudPanel Cli](../../../../cloudpanel-cli/site-user-commands/#database-import).

```bash
clpctl db:import --databaseName=my-database --file=dump.sql
```

5. Configure your site to run under the subdomain **https://www1.domain.com**.

## Testing

Take some time for testing to ensure that your site is running as expected on **CloudPanel**.

## Live Switch

1. Put a maintenance site on the **old server** to prevent visitors from accessing the site.

2. Export files like a **media** directory, which may have been changed in the meantime.

3. Export the database by using [**mysqldump**](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html):

```bash
mysqldump -h127.0.0.1 -u$userName -p --opt --single-transaction --quick $databaseName > dump.sql
```

4. Upload the database dump **dump.sql** to **CloudPanel**.

5. Login via **SSH** with the site user and import it via [CloudPanel Cli](../../../../cloudpanel-cli/site-user-commands/#database-import).

6. Add a **host file entry** for the final testing before switching the **DNS Records**.

<Tabs
defaultValue="windows"
values={[
{ label: 'Windows', value: 'windows', },
{ label: 'Linux/Mac', value: 'linux-mac', },
]}>
<TabItem value="windows">

1. Open your text editor in Administrator mode.
2. In the text editor, open **C:\Windows\System32\drivers\etc\hosts**.
3. Add the IP Address and domains.

```bash
8.8.8.8 www.domain.com domain.com
```

4. Save the changes.

</TabItem>
<TabItem value="linux-mac">

1. Open a terminal
2. Open **nano** with **sudo** rights.

```bash
sudo nano /etc/hosts
```

3. Add the IP Address and domains.

```bash
8.8.8.8 www.domain.com domain.com
```

4. Save the changes.

</TabItem>
</Tabs>

7. Open your browser and do a final testing of **https://www.domain.com**.

8. Change the DNS records for **domain.com** and **www.domain.com** to the server ip.

9. Disable [Basic Authentication](../../../../frontend-area/security/#basic-authentication).

10. Remove the **host file entry** from **step 6**.