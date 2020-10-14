---
id: cli-commands
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
- **vhost-templates:import**

The following **commands** are available for other **users**:

- **db:backup**
- **db:import**
- **system:permissions:reset**
:::

## Database

### Database Backup

With the **Database Backup** command you can backup all databases or specific ones.

For backing up databases, **CloudPanel** uses the standard utility **mysqldump**.

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

The **Database Backups** will be compressed via **gzip** and stored in the following directory:

```bash
/home/cloudpanel/backups/
```

### Database Import

**Importing** or **restoring** a database can be done with the following command:

```bash
clpctl db:import --file=dump.sql.gz --database=database-name
```

The supported file formats are **.sql** and **sql.gz**. 

### Database Credentials

The **Database Credentials** command shows the master credentials for connecting to the **database**.

```bash
clpctl db:show:credentials
```

The output will look like:

<img class="border" src={useBaseUrl('img/v1/cli/db_show_credentials.png')} /> <br /><br />

Use the **Connect Command** to connect to **MySQL** from the command-line.

This command is only available for the **root** user.

### Database Master Password

To display only the **Database Maste Password** run the following command:

```bash
clpctl db:show:master-password
```

This command is only available for the **root** user.

## User

### Disable 2-FA

To disable **Two-Factor Authentication** for a **user**, run the following command:

```bash
clpctl user:disable:mfa 'john.doe'
```

This command is only available for the **root** user.

### Reset Password

To **reset a password** for a **user**, run the following command:

```bash
clpctl user:reset:password 'john.doe' 'newPassword123'
```

This command is only available for the **root** user.

## System

### Permission Reset

To reset the **owner** and **permissions** of files and directories run the following command:

```bash
clpctl system:permissions:reset $directoryOrFile 775
```

The reset of the **owner** and **permissions** are applied recursively.