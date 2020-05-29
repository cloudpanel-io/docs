---
id: application-other
title: Other
sidebar_label: Other
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this page, we explain how to set up other **PHP Applications** with **CloudPanel**.

## Installation

In the following example we will setup a **PHP Application** under the domain ***www.domain.com***.

### Domain

When you [Add the Domain](domains#adding-a-domain), make sure to select the **Generic Vhost Template** and the right **PHP Version**.

<img class="border" src={useBaseUrl('img/v1/applications/other/new_domain.png')} /> <br /><br />

:::warning Document Root
Make sure to point the **Document Root** to the right directory, some applications using **public** or other directories as **Document Root**.
:::

After [Adding the Domain](domains#adding-a-domain), you can make changes on the [Vhost](domains#vhost) to your needs like adding application-specific rules.

<img class="border" src={useBaseUrl('img/v1/domains/vhost.png')} />


