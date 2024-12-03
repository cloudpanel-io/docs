---
id: clp-email-sender-from
title: CLP E-Mail Gönderen Bilgisi
sidebar_label: CLP E-Mail Gönderen Bilgisi
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[CLP E-Mail Gönderen Bilgisi](https://github.com/cloudpanel-io/clp-email-sender-from), **Ad** ve **Adres** bilgilerini değiştirmenizi sağlayan bir **WordPress eklentisidir**.

[Amazon SES](https://aws.amazon.com/ses/) gibi hizmetler, doğrulanmış **Alan Adlarından** **E-Posta** gönderilmesini gerektirir.

İlgilenebilirsiniz: [Amazon SES ile Postfix Nasıl Yapılandırılır](https://www.cloudpanel.io/tutorial/how-to-configure-amazon-ses-with-postfix/)

## Kurulum

1. **CLP E-Mail Gönderen Bilgisi** Git Deposunu klonlayın:

```
git clone https://github.com/cloudpanel-io/clp-email-sender-from
```

2. **clp-email-sender-from.php** dosyasını **wp-content/plugins/** dizinine kopyalayın.

3. **WordPress Yönetici Panelinizde** eklentiyi etkinleştirin:

<img class="border" alt="CLP E-Mail Gönderen Bilgisi WordPress Eklentisi" src={useBaseUrl('/img/tools/wordpress/clp-email-sender-from/activate_plugin.png')} />

4. **Ayarlar** -> **Genel** sekmesine gidin, **Gönderen Adı** ve **Gönderen E-Posta** bilgilerini ayarlayın ve **Değişiklikleri Kaydet** butonuna tıklayın.

<img class="border" alt="CLP E-Mail Gönderen Bilgisi Ayarları" src={useBaseUrl('/img/tools/wordpress/clp-email-sender-from/email_sender_from_settings.png')} />

## Değişiklik Günlüğü

v1.0.0 - [2021-01-05]

- İlk Sürüm
