---
id: nodejs
title: Nodejs
sidebar_label: Nodejs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning CloudPanel v1 is obsolete
CloudPanel v1 is **obsolete**; check out the [CloudPanel v2 Docs](https://www.cloudpanel.io/docs/v2/introduction/).
:::

On this page, we explain step by step how to setup a **[Nodejs](https://nodejs.org/)** App with **CloudPanel**.

## Installation

In the following example, we will setup a **[Nodejs](https://nodejs.org/)** under the domain ***www.domain.com***.

### Preparation

Before we can start with the installation, we need to create an [SSH User](../frontend-area/users#adding-a-user) and a [Domain](../frontend-area/domains#adding-a-domain).

When you [Add the Domain](../frontend-area/domains#adding-a-domain), make sure to select the **Nodejs Vhost Template**.

<img class="border" src={useBaseUrl('img/v1/applications/nodejs/new_domain.png')} /> <br /><br />

### Application Port

By default, all requests are forwarded to port **3000** via **reverse proxy**.

If your **Nodejs App** is running under another **port**, you can change it easily in the [Vhost Editor](../frontend-area/domains#vhost) of your domain.

<img class="border" src={useBaseUrl('img/v1/applications/nodejs/vhost_reverse_proxy_port.png')} />

## Production Deployment

For running a **NodeJs App** in **production** it's recommended to use a process control system like [supervisor](http://supervisord.org/),
which restarts the node processes automatically in case of a failure.

### Setup Supervisor

1. Install the **supervisor** package:

```
apt update && apt -y install supervisor
```

2. Create a **supervisor** configuration file:

```
touch /etc/supervisor/conf.d/nodejs-app.conf
```

3. Open the configuration file and put the following content:

```
[program:nodejs-app]
process_name=%(program_name)s_%(process_num)02d
command=/usr/bin/node /home/cloudpanel/htdocs/www.domain.com/app.js
numprocs=1
user=john-ssh
autostart=true
autorestart=true
stopsignal=KILL
stdout_logfile=/var/log/supervisor/nodejs-app.log
```

:::warning Attention
Make sure that the **user** is correct to avoid permission problems.
:::

5. Update the configuration and start the node processes:

```
supervisorctl reread
supervisorctl update
supervisorctl start nodejs-app:*
```

With the command **supervisorctl** you get information about the **status**, **pid**, and **uptime**:

### Troubleshooting

You may want to see what happens in the background; you can do that by tailing the log file:

```
tail -f /var/log/supervisor/nodejs-app.log -n1000
```