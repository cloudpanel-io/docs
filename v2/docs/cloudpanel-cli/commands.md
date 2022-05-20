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
- **Adding, importing, and exporting Databases**
- **Creating and installing Let's Encrypt Certificates**
- **Resetting user password**
- **Disabling Two-Factor Authentication**
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

## Site User Commands