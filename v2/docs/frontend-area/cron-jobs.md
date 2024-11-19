---
id: cron-jobs
title: Cron Jobs
sidebar_label: Cron Jobs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Cron** is one of the most valuable utilities that you can find in any Unix-like operating system.  <br />
It is used to schedule commands at a specific time. These scheduled commands or tasks are known as **Cron Jobs**.

## Adding a Cron Job

### Via CloudPanel

To add a **Cron Job**, click on the **Cron Jobs** tab, select a **Template** and enter the **Command** you want to execute.

<img alt="Adding a Cron Job" class="border" src={useBaseUrl('img/frontend-area/cron-jobs/adding-a-cron-job.png?v=0.0.2')} />

### Via Command Line

The standard linux way to configure **Cron Jobs** on the command line can be used as well.

1. Login via [SSH](ssh-ftp#ssh-login) with the **Site User**.

```bash
ssh site-user@instance-ip-address
```

2. Enter the following command to edit **Cron Jobs**:

```bash
crontab -e
```

3. Configure your **Cron Job**.

On the following [site](https://tecadmin.net/crontab-in-linux-with-20-examples-of-cron-schedule/), you find some useful
examples of how to configure them.

## Deleting a Cron Job

To delete a **Cron Job**, click on the **Cron Jobs** tab and click on **Delete** and confirm your action.

<img alt="Deleting a Cron Job" class="border" src={useBaseUrl('img/frontend-area/cron-jobs/deleting-a-cron-job.png?v=0.0.2')} />