---
id: server-benchmarks
title: Performance - Server Benchmarks
sidebar_label: Server Benchmarks
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**Server Performance** is the basis for achieving fast page loading times. We have tested the server with the most powerful processors on
**Amazon Web Server**, **Google Compute Engine**, **Hetzner Cloud**, **Digital Ocean** and **VULTR**. <br />
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

<img alt="Select Storage Provider" src={useBaseUrl('img/guides/best-practices/performance/server-benchmarks/geekbench-benchmark-result.png')} />

## The 10 Fastest Server Types

:::important Single Core Performance
The **Single-Core Performance** is important for **Node.js and PHP Applications** that can't take advantage of multiple processor cores.
:::

|         | Infrastructure Provider | Server Type                                                              | Architecture | Single Core                                               | Monthly Price                                                               |
|:--------|:------------------------|:-------------------------------------------------------------------------|:-------------|:----------------------------------------------------------|:----------------------------------------------------------------------------|
| **1.**  | Amazon Web Services     | c7i.large (2 vCPU, 4 GB RAM), <br /> **Intel(R) Xeon(R) Platinum 8488C** | **X86_64**   | [**1974**](https://browser.geekbench.com/v6/cpu/8970305)  | [~ 43 € RI](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/) |
| **2.**  | Amazon Web Services     | m8g.large (2 vCPU, 8 GB RAM), <br /> **AWS Graviton 4**                  | **ARM64**    | [**1913**](https://browser.geekbench.com/v6/cpu/8970151)  | [~ 43 € RI](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/) |
| **3.**  | Hetzner Cloud           | CCX13 (2 vCPU, 8 GB RAM), <br /> **AMD EPYC**                            | **X86_64**   | [**1855**](https://browser.geekbench.com/v6/cpu/8970901)  | [~ 12 €](https://www.hetzner.com/cloud#pricing)                             |
| **4.**  | Amazon Web Services     | c8g.large (2 vCPU, 8 GB RAM), <br /> **AWS Graviton 4**                  | **ARM64**    | [**1798**](https://browser.geekbench.com/v6/cpu/8970993)  | [~ 38 € RI](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/) |
| **5.**  | Hetzner Cloud           | CPX11 (2 vCPU, 2 GB RAM), <br /> **AMD EPYC**                    | **X86_64**   | [**1251**](https://browser.geekbench.com/v6/cpu/8970895)  | [~ 5 €](https://www.hetzner.com/cloud#pricing)                              |
| **6.**  | VULTR                   | CPU Optimized (2 vCPU, 4 GB RAM), <br /> **AMD EPYC-Rome**               | **X86_64**   | [**1168**](https://browser.geekbench.com/v5/cpu/16960835) | [~ 40 €](https://www.vultr.com/products/optimized-cloud-compute/)           |
| **7.**  | VULTR                   | Cloud High Frequency (2 vCPU, 2 GB RAM), **Intel Skylake Core**          | **X86_64**   | [**1152**](https://browser.geekbench.com/v5/cpu/16968212) | [~ 18 €](https://www.vultr.com/pricing/#cloud-compute/)                     
| **8.**  | Amazon Web Services     | c6a.large (2 vCPU, 4 GB RAM), <br /> **AMD EPYC 7R13**                   | **X86_64**   | [**1134**](https://browser.geekbench.com/v5/cpu/16964163) | [~ 37 € RI](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/) | |
| **9.**  | Digital Ocean           | CPU Optimized (2 vCPU, 4 GB RAM), <br /> **Intel Xeon Platinum 8358**    | **X86_64**   | [**1103**](https://browser.geekbench.com/v5/cpu/16960567) | [~ 42 €](https://www.digitalocean.com/products/droplets)                    |
| **10.** | Digital Ocean           | Basic Premium Intel (2 vCPU, 2 GB RAM), <br /> **Do-Premium-Intel**      | **X86_64**   | [**1003**](https://browser.geekbench.com/v5/cpu/16960667) | [~ 21 €](https://www.digitalocean.com/products/droplets)                    |


## Contribute

Did you find a fast server that we should add to the list?

1. Run the benchmark script above and make sure that the result is reproducible.

2. Join our [Discord Server](https://discord.cloudpanel.io/) and let us know which cloud/provider and server type you tested.

## Real World Example

In the following **Real World Example**, you see how fast **CloudPanel** runs on a **High-Performance Server**. <br />
If **CloudPanel** (**Lightweight PHP Application**) isn't running fast, then don't expect **High-Performance** for other applications.

1. To check the **CloudPanel** performance, use the **Google Chrome Browser**, log into **CloudPanel** and click on **Sites**.

2. Make a right-click and click on **Inspect** to open the **Chrome Developer Toolbar**.

<img class="border" alt="Inspect Site" src={useBaseUrl('img/guides/best-practices/performance/server-benchmarks/real-world-inspect.png')} />

3. Go to **Network** and click on **Doc** and reload 3-4 times to get the best result. <br />
In our example below, you see **41ms** rendering time, which is very fast. If you see a value **>= 150ms,** 
you may think about switching to a faster server.

<img class="border" alt="First-Byte-Request" src={useBaseUrl('img/guides/best-practices/performance/server-benchmarks/real-world-first-byte-request-time.png')} />




