---
id: domains
title: Domains
sidebar_label: Domains
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Basics

### Adding a Domain

A new domain can be added by clicking on button **Add Domain** top right.

<img class="border" src={useBaseUrl('img/v1/domains/adding_a_domain.png')} />

In this form you enter the **Domain Name**, the **Document Root** and you select a **Vhost Template** <br />
and **PHP Version** for your application.

When you click on the button **Add Domain**, the following things will be created by **CloudPanel**:

- The Document Root: **/home/cloudpanel/htdocs/www.domain.com**
- Vhost file for NGINX: **/etc/nginx/sites-enabled/domain.com.conf**
- NGINX Access and Error Log file: 
  - /home/cloudpanel/logs/domain.com/nginx/access.log
  - /home/cloudpanel/logs/domain.com/nginx/error.log
- PHP-FPM Error Log file:
  - /home/cloudpanel/logs/domain.com/php/error.log
- A self-signed TLS certificate

:::caution Redirection
When you enter your **Domain Name** with **www** a redirection from non-www to www will be created automatically and vice versa.
Furthermore **http** requests are redirected to **https**.
:::

### Deleting a Domain

When you delete a domain, only the vhost and the NGINX and PHP log directories will be deleted, <br />
**NOT** the Document Root Directory.

## Settings

In the settings of your domain you can change the **Document Root** for your domain.

<img class="border" src={useBaseUrl('img/v1/domains/settings.png')} />

## Vhost

In the **Vhost Editor** you can make changes on the NGINX vhost.

<img class="border" src={useBaseUrl('img/v1/domains/vhost.png')} />

In our example, we have entered the domain **www.domain.com**. 

In lines 1-10, you see a redirection from http(s)://domain.com to https://www.domain.com.

The next server block is handling all **http** and **https** requests for the domain **www.domain.com**.

In the lines 33-35, you see the redirection rule to redirect all **http** requests to **https**.

## Domain Aliases

Aliases of your domain can be added in the vhost by extending the **server_name** value.

<img class="border" src={useBaseUrl('img/v1/domains/domain_aliases.png')} />

## PHP Settings

## Basic Auth

## Logs

## SSL Certificates