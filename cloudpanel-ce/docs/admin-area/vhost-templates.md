---
id: vhost-templates
title: Vhost Templates
sidebar_label: Vhost Templates
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Application

The right **Vhost Template** for your **Application** is essential. For managing the **CloudPanel Vhost Templates** we 
are using [GitHub](https://vhost-templates.cloudpanel.io/v1/). **Vhost Templates** for all popular **PHP Applications** can be found [there](https://vhost-templates.cloudpanel.io/v1/).

### Adding an Application

The **Vhost Templates** are organized within **Applications**. The **Vhost Template** for newer application versions may be different than for an older one.

To add a new **Application** do the following steps:

1) Login into the **CloudPanel** as **User** with admin rights.

2) Go to the **Admin Area** by clicking on **Admin Area** top right.

3) In the left menu, click on **Vhost Templates** and click on the button **Add Application**.

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/applications.png')} /> <br /> <br />

Enter the **Application Name** and click on the button **Add New Application** to save.

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/new_application.png')} />

### Deleting an Application

On the **Vhost Templates** overview site, you can delete an **Application** by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/applications.png')} />

## Vhost Template

### Adding a Vhost Template

To add a new **Vhost Template** to an **Application**, click on the **Application** and then on the button **Add Vhost Template**.

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/add_vhost_template_1.png')} /> <br /> <br />

Enter the **Template Name** and content of the **Vhost Template** and click on **Add Vhost Template**.

The following **placeholders** are required:

- {{ssl_certificate_key}}
- {{ssl_certificate}}
- {{root}}
- {{nginx_access_log}}
- {{nginx_error_log}}
- {{basic_auth}}
- {{php_fpm_listener}}
- {{php_settings}}

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/add_vhost_template_2.png')} /> <br /><br />

You can use the **Vhost Template** below and modify it to your needs.

```bash
server {
  listen 80;
  listen [::]:80;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;
  {{ssl_certificate_key}}
  {{ssl_certificate}}
  {{server_name}}
  {{root}}

  {{nginx_access_log}}
  {{nginx_error_log}}

  if ($bad_bot = 1) {
    return 403;
  }

  if ($scheme != "https") {
    rewrite ^ https://$host$uri permanent;
  }

  location ~ /.well-known {
    auth_basic off;
    allow all;
  }

  {{basic_auth}}

  try_files $uri $uri/ /index.php?$args;
  index index.php index.html;

  location ~ \.php$ {
    include fastcgi_params;
    fastcgi_intercept_errors on;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    try_files $uri =404;
    fastcgi_read_timeout 3600;
    fastcgi_send_timeout 3600;
    fastcgi_param HTTPS $fastcgi_https;
    {{php_fpm_listener}}
    {{php_settings}}
  }

  location ~* ^.+\.(css|js|jpg|jpeg|gif|png|ico|gz|svg|svgz|ttf|otf|woff|eot|mp4|ogg|ogv|webm|webp|zip|swf)$ {
    add_header Access-Control-Allow-Origin "*";
    expires max;
    access_log off;
  }

  if (-f $request_filename) {
    break;
  }
}
```

### Deleting a Vhost Template

To delete a **Vhost Template**, click on the **Application** and then on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/admin/vhost_templates/delete_vhost_template.png')} /> <br /><br />

## Vhost Templates

### Updating Vhost Templates

All **Vhost Templates** are managed via [GitHub](https://vhost-templates.cloudpanel.io/v1/), where we make constantly changes.

To update the **Vhost Templates** in your **CloudPanel** do the following:

1) Login via [SSH](users#ssh-login) to your server and become **root**.

```bash
sudo su root
```

2) Run the following command:

```bash
clpctl vhost-templates:import
```
