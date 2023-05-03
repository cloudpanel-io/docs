---
id: pm2
title: Node.js deployment with pm2
sidebar_label: With pm2
---

import useBaseUrl from '@docusaurus/useBaseUrl';

For running **Node.js** applications in production, you need **process manager** who takes care of the node processes.

We explain how to use the [PM2](https://pm2.keymetrics.io/) for setting up a **Node.js Application** for production on this site.

## PM2

[PM2](https://pm2.keymetrics.io/) is a daemon process manager that will help you manage and keep your application online.

### Installation

1. Log in via [SSH](../../frontend-area/ssh-ftp/#ssh-login) with your **Site User**:

```bash
ssh john-doe@instance-ip-address
```

2. Go to the **root directory** of your project:

```bash
cd htdocs/www.domain.com/
```

3. Install the latest **pm2** via **npm**.

```bash
npm install pm2@latest -g
```

### Start the Application

Use the following command to start your **application** via **pm2**:

:::warning App Name
Replace the **app-name** variable with the name of your application.
:::

```bash
pm2 start npm --name $app-name -- start
```

Your **application** is now running via **pm2**.

<img alt="PM2 Start NPM" src={useBaseUrl('img/nodejs/applications/strapi/pm2-start-npm.png')} />

### Save Configuration

To save the **pm2** configuration, execute the **save** command:

```bash
pm2 save
```

### Adding to Startup

To ensure, that your **application** is running after a reboot of your instance, you need to execute following script.

```bash
pm2 startup
```

4. Reboot your **instance** and check if the application is **running**:

```bash
pm2 status
```

The  status  should be **online** to confirm that your Application is running after reboot.

<img alt="PM2 Cronjob Example" src={useBaseUrl('img/nodejs/applications/strapi/pm2-status.png')} />

### Troubleshooting

[PM2](https://pm2.keymetrics.io/) provides a [logs](https://pm2.keymetrics.io/docs/usage/log-management/) command to see the application's output, which helps troubleshoot.

```bash
pm2 logs
```