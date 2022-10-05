---
id: service
title: Service
sidebar_label: Service
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Service Settings

By default, **512MB** of compressed data can be stored in the memory. You should consider increasing the value if you have many sites on the server or sites with many pages.

To give **Varnish Cache** more memory, do the following:

1. Login via **SSH** as **root** user.

2. Open the systemd service file:

```bash
nano /lib/systemd/system/varnish.service
```

3. Increase the **malloc** value from **512m** e.g. to **2048m**:

```bash
ExecStart=/usr/sbin/varnishd \
          -a :6081 \
          -a localhost:8444,PROXY \
          -f /etc/varnish/default.vcl \
          -P %t/%N/varnishd.pid \
          -p feature=+http2 \
          -p http_resp_hdr_len=40000 \
          -s malloc,512m
```
4. Reload systemd manager configuration:

```bash
systemctl daemon-reload
```

5. Restart the **Varnish Cache Service**:

```bash
systemctl restart varnish
```

## Configuration File

The **Varnish Cache Configuration File** can be found at:

```bash
/etc/varnish/default.vcl
```

After making changes, you need to reload the configuration.

1. Login via **SSH** as **root** user.

2. Run **varnishreload** to use the new compiled vlc configuration:

```bash
varnishreload
```

## Service Actions

