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

In this form you enter your **Domain Name**, the **Document Root**, you select a **Vhost Template (NGINX)** <br />
and the **PHP Version** for your application.

When you click on the button **Add Domain**, the following things will be created by **CloudPanel**:

- The directory (Document Root): **/home/cloudpanel/htdocs/www.domain.com**
- Vhost file for NGINX: **/etc/nginx/sites-enabled/domain.com.conf**
- NGINX Access and Error Log file: 
  - /home/cloudpanel/logs/domain.com/nginx/access.log
  - /home/cloudpanel/logs/domain.com/nginx/error.log
- PHP-FPM Error Log file:
  - /home/cloudpanel/logs/domain.com/php/error.log
- A self-signed TLS certificate

### Deleting a Domain

## Settings

## Vhost

## PHP Settings

## Basic Auth

## Logs

## SSL Certificates