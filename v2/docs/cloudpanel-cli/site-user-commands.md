---
id: site-user-commands
title: Site User Commands
sidebar_label: Site User Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="Site User Commands" src={useBaseUrl('img/cli-commands/site-user-commands.png')} />

## System

### Permissions Reset

To **reset the permissions** of a file or directories, log in via [SSH](../../frontend-area/ssh-ftp/#ssh-login) and modify the command below to your needs:

```bash
clpctl system:permissions:reset --directories=770 --files=660 --path=.
```

## Database

### Database Export

With the command **db:export**, you can export a **database** as **dump**.

:::warning Compression
The **database dump** will be **gzipped** if you add **.sql.gz** at the end of the file name. If you want to export the database uncompressed, use **.sql**.
:::

```bash
clpctl db:export --databaseName=my-database --file=dump.sql.gz
```

### Database Import

To import a database, go to the **database dump's directory** and use the following command to import.

```bash
clpctl db:import --databaseName=my-database --file=dump.sql.gz
```