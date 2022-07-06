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

A [Basic Auth](../../../admin-area/security/#basic-auth) in front of **CloudPanel** adds an extra layer of security, especially if you can't close port **8443 (CloudPanel)**.

### Two-Factor Authentication

Enable [Two-Factor Authentication](../../../frontend-area/account/#two-factor-authentication) for your users, providing a second layer of security 
in case a user is using a weak password or the password is stolen.

## Site Security

## Server Security