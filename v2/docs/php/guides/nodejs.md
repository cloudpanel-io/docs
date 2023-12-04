---
id: nodejs
title: Node.js for PHP Sites
sidebar_label: Node.js
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On this site, you will find a guide on installing [Node.js](https://nodejs.org/en/) via the [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) for your **site**.

1. Log in via [SSH](../../../frontend-area/ssh-ftp/#ssh-login) with the **Site User**:

```bash
ssh john-doe@server-ip-address
```

2. Install [nvm]((https://github.com/nvm-sh/nvm)) with the following command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

3. Update the current shell environment:

```bash
source ~/.bashrc
```

4. Install your required **Node.js** version e.g. **18**:

```bash
nvm install 18
```

5. Activate the installed **Node.js** version:

```bash
nvm use 18
```

6. Done! Check the **Node.js** version:

```bash
node -v
```
