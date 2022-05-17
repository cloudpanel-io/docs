---
id: tls
title: SSL/TLS Certificates
sidebar_label: SSL/TLS
---

import useBaseUrl from '@docusaurus/useBaseUrl';

By default, a **self-signed** certificate is generated.

<img alt="Self-Signed Certificate" class="border" src={useBaseUrl('img/v2/frontend-area/tls/self-signed-certificate.png')} />

## Let's Encrypt Certificate

To issue a free **Let's Encrypt** certificate, click on the button **Actions** and select **New Let's Encrypt Certificate**.

Add the **Domain Names** and click on **Create and Install** to issue a **Let's Encrypt Certificate**.

:::warning DNS Records
Make sure to have a **valid DNS** record for the domains you want to create a certificate for.
:::

<img alt="New Lets Encrypt Certificate" class="border" src={useBaseUrl('img/v2/frontend-area/tls/new-lets-encrypt-certificate.png')} />

## Cloudflare Certificate

You don't need to issue a **Let's Encrypt Certificate** if you use [Cloudflare](https://www.cloudflare.com).

To use the free certificates from **Cloudflare**, do the following:

1. Enable the **Proxy** for your **DNS Records**.

<img alt="Cloudflare Proxy" class="border" src={useBaseUrl('img/v2/frontend-area/tls/cloudflare-proxy.png')} />

2. Click on **SSL/TLS** in the left menu and choose the **Full** mode.

<img alt="Cloudflare Proxy" class="border" src={useBaseUrl('img/v2/frontend-area/tls/cloudflare-tls-full-mode.png')} />

## Import Certificate

The majority of the websites are OK with the free **Let's Encrypt Certificates**, but in some cases e.g. <br />
for an [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate), you need to buy and import
the certificate.

1. To import a certificate, click on the button **Actions** and select **Import Certificate**.

<img alt="Import Certificate" class="border" src={useBaseUrl('img/v2/frontend-area/tls/select-import-certificate.png')} />

2. Enter the **Private Key**, **Certificate**, and **Certificate Chain** and click on **Import and Install**.

<img alt="Import Certificate" class="border" src={useBaseUrl('img/v2/frontend-area/tls/import-certificate.png')} />
   
