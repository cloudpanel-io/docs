---
id: setup
title: Cloudflare Setup
sidebar_label: Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Cloudflare](https://www.cloudflare.com/) is a content delivery network (CDN). A CDN is a distributed network of servers that provides several advantages for a web site:

- **Caching:** By caching web site content, Cloudflare helps improve page load speeds, reduce bandwidth usage, and reduce CPU usage on the server.
- **High availability:** With a redundant network of servers worldwide, if a server experiences an issue, Cloudflare's CDN simply "fails over" to use another server.
- **Enhanced security:** Cloudflare helps improve security by blocking threats before they even reach a site. Cloudflare's CDN can also provide some protection against **Distributed Denial of Service (DDoS) attack**.

## Cloudflare Setup

On this site, you will learn how to setup [Cloudflare](https://www.cloudflare.com/) for **CloudPanel**.

### Name Servers

To use **Cloudflare**, you need to point the name servers for your domain to Cloudlare's ones. <br />
The traffic is forwarded to the Cloudflare network, where it gets automatically filtered o prevent malicious traffic. <br />
The name servers can be changed where you have registered the domain.

On the site [whatsmydns.net](https://www.whatsmydns.net/), you can check the name servers of your domain.

<img class="border" src={useBaseUrl('img/v1/guides/cloudflare/name_servers_check.png')} /> <br /><br />

:::warning
Updating the Name Servers can take up to **48 hours**!
:::

### DNS Settings

Create **DNS records** to your server and set the **Proxy Status** to **Proxied** to terminate **SSL/TLS** directly on the **Cloudflare Edge Servers** and hide your **server's IP**.

<img class="border" src={useBaseUrl('img/v1/guides/cloudflare/proxied_dns_records.png')} /> <br /><br />

### NGINX Vhost Settings

**Cloudflare** is forwarding the header `X_FORWARDED_PROTO` with the values **http** and **https**.

We need to configure **NGINX** to check this header to redirect from **http** to **https** and to set the variable `$fastcgi_https` to **on**
that **PHP** is aware of it.

1. Go to the [Vhost Editor](../../frontend-area/domains#vhost) of your domain.

2. Comment the following three lines:

```
#if ($scheme != "https") {
#  rewrite ^ https://$host$uri permanent;
#}
```

3. Paste the following lines afterwards:

```
if ($http_x_forwarded_proto != https) {
  return 301 https://$host$request_uri;
}
  
if ($http_x_forwarded_proto ~ https) {
  set $fastcgi_https on;
}
```

**The Vhost Template of your domain should look the following now:**

<img class="border" src={useBaseUrl('img/v1/guides/cloudflare/nginx_forwarded_proto.png')} /> <br /><br />

4. Save the changes. **Done**.

### Security

With the **Proxied** option, the server ip is not visible, which increases **security**.
However, if the **Server IP** is known, the traffic can be sent directly to the IP to bypass **Cloudflare's** Web Application Firewall.

It's recommended to open ports **80** and **443** only for the **Cloudflare** network, which can change from time to time.

With the help of the [Uncomplicated Firewall (ufw)](https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29) and a script which automatically 
whitelist the **Cloudflare IPs**, we can address this.

1. Install the **ufw** package:

```
apt update && apt -y install ufw
```

2. Create a directory for our script:

```
mkdir /root/scripts/
```

3. Download the [script](https://raw.githubusercontent.com/cloudpanel-io/scripts/master/cloudflare/whitelist_ips):

```
curl -s -o /root/scripts/whitelist_cloudflare_ips https://raw.githubusercontent.com/cloudpanel-io/scripts/master/cloudflare/whitelist_ips
```

4. Make the script executable:

```
chmod 700 /root/scripts/whitelist_cloudflare_ips
```

5. Edit the **crontab** of the **root user**:

```
crontab -e
```

Add the following line at the end to run the script every five minutes:

```
*/5 * * * * /root/scripts/whitelist_cloudflare_ips &> /dev/null
```

6. **Done**

#### Firewall Rules

With the following command, you get a detailed overview of which **IPs** are allowed for incoming traffic port **80** and **443**.

```
ufw status numbered
```

The output will look like this:


