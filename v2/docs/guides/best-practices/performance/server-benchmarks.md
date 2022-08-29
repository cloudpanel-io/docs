---
id: server-benchmarks
title: Performance - Server Benchmarks
sidebar_label: Server Benchmarks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Server Performance** is the basis for achieving fast page loading times. We have tested the server with the most powerful processors on
**Amazon Web Server**, **Google Compute Engine**, **Hetzner Cloud**, **Digital Ocean**, **VULTR**, **Microsoft Azure**. <br />
To get the **best server performance** for your money, run the benchmark script to check and compare the result.

## The Benchmark Script

We are using the [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) to benchmark the server performance.

:::warning Blank Server
To benchmark the **server performance**, spin up a blank server with **Ubuntu 22.04** or **Debian 11** and execute the script below.
:::

### How to run

1. Login via **SSH** as **root** user or become **root**:

```bash
ssh root@instance-ip-address
```

2. Execute the script with disabled network performance test:

```bash
curl -sL yabs.sh | bash -s -- -i
```

3. Check and compare the **Geekbench 5 Benchmark Test Result**:

<img alt="Select Storage Provider" src={useBaseUrl('img/guides/best-practies/performance/server-benchmarks/geekbench-benchmark-result.png')} />

## The top 10

|        | Infrastructure Provider | Server Type                 | Architecture | Single Core | Multi Core | Full Test                                                         |
|:-------|:------------------------|:----------------------------|:-------------|:------------|:-----------|:------------------------------------------------------------------|
| **1.** | Amazon Web Services     | c7.xlarge (2vCPU, 8 GB RAM) | **ARM64**    | **1076**      | **2100**   | [Full Test Result](https://browser.geekbench.com/v5/cpu/16945415) |