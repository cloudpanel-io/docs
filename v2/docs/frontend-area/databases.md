---
id: databases
title: Databases
sidebar_label: Databases
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Adding a Database

1. Click on **Add Database** to create a new database.

<img alt="Adding a Database" class="border" src={useBaseUrl('img/frontend-area/databases/adding-a-database.png?v=0.0.1')} />

2. Enter the **Database Name**, **Database User Name**, and **Database User Password** and click on the button **Add Database**.

<img alt="Add Database Form" class="border" src={useBaseUrl('img/frontend-area/databases/add-database-form.png?v=0.0.1')} />

## Deleting a Database

To delete a database, click on **Delete** and confirm your action.

<img alt="Deleting a Database" class="border" src={useBaseUrl('img/frontend-area/databases/deleting-a-database.png?v=0.0.1')} />

## Adding a Database User

1. Click on **Add Database User** to add a new user to your database.

<img alt="Adding a Database User" class="border" src={useBaseUrl('img/frontend-area/databases/adding-a-database-user.png?v=0.0.1')} />

2. Enter the **Database User Name**, **Database User Password**, and select the **Database** and the **Permissions**.

<img alt="Adding a Database User Form" class="border" src={useBaseUrl('img/frontend-area/databases/adding-a-database-user-form.png?v=0.0.1')} />

## Deleting a Database User

To delete a database user, click on **Delete** and confirm your action.

<img alt="Deleting a Database User" class="border" src={useBaseUrl('img/frontend-area/databases/deleting-a-database-user.png?v=0.0.1')} />

## phpMyAdmin

To manage a database via **phpMyAdmin**, click on **Manage**, and you will be forwarded to **phpMyAdmin**.

:::warning Attention
Do not use **phpMyAdmin** to export and import databases; it can destroy your database. <br />
Use **export** and **import** guide from below.
:::

<img alt="phpMyAdmin" class="border" src={useBaseUrl('img/frontend-area/databases/phpmyadmin.png?v=0.0.1')} />

## Exporting a Database

For exporting a **database**, **CloudPanel** uses [mysqldump client utility](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html).

To export a database, do the following.

1. Login via [SSH](ssh-ftp#ssh-login) with the **Site User**.

```bash
ssh site-user@instance-ip-address
```

2. Go to the directory where the **database dump** should be saved e.g., the **tmp** directory of the user.

```bash
cd ~/tmp/
```

3. Run **clpctl** to see all available commands.

```bash
clpctl
```

<img alt="CLI User Commands" class="border" src={useBaseUrl('img/frontend-area/databases/clpctl-user-commands.png')} />

4. Use the following command to export a database.

:::warning Compression
The **database dump** will be **gzipped** if you add **.sql.gz** at the end of the file name. If you want to export the database uncompressed, use **.sql**.
:::

```bash
clpctl db:export --databaseName=my-database --file=dump.sql.gz
```

## Importing a Database

For importing a **database**, **CloudPanel** uses [mysql command-line client](https://dev.mysql.com/doc/refman/8.0/en/mysql.html).

To import a database, do the following.

1. Login via [SSH](ssh-ftp#ssh-login) with the **Site User**.

```bash
ssh site-user@instance-ip-address
```

2. Run **clpctl** to see all available commands.

```bash
clpctl
```

<img alt="CLI User Commands" class="border" src={useBaseUrl('img/frontend-area/databases/clpctl-user-commands.png')} />

3. Go to the **database dump's directory** and use the following command to import a database.

```bash
clpctl db:import --databaseName=my-database --file=dump.sql.gz
```

## Database Backups

**CloudPanel** creates a dump of each database every night at **3:15 AM** with a retention period of 7 days.

All **database backups** can be found in the **backups** directory of the site user.

```bash
/home/$site-user/backups/
```

If you have smaller databases, you can change the cron job to run more frequently, like twice a day.

To change the schedule of the database backup task, do the following:

1. Login via **SSH** to your instance and become **root**.

```bash
sudo su root
```

2. Open the crontab:

```bash
nano /etc/cron.d/clp
```

3. Change the backup task schedule to your needs.

```bash
15 3 * * * clp /usr/bin/bash -c "/usr/bin/clpctl db:backup --ignoreDatabases='db1,db2' --retentionPeriod=7" &> /dev/null
```

:::caution Retention Period
If you want to save the database backups for more than seven days, change the **retentionPeriod** value.
:::

## Database Master Credentials

To see the **Master Database Credentials**, do the following.

1. Login via **SSH** to your instance and become **root**.

```bash
sudo su root
```

2. Run the following command:

```bash
clpctl db:show:master-credentials
```

The output will look like this:

<img alt="Show Database Master Credentials" class="border" src={useBaseUrl('img/frontend-area/databases/show-database-master-credentials.png')} />

Copy the **Connect Command** to get connected to your **database server**.

## Remote Database Access

For a remote connection to your **database**, go to [Firewall](../../admin-area/security#adding-a-rule) in the **Admin Area** and whitelist your IP for the MySQL port **3306** in the **Firewall**.

