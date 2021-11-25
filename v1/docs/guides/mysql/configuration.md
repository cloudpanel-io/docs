---
id: configuration
sidebar_label: Configuration
title: MySQL Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configuration

To make changes on the **MySQL Configuration**, do the following:

1. Open the configuration file as **root** user:

```
nano /etc/mysql/my.cnf
```

2. Make changes e.g, adjusting some parameters like `innodb_buffer_pool_size`.

3. Restart **MySQL** to apply changes:

```
systemctl restart mysql
```

## Slow Query Log

The [Slow Query Log](https://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) is useful to log consists of SQL statements that take more than `long_query_time` seconds to execute.

To enable the **Slow Query Log**, do the following:

1. Open the [configuration file](#configuration) file.

2. Uncomment the following lines by removing the semicolon in the front:

```
;slow_query_log=1
;slow_query_log_file=/var/log/mysql/slow.log
;long_query_time=2
```

3. Restart **MySQL** to apply changes:

```
systemctl restart mysql
```