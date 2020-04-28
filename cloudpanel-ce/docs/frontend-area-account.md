---
id: account
title: Account
sidebar_label: Account
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Account Information

To edit account information, click on your name in the top right header.

<img class="border" src={useBaseUrl('img/v1/account/header_account_menu.png')} /> <br /> <br />

In the account area, you can change personal information like **E-Mail**, **First Name**, **Last Name**, **Password**
and, the **Timezone**. The **Timezone** is important to see the right times in the monitoring graphs on the dashboard.

<img class="border" src={useBaseUrl('img/v1/account/account_information.png')} /> 

## Two-Factor Authentication

**Two-Factor Authentication** adds an extra layer of security to your account. <br />
Whenever you sign in, you’ll need to enter both your password and also a security code.

### Enable 2-FA

To enable **Two-Factor Authentication** click in your account on the tab **Security** and click on the button <br />
**Enable Two-Factor Authentication**.

<img class="border" src={useBaseUrl('img/v1/account/enable_two_factor_authentication.png')} /> <br /> <br />

Open an app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en) or [Duo](https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app)
and scan the QR code and enter one **authentication code** to confirm.

<img class="border" src={useBaseUrl('img/v1/account/connect_app_two_factor_authentication.png')} />

### Disable 2-FA

To disable **Two-Factor Authentication** click in your account on the tab **Security** and click on the button <br />
**Disable Two-Factor Authentication**.

<img class="border" src={useBaseUrl('img/v1/account/disable_two_factor_authentication.png')} /> <br /> <br />

If you can't log in into your account anymore, you can disable the **Two-Factor Authentication** via the command line.

1) Login with SSH and switch the user to **root**.

```bash
sudo su root
```

2) Execute the following command:

```bash
clpctl user:disable:mfa 'john.doe'
```


