---
id: installation
title: Installation
sidebar_label: Installation
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this page, we explain step by step how to install and use **dploy** on **CloudPanel**.

## Download

1. Login via **SSH** as root user.

2. Download **dploy**, save it to **/usr/local/bin/dploy** and make it executable.

```bash
curl -sS https://dploy.cloudpanel.io/dploy -o /usr/local/bin/dploy; \
echo "8809e9eb63483487f16b0a2e4075a8b18350a02470405e2f786bf82fd7e5fb53 /usr/local/bin/dploy" | \
sha256sum -c && chmod +x /usr/local/bin/dploy
```

2. Enter **dploy** to see the available commands.

<img alt="DPLOY Command List" src={useBaseUrl('img/dploy/dploy-list-commands.png')} />

## Initialize

With the **dploy init** command, the config file and the project directory structure gets created.

```bash
~/.dploy           // dploy directory
 |- config.yml     // dploy config file
 |- overlays       // Overlay files that get copied into the release
   |  - .env       // For example .env file which contains sensitive information

~/htdocs/www.domain.com                    // The deploy_directory
 |- current -> releases/2023-05...-v1.0.1  // Symlink to the current release.
 |- releases                   
   |- 2023-06-01-08-08-08-v1.0.1    
     |- var/logs -> shared/var/logs        // Symlink to the shared directory shared/var/logs 
   |- 2023-06-01-08-08-08-v1.0.0    
   ...
 |- shared                                 // Directory for shared files between releases
   |- var/logs
```

1. Login via **SSH** as the **site user**.

2. Run **dploy init**, to initialize the project. A pre-configured config file is downloaded from the [templates repository](https://github.com/cloudpanel-io/dploy-application-templates), and the project directory structure is created.

<Tabs  defaultValue="php-applications" values={[
{ label: 'PHP Applications', value: 'php-applications', },
{ label: 'Node.js Applications', value: 'node-js-applications', },
{ label: 'Static HTML Sites', value: 'static-html-sites', },
{ label: 'Python', value: 'python', },
]}>
<TabItem value="php-applications">

<Tabs defaultValue="generic" values={[
{ label: 'Generic', value: 'generic', },
{ label: 'Laravel', value: 'laravel', },
{ label: 'Symfony', value: 'symfony', },
{ label: 'Magento 2 ', value: 'magento2', },
{ label: 'WordPress', value: 'wordpress', },
{ label: 'WooCommerce', value: 'woocommerce', },
]}>
<TabItem value="generic">

```bash
dploy init
```

</TabItem>
<TabItem value="laravel">

```bash
dploy init laravel
```

</TabItem>
<TabItem value="symfony">

```bash
dploy init symfony
```

</TabItem>
<TabItem value="magento2">

```bash
dploy init magento2
```

</TabItem>
<TabItem value="wordpress">

```bash
dploy init wordpress
```

</TabItem>
<TabItem value="woocommerce">

```bash
dploy init woocommerce
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="node-js-applications">

<Tabs defaultValue="ghost" values={[
{ label: 'Ghost', value: 'ghost', },
]}>
<TabItem value="ghost">

```bash
dploy init ghost
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="static-html-sites">

```bash
dploy init static-html-site
```

</TabItem>
<TabItem value="python">

```bash
dploy init python
```

</TabItem>
</Tabs>

3. Enter your **Git Repository SSH URL** and the **Deploy Directory**.

<img alt="dploy init" class="border" src={useBaseUrl('img/dploy/dploy-init.png')} />

## Configuration

The **dploy init** command creates the configuration file **config.yml**.

Open the **config.yml** and change the **shared directories**, **before and after commands**, if needed.

:::caution PHP Applications
Make sure to reload the right php-fpm service in the **after_commands**.
:::

```bash
nano ~/.dploy/config.yml
```

### Sudoers File

:::important PHP Applications Only
This step is only needed for **PHP Applications**; skip it if you are deploying a **Node.js** or **Static HTML** site.
:::

For security reasons, the site users cannot reload the **PHP-FPM Service**, which is needed to clear the **realpath** cache after switching the current symlink to the latest release.

To allow site users to reload only the **PHP-FPM Service**, we create a **sudoers file**.

Replace **john-doe** with your **site user** and execute the following command as root:

```bash
echo 'john-doe ALL = NOPASSWD: /usr/bin/systemctl reload php*-fpm' >> /etc/sudoers.d/dploy
```

### SSH Config

To clone a private git repository, we need to create an ssh key pair and add the public key to the git repository.

1. Login via **SSH** as the **site user**.

2. Go to the **SSH** directory of your **site user**:

```bash
cd ~/.ssh/
```

3. Create an **SSH Key Pair**.

:::warning No passphrase
Create the private key without a passphrase.
:::

```bash
ssh-keygen -f dploy-git
```

4. Copy the **public key** and add it to your git hosting provider like **github.com**.

```bash
cat ~/.ssh/dploy-git.pub
```

On **github.com**, go to **Settings** and then click on **Deploy keys** bottom left.

<img alt="Github Deploy Keys" class="border" src={useBaseUrl('img/dploy/github-deploy-keys.png')} />

5. Create a **SSH Config File** to define the private key that is being used to clone the git repository:

```bash
nano ~/.ssh/config
```

Open the **config** file, modify the **Host** and **User** and save it.

```bash
Host github.com
User git
IdentityFile ~/.ssh/dploy-git
```

6. Go to the **tmp directory** of your site, and test if cloning the git repository works as expected.

```bash
cd ~/tmp/
```

Clone git repository:

```bash
git clone git@github.com:cloudpanel-io/dploy-dploy-repo.git
```

## Site Root Directory

Go to your site and change the **Root Directory** to **current**.

<img alt="CloudPanel Site Root Directory" class="border" src={useBaseUrl('img/dploy/root-directory-change.png')} />

## Overlays

Overlays are mostly environment-specific files copied into the release directory after cloning the repository.

For **Laravel** or **Symfony** applications, you would put the **.env** file in this directory. 

For **Magento 2**, you would put the **app/etc/env.php** file in the same structure.

```bash
cd ~/.dploy/overlays
```

## Deploy

With the command **dploy deploy**, you can deploy a **branch** or **tag**. 
For deploying to **production**, it's recommended to deploy **tags** to roll back to a previous version if needed.

1. Login via **SSH** as the **site user**.

2. Run the **dploy deploy** command:

Deploying a branch like **main**:

```bash
dploy deploy main
```

Deploying a **tag**:

```bash
dploy deploy v1.0.0
```

#### Process Description

When you execute the command **dploy deploy**, the following steps are being executed:

1. Cloning the git repository into a new release directory.

2. Copying the overlay files from **~/.dploy/overlays** into the release directory.

3. Settings shared directories symlinks.

4. Executing the **before_commands** commands.

5. Setting the **current** symlink to the newest release.

6. Executing the **after_commands** like reloading **PHP-FPM** to clear the realpath cache.

7. Cleaning old releases.

<img alt="DPLOY" class="border" src={useBaseUrl('img/dploy/video.gif')} />

## Update

**dploy** is shipped with a **self-update** command to make the update process easy.

1. Login via **SSH** as root user.

2. Run **dploy self-update** to get the latest version.

```bash
dploy self-update
```