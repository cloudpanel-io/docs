---
id: ghost
title: Ghost
sidebar_label: Ghost
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you find a guide to install and configure [Ghost](https://ghost.org/) on **CloudPanel**.

## Creating a Node.js Site

### Via CloudPanel

1. Click on **+ Add Site** and then click on **Create a Node.js Site**.

<img class="border" alt="Add Node.js Site" src={useBaseUrl('img/nodejs/applications/strapi/add-site.png')} />

2. Enter the **Domain Name**, **Node.js Version**, and the **App Port**, and click on **Create**.

<img alt="Add Ghost Site Form" class="border" src={useBaseUrl('img/nodejs/applications/ghost/add-site-form.png')} />

### Via CloudPanel CLI

You can create a **Node.js Site** with the following command as **root user** if you like the command line.

```bash
clpctl site:add:nodejs --domainName=www.domain.com --nodejsVersion=16 --appPort=2368 --siteUser='john-doe' --siteUserPassword='!secretPassword!'
```

## Creating a Ghost project

1. Create a [Database](../../../frontend-area/databases/#adding-a-database) and copy the **Database Name**, **Database User Name**, **Database User Password**.

2. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

3. Install the **Ghost CLI**:

```bash
npm install ghost-cli@latest -g
```

4. Replace **DATABASE_USERNAME**, **DATABASE_USER_PASSWORD**, **DATABASE_NAME**, **SITE_USER**, and **DOMAIN** and install **Ghost**.

```bash
ghost install --db mysql --port 2368 \
--dbhost 127.0.0.1 \
--dbuser $DATABASE_USER_NAME \
--dbpass $DATABASE_USER_PASSWORD \
--dbname $DATABASE_NAME \
--process local \
--no-setup-linux-user \
--no-setup-ssl \
--no-setup-nginx \
--dir /home/$SITE_USER/htdocs/$DOMAIN/
```

5. Enter your **Blog Url** like **https://www.domain.com/**

<img alt="Ghost - Enter Blog Url" class="border" src={useBaseUrl('img/nodejs/applications/ghost/enter-blog-url.png')} />

6. Start **Ghost** by confirming with **Y**:

<img alt="Start Ghost Dialog" class="border" src={useBaseUrl('img/nodejs/applications/ghost/start-ghost-dialog.png')} />

7. The installation is done. Open your site in the browser and create an admin user.

<img alt="Welcome to Ghost" class="border" src={useBaseUrl('img/nodejs/applications/ghost/welcome-to-ghost.png')} />

## Deployment

**Ghost** needs to be started after an instance reboot. We will create a script that gets executed after the reboot.

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Create **scripts** directory:

```bash
mkdir ~/scripts/ 
```

3. Create a **start script**:

```bash
nano ~/scripts/ghost-start.sh
```

Modify the **--dir** value and save the **start script**:

```bash
#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
ghost start --dir $HOME/htdocs/ghost.moby.io/ --no-setup-linux-user > $HOME/logs/ghost.log &
```

3. Set execution permissions:

```bash
chmod 700 ~/scripts/ghost-start.sh
```

4. Edit the **crontab** for the **site user**.

```bash
crontab -e
```

5. Replace **SITE_USER** with your **site user ** and add the following line:

```bash
@reboot /home/$SITE_USER/scripts/ghost-start.sh &> /dev/null
```

6. Reboot and test if **Ghost** is running as expected.