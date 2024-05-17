---
id: account
title: Account
sidebar_label: Account
---

import useBaseUrl from '@docusaurus/useBaseUrl';

To edit your account information, click on the account icon top right and settings.

## Settings

You can change your **E-Mail**, **First Name**, **Last Name**, or change your **Password**.

<img class="border" alt="Account Settings" src={useBaseUrl('img/frontend-area/account/settings.png?v=0.0.1')} />

## Two-Factor Authentication

### Enable 2-FA

To enable **Two-Factor Authentication**, click in your account on the **Security** tab and click on the **Enable Two-Factor Authentication**.

<img class="border" alt="Enable Two-Factor Authentication" src={useBaseUrl('img/frontend-area/account/enable-2fa.png?v=0.0.1')} />

Open an app like [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en) or [Duo](https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app),
scan the QR code, and enter **one authentication code** to confirm.

### Disable 2-FA

To disable **Two-Factor Authentication**, click in your account on the tab **Security** and click on the button <br />
**Disable Two-Factor Authentication**.

<img class="border" alt="Disable Two-Factor Authentication" src={useBaseUrl('img/frontend-area/account/disable-2fa.png?v=0.0.1')} />

If you can't log in into **CloudPanel**, you can disable **Two-Factor Authentication** also from the command line, <br />
see [Root User Commands](../../cloudpanel-cli/root-user-commands/#disable-2-fa).