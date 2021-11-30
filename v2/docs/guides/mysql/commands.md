---
id: commands
sidebar_label: Commands
title: MySQL Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this site, you will find useful **MySQL Commands** like exporting and importing/restoring databases.

## Export

To export a database, you can use the [CloudPanel CLI](https://www.cloudpanel.io/docs/cloudpanel-ce/cloudpanel-cli/cli-commands#database-backup) 
or the [mysqldump](https://dev.mysql.com/doc/refman/5.7/en/mysqldump.html) client utility. <br />
The **CloudPanel CLI** uses **mysqldump** under the hood.

To **export a database**, do the following steps:

1. First, you need to get the **database master credentials**. Execute the following command as **root** user: 

```
clpctl db:show:credentials
```

The output will look like the following image:

<img src={useBaseUrl('img/v1/guides/mysql/cloudpanel_master_credentials.png')} /> 

2. With the **database master credentials**, you can export a **database**:

```
mysqldump -h127.0.0.1 -uroot -p --opt --single-transaction --quick $databaseName > dump.sql
```

## Import

To import a **database dump**, you can use the [CloudPanel CLI](https://www.cloudpanel.io/docs/cloudpanel-ce/cloudpanel-cli/cli-commands#database-import)
or the **mysql** command.

To prevent permission problems, you should use the **database master credentials** for importing a **database**.

1. To get the **database master credentials**. Execute the following command as **root** user: 

```
clpctl db:show:credentials
```

2. Use the following command to import the **database dump** in your **database**:

```
mysql-h127.0.0.1 -uroot -p $databaseName < dump.sql
```