---
id: pm2
title: Deployment with pm2
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

### Adding a Cron Job

To ensure, that your **application** is running after a reboot of your instance, you need to configure a cron job.

1. First copy the output of the **PATH** variable:

```bash
echo $PATH
```

The output will look similar to this:

```bash
/home/john-doe/.nvm/versions/node/v14.19.3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

2. Edit the **crontab** for the **site user**.

```bash
crontab -e
```

3. Add the following lines to it:

```bash
PATH=$PASTE_THE_OUTPUT_OF_$PATH
@reboot pm2 resurrect &> /dev/null
```

**Example configuration**

<img alt="PM2 Cronjob Example" src={useBaseUrl('img/nodejs/applications/strapi/cronjob-example.png')} />

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