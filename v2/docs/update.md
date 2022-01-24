---
id: update
title: Update
sidebar_label: Update
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**CloudPanel** is being shipped as **Debian Paket** (deb), which allows us to update **CloudPanel** and all dependencies conveniently.

:::warning Backup your instance
Make sure to create an **image/snapshot** of your instance before you update, just in case something isn't working as expected.
:::

To update **CloudPanel** to the latest version, do the following:

1. Login via **SSH** as root user.

2. Run the update script:

```bash
clp-update
```

## Test Releases

Test releases give you early access to newest features. <br />
Note that some of the features may be experimental, and some may not ever reach the stable release.

To switch to the **test release channel**, do the following:

1. Login via **SSH** as root user.

2. Set the release channel to **test**:

```bash
clpctl cloudpanel:set:release-channel --channel='test'
```

3. Run the update script:

```bash
clp-update
```