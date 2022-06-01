---
id: adding-a-python-version
title: Adding a Python Version
sidebar_label: Adding a Python Version
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On this site, you will find a **step-by-step guide** on adding a custom **Python Version** to the instance.

We will add an older version **Python 3.8**, to our instance as an example.

## Ubuntu

### PPA Method

The first and easiest solution for Ubuntu users would be to import the [deadsnakes team](https://launchpad.net/~deadsnakes) Launchpad PPA. <br />
This will always contain the latest updates for **Python** and all extra packages that may be required.

1. Install the prerequisite for adding custom PPAs:

```bash
apt update && apt -y install software-properties-common
```

2. Add the [deadsnakes/ppa](https://launchpad.net/~deadsnakes) to your APT package source list:

```bash
add-apt-repository ppa:deadsnakes/ppa -y
```

3. Install **Python 3.8**:

```bash
apt update && apt -y install python3.8
```

## Debian

### Install Dependencies

First, we need to install the required dependencies to be able to build **Python 3.8** from the source.

```bash
apt update && apt -y install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev libbz2-dev
```

### Compiling from Source

:::warning Python Releases
All **Python Releases** can be found on the following site: [https://www.python.org/downloads/](https://www.python.org/downloads/)
:::

1. Download the source for **Python 3.8**.

```bash
wget https://www.python.org/ftp/python/3.8.13/Python-3.8.13.tgz
```

2. Extract the downloaded **tarball**:

```bash
tar xf Python-3.8.13.tgz
```

3. Configure with the flag **--enable-optimizations**:

```bash
cd Python-3.8.13
./configure --prefix=/usr --enable-optimizations
```

4. Run **make** to start the compile process:

```bash
make
```

5. Install **Python 3.8** via **altinstall**, which maintains the default Python binary path in **/usr/bin/python**.

```bash
make altinstall
```

6. Remove the **source** and the **tgz**:

```bash
rm -rf Python-3.8.13 Python-3.8.13.tgz
```

7. Done! **Python 3.8** has been installed and is now available to select in **CloudPanel**.

<img class="border" src={useBaseUrl('img/python/guides/add-a-python-version/cloudpanel-python-version.png')} />

### Remove Dependencies

```bash
apt --purge remove zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libreadline-dev libffi-dev libsqlite3-dev libbz2-dev
```