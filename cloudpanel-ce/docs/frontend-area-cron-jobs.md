---
id: cron-jobs
title: Cron Jobs
sidebar_label: Cron Jobs
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Cron** is one of the most useful utility that you can find in any Unix-like operating system.  <br />
It is used to schedule commands at a specific time. These scheduled commands or tasks are known as **Cron Jobs**. 

## Adding a Cron Job

### Via CloudPanel

To add a **Cron Job** click on the button **Add Cron Job** top right.

<img class="border" src={useBaseUrl('img/v1/cron-jobs/new_cron_job.png')} /> <br /> <br />

Select a **Template** that prefills the fields **Minute**, **Hour**, **Day**, **Month**, and **Weekday**.

Enter the **Command** and select the user as which the cron job will be executed.

:::warning Permissions
Running the **Cron Job** as the right user is very important. Running as the right user will prevent permission issues e.g., 
if your script is reading and writing files.
:::

### Via Command Line

The standard linux way to configure **Cron Jobs** on the command line can be used as well.

1) Login via [SSH](users#ssh-login) with the user who should run the **Cron Job** e.g. **john-ssh**

2) Enter the following command to edit **Cron Jobs**

```bash
crontab -e
```

3) Enter your **Cron Job**

On the following [site](https://tecadmin.net/crontab-in-linux-with-20-examples-of-cron-schedule/), you find some useful 
examples of how to configure them.

## Deleting a Cron Job

On the **Cron Jobs** overview site, you can delete a **Cron Job** by clicking on the button **Delete**.

<img class="border" src={useBaseUrl('img/v1/cron-jobs/delete_cron_job.png')} /> 

## Settings

In the **Settings**, you can enter an email address to receive the output every time the cron job runs.

<img class="border" src={useBaseUrl('img/v1/cron-jobs/mailto_settings.png')} />