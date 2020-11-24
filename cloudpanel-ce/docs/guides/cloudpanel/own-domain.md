---
id: own-domain
title: CloudPanel under its own domain
sidebar_label: Own Domain
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, you will find a guide on how to run **CloudPanel** under its own domain with a **Let's Encrypt certificate**.

1. [Add the Domain](../../frontend-area/domains#adding-a-domain) **cp.domain.com** and select the **Generic Vhost Template**.

<img class="border" src={useBaseUrl('img/v1/guides/cloudpanel/own-domain/new_domain.png')} />

2. Go to the [Vhost Editor](../../frontend-area/domains#vhost) of the **domain** and replace the template with the following one:

```
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  {{ssl_certificate_key}}
  {{ssl_certificate}}
  server_name cp.domain.com;
  {{root}}

  {{nginx_access_log}}
  {{nginx_error_log}}

  if ($bad_bot = 1) {
    return 403;
  }

  if ($scheme != "https") {
    rewrite ^ https://$host$uri permanent;
  }

  #if ($http_x_forwarded_proto != https) {
  #  return 301 https://$host$request_uri;
  #}
  
  #if ($http_x_forwarded_proto ~ https) {
  #  set $fastcgi_https on;
  #}

  location ~ /.well-known {
    auth_basic off;
    allow all;
  }

  location / {
    proxy_set_header Host $http_host; 
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Host $http_host;
    proxy_pass https://127.0.0.1:8443/;
    proxy_max_temp_file_size 0;
    proxy_connect_timeout 7200;
    proxy_send_timeout 7200;
    proxy_read_timeout 7200;
    proxy_buffer_size 128k;
    proxy_buffers 4 256k;
    proxy_busy_buffers_size 256k;
    proxy_temp_file_write_size 256k;
 }
}
```

This **Vhost Template** is using a reverse proxy to forward all requests to the **CloudPanel** port **8443**.

:::caution
Make sure that your **domain** is set as **server_name**.
:::

If you are using **Cloudflare**, comment the following lines in the **Vhost Template**:

```
#if ($scheme != "https") {
#  rewrite ^ https://$host$uri permanent;
#}
```

and uncomment the following ones:

```
if ($http_x_forwarded_proto != https) {
  return 301 https://$host$request_uri;
}
  
if ($http_x_forwarded_proto ~ https) {
  set $fastcgi_https on;
}
```

3. Issue a [Let's Encrypt Certificate](../../frontend-area/domains#lets-encrypt) for your domain.

4. Done. **CloudPanel** is now accessible via `https://cp.domain.com`