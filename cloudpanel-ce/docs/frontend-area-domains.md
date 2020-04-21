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

In the settings of your domain, you can change the **Document Root** for your domain.

<img class="border" src={useBaseUrl('img/v1/domains/settings.png')} />

## Vhost

In the **Vhost Editor** you can make changes on the NGINX vhost.

<img class="border" src={useBaseUrl('img/v1/domains/vhost.png')} /> <br /> <br />

In our example, we have entered the domain **www.domain.com**. 

In lines 1-10, you see a redirection from http(s)://domain.com to https://www.domain.com.

The next server block is handling all **http** and **https** requests for the domain **www.domain.com**.

In the lines 33-35, you see the redirection rule to redirect all **http** requests to **https**.

## Domain Aliases

Aliases of your domain can be added in the vhost by extending the **server_name** value.

<img class="border" src={useBaseUrl('img/v1/domains/domain_aliases.png')} /> <br /><br />

:::caution SSL/TLS Certificate
When you issue a [SSL/TLS certificate](#ssl-certificates) make sure to include the domain aliases as well.
:::

## PHP Settings

In the **PHP Settings** of your domain, you can change the **PHP Version** and make other settings like:

- memory_limit
- max_execution_time
- max_input_time
- post_max_size
- upload_max_filesize

The most common settings can be modified to your needs but if you need to change other parameter values you can overwrite
them in the **Additional configuration directives**.

<img class="border" src={useBaseUrl('img/v1/domains/php_settings.png')} /> <br /><br />

:::important Tips
Keep the **memory_limit** and **max_execution** values as low as possible to keep the server stable. <br />
In the [PHP Error Log](#logs), you find all error messages of processes that run out of memory or exceeded
the **max_execution_time**.
:::

## Basic Auth

In the **Basic Auth** settings of your domain, you can enable and disable **Basic Auth**. <br />
Users can be added, and IPs to bypass **Basic Auth** can be whitelisted. <br />

A **Basic Auth** is useful to prevent traffic to your site when you don't want to have it public, e.g. during the development
of a project or for test/staging environments.

<img class="border" src={useBaseUrl('img/v1/domains/basic_auth.png')} />

## Logs

In the **Log Viewer** you can check the **NGINX** Access and Error Logs and the **PHP** Error Log.

<img class="border" src={useBaseUrl('img/v1/domains/nginx_access_log.png')} /> <br /><br />

Developers who prefer the command line can find the logs in the following directories:

**NGINX** 
  - Access Log: **/home/cloudpanel/logs/domain.com/nginx/access.log**
  - Error Logs: **/home/cloudpanel/logs/domain.com/nginx/error.log**

**PHP**
  - Error Log: **/home/cloudpanel/logs/domain.com/php/error.log**

To see the last 100 lines of your **PHP Error Log**, you can use the **tail** command with the **follow** option.

```bash
tail -f /home/cloudpanel/logs/domain.com/php/error.log -n100
```

## SSL Certificates

When you add a domain, a self-signed certificate will be automatically created.

<img class="border" src={useBaseUrl('img/v1/domains/ssl_certificates_overview.png')} /> <br /> <br />

On this page, you can import an existing SSL/TLS certificate or issue a free auto-renewing **Let's Encrypt** certificate.

### Let's Encrypt

To issue a free **Let's Encrypt** certificate click on button **Actions** and select **New Let's Encrypt Certificate**.

<img class="border" src={useBaseUrl('img/v1/domains/new_lets_encrypt_certificate.png')} /> <br /> <br />

The **Domain Names** are pre filled. Add extra **Domain Names** if you have added Domain Aliases.

To issue the certificate, click on the button **Create and Install** and wait some seconds until it's installed.

### Import SSL Certificate

The majority of the websites are fine with the free **Let's Encrypt Certificates** but in some cases e.g. <br />
for an [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) you need to buy and import
the certificate.

To import a certificate you need to click on button **Actions** and select **Import SSL Certificate**.

Enter the **Certificate Private Key**, **Certificate** and the **Certificate Chain** and click on the button <br />
**Import and Install**.

<img class="border" src={useBaseUrl('img/v1/domains/ssl_certificate_import.png')} />