---
id: mailcow
title: Mailcow
sidebar_label: Mailcow
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Bu sayfada, **CloudPanel** üzerinde [Mailcow](https://mailcow.email/) posta sunucusunu çalıştırmak için **adım adım bir rehber** bulabilirsiniz. <br />
[Mailcow](https://mailcow.email/), bir docker uygulamasıdır ve **Ters Proxy** üzerinden erişilir.

:::warning Sistem Gereksinimleri
- **>= 1 Çekirdek**
- **>= 6 GB RAM**
- **>= 20 GB Disk**
:::

## Postfix Devre Dışı Bırakma

**root** olarak **SSH** ile giriş yapın ve **postfix** servisini durdurup devre dışı bırakın:

```bash
systemctl stop postfix && systemctl disable postfix
```

## Docker Kurulumu

1. **root** olarak **SSH** ile giriş yapın:

```bash
ssh root@instance-ip-address
```

2. Aşağıdaki komut ile **Docker** ve **Docker Compose**'u kurun:

<Tabs
defaultValue="ubuntu-22.04"
values={[
{ label: 'Ubuntu 22.04 LTS', value: 'ubuntu-22.04', },
{ label: 'Debian 11 LTS', value: 'debian-11', },
]}>
<TabItem value="ubuntu-22.04">

**docker** ve **docker compose plugin**'i yükleyin:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable sh && apt install docker-compose-plugin
```

</TabItem>
<TabItem value="debian-11">

1. İlk olarak, şu [sorun](https://github.com/mailcow/mailcow-dockerized/issues/5057) için geçici çözüm olarak **apparmor** kurun:

```bash
apt update && apt -y install apparmor
```

2. **docker** ve **docker compose plugin**'i yükleyin:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable sh && apt install docker-compose-plugin
```

</TabItem>
</Tabs>

## Mailcow Kurulumu

1. [Mailcow Git Deposu](https://github.com/mailcow/mailcow-dockerized)'nu **/opt/mailcow-dockerized** dizinine klonlayın:

```bash
git clone https://github.com/mailcow/mailcow-dockerized /opt/mailcow-dockerized
```

2. **Mailcow**'u başlatmak için **generate_config.sh** scriptini çalıştırın:

```bash
cd /opt/mailcow-dockerized/ && ./generate_config.sh
```

3. **Mail sunucusu hostname (FQDN)** değerini ayarlayın, örneğin: **mail.domain.com**.

<img alt="Mail Sunucusu Hostname (FQDN) Ayarla" src={useBaseUrl('img/guides/applications/mailcow/mail-server-hostname.png')} />

4. Yapılandırma dosyasını açın ve **HTTP_PORT**, **HTTP_BIND**, **HTTPS_PORT**, **HTTPS_BIND** değerlerini değiştirin:

```bash
nano /opt/mailcow-dockerized/mailcow.conf
```

```bash
HTTP_PORT=7080
HTTP_BIND=127.0.0.1

HTTPS_PORT=7443
HTTPS_BIND=127.0.0.1
```

## Mailcow'u Başlatma

**Mailcow**'u başlatmak için **/opt/mailcow-dockerized/** dizinine gidin ve docker konteynerlerini çalıştırın:

```bash
cd /opt/mailcow-dockerized/ && docker compose pull && docker compose up -d
```

## Ters Proxy Yapılandırması

**Mailcow**'a **https://mail.domain.com** alan adınız üzerinden erişmek için bir [Ters Proxy](../../../frontend-area/add-site/#create-a-reverse-proxy) oluşturun ve trafiği **7443** portuna yönlendirin.

1. **CloudPanel** üzerinde, alan adınızla ve **https://127.0.0.1:7443** olarak **Ters Proxy Url** ile bir [Ters Proxy](../../../frontend-area/add-site/#create-a-reverse-proxy) oluşturun.

<img class="border" alt="CloudPanel Ters Proxy Yapılandırması" src={useBaseUrl('img/guides/applications/mailcow/reverse-proxy-configuration.png')} />

2. Ters Proxy'ye gidin ve bir [SSL/TLS Sertifikası](../../../frontend-area/tls/) oluşturun.

3. Tamamlandı. Artık [https://mail.domain.com](https://mail.domain.com) adresinde **admin** kullanıcı adı ve **moohoo** şifresi ile giriş yapabilirsiniz.

<img alt="Mailcow Girişi" src={useBaseUrl('img/guides/applications/mailcow/mailcow-login.png')} />

4. Güvenlik nedenleriyle, **Mailcow** kurulumunuzun önüne bir [Temel Kimlik Doğrulama](../../../frontend-area/security/#basic-authentication) eklemenizi öneririz.
