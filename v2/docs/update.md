---
id: update
title: Update
sidebar_label: Update
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**CloudPanel** is being shipped as **Debian Paket** (deb), which allows us to update **CloudPanel** and all dependencies conveniently.

To upgrade **CloudPanel** to the latest version, do the following:

:::warning Backup your instance
Make sure to create an image/snapshot of your instance before you update, just in case something isn't working as expected.
:::

1. Login via **SSH** as root user.

2. Update package sources:

```bash
apt update
```

3. Update **CloudPanel**:

```bash
apt -y install cloudpanel
```

