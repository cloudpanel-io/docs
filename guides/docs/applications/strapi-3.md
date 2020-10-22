---
id: strapi-3
title: Strapi 3
sidebar_label: Strapi 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain step by step how to setup **[Strapi 3](https://strapi.io/)** with **CloudPanel**.

## Installation

In the following example we will setup **[Strapi](https://strapi.io/)** under the subdomain ***api.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user) and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Strapi 3 Vhost Template**.

<img class="border" src={useBaseUrl('img/v1/applications/strapi-3/new_domain.png')} /> <br /><br />

### Installation

To install **Strapi** do the following steps:

1. In the first step, we need to downgrade (as **root** user) **Node.js** to version **12.x**:

**Open the nodesource list file:**

```
nano /etc/apt/sources.list.d/nodesource.list
```

**Replace:**

```
deb https://deb.nodesource.com/node_14.x buster main
deb-src https://deb.nodesource.com/node_14.x buster main
```

**With:**

```
deb https://deb.nodesource.com/node_12.x buster main
deb-src https://deb.nodesource.com/node_12.x buster main
```

2. Update the **package sources** and remove the old **Node.js** version:

```
apt update && dpkg -r --force-depends nodejs
```

3. Install **Node.js** Version **12.x**:

```
apt -y install nodejs
```

4. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go **htdocs** directory:

```
cd /home/cloudpanel/htdocs/
```

5. Delete the project directory which has been created by **CloudPanel**:

```
rm -rf /home/cloudpanel/htdocs/api.domain.com
```

6. We create the **Strapi** app via **yarn**:

```
yarn create strapi-app api.domain.com --quickstart
```

7. Done! Open the **admin** url in your browser to create an **admin user**: [https://api.domain.com/admin](https://api.domain.com/admin)

<img class="border" src={useBaseUrl('img/v1/applications/strapi-3/create_admin_user.png')} /> <br /><br />

## Development

For the development, you can start **Strapi** from the commandline with a detailed output:

1. [Login via SSH](../frontend-area/users#ssh-login) to the server e.g. with **john-ssh** and go the **project** directory:

```
cd /home/cloudpanel/htdocs/api.domain.com/
```

2. Start **Strapi** via **yarn**:

```
yarn develop
```

## Production Deployment

For running **Strapi** in **production** it's recommended to use a process control system like [supervisor](http://supervisord.org/),
which restarts the node processes automatically in case of a failure.

### Setup Supervisor

1. Got to the **project directory** and build **Strapi** with user **john-ssh**:

```
cd /home/cloudpanel/htdocs/api.domain.com/ && NODE_ENV=production yarn build
```

2. Install the **supervisor** package:

```
apt update && apt -y install supervisor
```

3. Create a **supervisor** configuration file.

```
touch /etc/supervisor/conf.d/strapi-api.conf
```

4. Open the configuration file and put the following content:

```
[program:strapi-api]
process_name=%(program_name)s_%(process_num)02d
environment=NODE_ENV=production
command=/usr/bin/yarn --cwd /home/cloudpanel/htdocs/api.domain.com/ start
numprocs=1
user=john-ssh
autostart=true
autorestart=true
stopsignal=KILL
stdout_logfile=/var/log/supervisor/strapi-api.log
```

:::warning Attention
Make sure that the **user** is correct to avoid permission problems.
:::

5. Update the configuration and start the node processes :

```
supervisorctl reread
supervisorctl update
supervisorctl start strapi-api:*
```

With the command **supervisorctl** you get information about the **status**, **pid**, and **uptime**:

<img class="border" src={useBaseUrl('img/v1/applications/strapi-3/supervisorctl_screenshot.png')} /> 

### Troubleshooting

You may want to see what happens in the background; you can do that by tailing the log file:

```
tail -f /var/log/supervisor/strapi-api.log -n1000
```