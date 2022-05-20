---
id: cli-commands
title: CloudPanel CLI Commands
sidebar_label: Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import TOCInline from '@theme/TOCInline';

<TOCInline
  // Only show h2 and h4 headings
  toc={toc.filter((node) => node.level === 2 || node.level === 5)}
  minHeadingLevel={2}
  // Show h4 headings in addition to the default h2 and h3 headings
  maxHeadingLevel={5}
/>

The **CloudPanel CLI** is a command-line application that offers commands for:

- **Adding and deleting Sites**
- **Adding, importing, and exporting databases**
- **Creating and installing Let's Encrypt Certificates**
- **Resetting user password**
- **Disabling two-factor authentication**
- **Adding, viewing and deleting vhost templates**

## Root User Commands

<img alt="Root User Commands" src={useBaseUrl('img/cli-commands/root-user-commands.png')} />

### Cloudflare

#### Update IPs

In your site's security settings, you can enable [Allow traffic from Cloudflare only](../../frontend-area/security/#cloudflare).

The command **clpctl cloudflare:update:ips** is being executed every morning at 6 AM via cron job and updates the following file:

```bash
/etc/nginx/cloudflare/ips
```

If you enable **Allow traffic from Cloudflare only**, the file is included in the vhost of your site.

### CloudPanel

In the **Admin Area**, you can enable [Basic Auth](../../admin-area/security/#basic-auth) as additional layer of security in front of **CloudPanel** if you don't have a static IP to close port **8443**.

If you want to enable and disable from the command-line, you can do it with the following commands:

#### Enable Basic Auth

```bash
clpctl cloudpanel:enable:basic-auth --userName=john.doe --password='password123'
```

#### Disable Basic Auth

```bash
clpctl cloudpanel:disable:basic-auth
```

### Database

#### Master Credentials

The **Database Show Master Credentials** command shows **Host**, **User Name**, **Password**, and the **Port**.

```bash
clpctl db:show:master-credentials
```

The output will look like:

<img alt="Database Master Credentials" src={useBaseUrl('img/cli-commands/database-show-master-credentials.png')} />

To connect to the **database**, copy the **Connect Command** and enter the command in the command-line.

#### Add Database

To **add a database** for a site, use the following command.

```bash
clpctl db:add --domainName=www.domain.com --databaseName=my-database --databaseUserName=john --databaseUserPassword='!secretPassword!'
```

#### Database Export

To export a **database**, you use the following command.

:::warning Compression
The **database dump** will be **gzipped** if you add **.sql.gz** at the end of the file name. If you want to export the database uncompressed, use **.sql**.
:::

```bash
clpctl db:export --databaseName=my-database --file=dump.sql.gz
```

#### Database Import

To import a database, go to the **database dump's directory** and use the following command to import.

```bash
clpctl db:import --databaseName=my-database --file=dump.sql.gz
```

### Let's Encrypt

With the **lets-encrypt:install:certificate** command, you can issue and install a **Let's Encrypt Certificate** for a site.

:::caution Let's Encrypt
If you enter the domain name **www.domain.com**, a certificate for the domains **domain.com** and **www.domain.com** will be issued and vice versa.

Make sure to have **valid DNS records** for the domains you want to create a certificate for.
:::

```bash
clpctl lets-encrypt:install:certificate --domainName=www.domain.com
```

The parameter **subjectAlternativeName** is optional and is needed if you want to issue a certificate for multiple domains.

```bash
clpctl lets-encrypt:install:certificate --domainName=www.domain.com --subjectAlternativeName=domain1.com,www.domain1.com
```

### Site

#### Adding a Node.js site

**Node 16 LTS**, **Node 14 LTS**, **Node 12 LTS** are available. The **Node.js Versions** are managed via [Node Version Manager](https://github.com/nvm-sh/nvm).

If you need another version, you can change the version afterward.

To add a **Node.js Site**, use the following command.

```bash
clpctl site:add:nodejs --domainName=www.domain.com --nodejsVersion=16 --appPort=3000 --siteUser=john --siteUserPassword='!secretPassword!'
```

#### Adding a Static HTML Site

To add a **Static HTML Site**, use the following command.

```bash
clpctl site:add:static --domainName=www.domain.com --siteUser=john --siteUserPassword='!secretPassword!'
```

#### Adding a PHP Site

For **Adding a PHP Site**, it's important to use the right **Vhost Template**.

With the command **vhost-templates:list**, you can display all available **vhost templates**:

```bash
clpctl vhost-templates:list
```

The **vhost templates** can be found on [Github](https://github.com/cloudpanel-io/vhost-templates/tree/master/v2). They will be updated every night.

Copy the name of the template and use the following command to create a **PHP Site**:

```bash
clpctl site:add:php --domainName=www.domain.com --phpVersion=8.1 --vhostTemplate='Generic' --siteUser=john --siteUserPassword='!secretPassword!'
```

## Site User Commands