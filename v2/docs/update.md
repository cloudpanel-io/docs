---
id: update
title: Update
sidebar_label: Update
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**CloudPanel** is being shipped as **Debian Paket** (deb), which allows us to update **CloudPanel** and all dependencies conveniently.

:::warning Backup your instance
Make sure to create an image/snapshot of your instance before you update, just in case something isn't working as expected.
:::

To update **CloudPanel** to the latest version, follow the steps:

1. Login via **SSH** as root user.

2. Run the update script:

```bash
curl -sSL https://update.cloudpanel.io/v2 | sudo bash
```

