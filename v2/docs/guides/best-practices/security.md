---
id: security
title: Best Practices - Security
sidebar_label: Security
---

import useBaseUrl from '@docusaurus/useBaseUrl';

You will find best practices on this site to keep **CloudPanel**, **the server**, and **your sites** safe.

## CloudPanel Security

### Port Firewall

**CloudPanel** is being shipped with an integrated [Firewall](../../../admin-area/security/) based on [UFW](https://en.wikipedia.org/wiki/Uncomplicated_Firewall), also known as **Uncomplicated Firewall**.

Open port **22 (SSH)** and **8443 (CloudPanel)** only for your **IPs**. If you don't have a static IP, consider a VPN solution like [OpenVPN](https://openvpn.net/).

:::caution Cloud Providers
Most cloud providers offer **firewall/security groups** to manage the inbound and outbound traffic. 
The recommended way is to use them instead of the integrated Firewall.
For performance and security reasons, it's recommended to block all traffic before reaching the server.
:::

### Basic Auth

A [Basic Auth](../../../admin-area/security/#basic-auth) in front of **CloudPanel** adds an extra layer of security, especially if you can't close/whitelist port **8443 (CloudPanel)**.

### Two-Factor Authentication

Enable [Two-Factor Authentication](../../../frontend-area/account/#two-factor-authentication) for your users, providing a second layer of security 
in case a user is using a weak password or the password is stolen.

### Constant Updates

Software may have security vulnerabilities, therefore is important to [Update CloudPanel](../../../update) constantly.

## Backups

**Data security** is very important. A good **backup strategy** is essential for every site. Hardware can break anytime, the file system can become corrupted, or someone deletes files accidentally.
With a **good backup strategy**, we can **limit the data loss** to a minimum in case of an accident. The most critical part is the **database** which constantly gets updated.

With more than 11 years of [Managed Magento Hosting](https://www.mgt-commerce.com) experience, we found out that hourly [Amazon Machine Images (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) are a great backup solution 
for our customers. **AWS** basically creates one full backup and performs incremental backups every hour.

### Automated Backups

With **CloudPanel**, you can enable automatic backups; see the available [Cloud Features](../../../admin-area/cloud-features/amazon-web-services/).

### Remote Backups

With the integrated [Remote Backups](../../../admin-area/backups/), you can store copies of your sites to services like **Amazon S3**, **Wasabi**, 
**Digital Ocean Spaces**, **Dropbox**, **SFTP**, and other storage providers.

### Test your Backups

If you need to **restore** some **files** or **databases**, you don't want to discover that your backups are not working.
A good approach to **test your backups** and an up-to-date test/staging environment. 
To achieve that, you can develop a script that updates your environments, e.g., once daily via cron job.

## Server Security

### Upgrade Software and Operating System

Staying up to date on all software and operating system-related security fixes is essential. Server systems and software technologies are so complicated that some of the security vulnerabilities they carry can easily go unnoticed.

### Security Hardening

To ensure maximum server protection, you should complete the process of server security hardening. 
Simply put, that means applying basic and advanced security measures to address vulnerabilities in your server software and operating system to boost overall server security.

Common ways to achieve server hardening include:

- **Using strong passwords**
- **Completing regular system backups**
- **Keeping operating systems up to date and applying security patches as they are released**
- **Installing firewalls and antivirus software**
- **Removing unnecessary third-party software**
- **Communication and data encryption**

## Site Security

### Web Application Firewall

Protecting your site against common web attacks like **DDoS Attacks**, **SQL Injections**, or **Cross-Site Scripting** is crucial.

We can recommend the following services:

- [Cloudflare](https://www.cloudflare.com/), see also the [CloudPanel Cloudflare Integration](../../../frontend-area/security/#cloudflare)
- [Sucuri](https://sucuri.net/)
- [AWS Web Application Firewall](https://aws.amazon.com/waf/)