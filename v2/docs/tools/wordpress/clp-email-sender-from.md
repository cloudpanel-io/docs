---
id: clp-email-sender-from
title: CLP E-Mail Sender From
sidebar_label: CLP E-Mail Sender From
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[CLP E-Mail Sender From](https://github.com/cloudpanel-io/clp-email-sender-from) is a **WordPress plugin** to change the **E-Mail** from **Name** and **Address**.

Services like [Amazon SES](https://aws.amazon.com/ses/) require to send **E-Mails** from verified **Domains**.

You may be interested in: [How to configure Amazon SES with Postfix](https://www.cloudpanel.io/tutorial/how-to-configure-amazon-ses-with-postfix/)

## Installation

1. Clone the **CLP E-Mail Sender From** Git Repository:

```
git clone https://github.com/cloudpanel-io/clp-email-sender-from
```

2. Copy the file **clp-email-sender-from.php** to the directory **wp-content/plugins/**.

3. Active the **plugin** in your **Wordpress Admin**:

<img class="border" alt="CLP E-Mail Sender From Wordpress Plugin" src={useBaseUrl('/img/tools/wordpress/clp-email-sender-from/activate_plugin.png')} />

4. Go to **Settings** -> **General** and set **From Name** and **From E-Mail** and click on the button **Saves Changes**.

<img class="border" alt="CLP E-Mail Sender From Settings" src={useBaseUrl('/img/tools/wordpress/clp-email-sender-from/email_sender_from_settings.png')} />

## Changelog

v1.0.0 - [2021-01-05]

- Initial Version