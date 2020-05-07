---
id: cloudpanel-cli-commands
title: CloudPanel CLI Commands
sidebar_label: Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **CloudPanel CLI** is a command-line application that offers commands for backing up databases, restoring databases,
showing database credentials,  disabling two-factor authentification, resetting passwords, and resetting permissions.

<img class="border" src={useBaseUrl('img/v1/cli/cli_commands.png')} /> <br /><br />

With the following **command** you see all available **commands**:

```bash
clpctl
```

:::caution Commands
The following **commands** are available only for the **root** user:

- **db:show:credentials**
- **db:show:master-password**
- **user:disable:mfa**
- **user:reset:password**

The following **commands** are available for other **users**:

- **db:backup**
- **db:import**
- **system:permissions:reset**
:::

## Database

### Database Backup

With the **Database Backup** command you can backup all databases or specific ones.

To **backup all** databases, run the following command:

```bash
clpctl db:backup --databases=all
```

If you want to **exclude** some **databases**, run the following command:

```bash
clpctl db:backup --databases=all --ignoreDatabases=db1,db2
```

To **backup** only one specific **database**, run the following command:

```bash
clpctl db:backup --databases=$databaseName
```

The **Database Backups** will be compressed via gzip and stored in the following directory:

```bash
/home/cloudpanel/backups/
```

### Database Import

### Database Credentials


## User

### Disable 2-FA

### Reset Password

## System

### Permission Reset

