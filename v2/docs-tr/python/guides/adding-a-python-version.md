---
id: adding-a-python-version
title: Bir Python Sürümü Ekleme
sidebar_label: Bir Python Sürümü Ekleme
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sayfada, sunucunuza özel bir **Python Sürümü** eklemek için adım adım bir rehber bulacaksınız.

Örnek olarak, sunucumuza eski bir sürüm olan **Python 3.8** ekleyeceğiz.

## Ubuntu

### PPA Yöntemi

Ubuntu kullanıcıları için en kolay ve hızlı çözüm, [deadsnakes ekibi](https://launchpad.net/~deadsnakes) tarafından sağlanan Launchpad PPA'yı kullanmaktır. <br />
Bu kaynak, **Python** ve gerekli tüm ek paketler için her zaman en son güncellemeleri içerir.

1. Özel PPA'lar eklemek için gerekli olan paketleri yükleyin:

```bash
apt update && apt -y install software-properties-common
```

2. [deadsnakes/ppa](https://launchpad.net/~deadsnakes) kaynağını APT paket listesine ekleyin:

```bash
add-apt-repository ppa:deadsnakes/ppa -y
```

3. **Python 3.8** yükleyin:

```bash
apt update && apt -y install python3.8
```

## Debian

### Bağımlılıkları Yükleme

Öncelikle, **Python 3.8**'i kaynak koddan derlemek için gerekli olan bağımlılıkları yüklememiz gerekiyor.

```bash
apt update && apt -y install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libsqlite3-dev libbz2-dev
```

### Kaynaktan Derleme

:::warning Python Sürümleri
Tüm **Python Sürümleri** şu adreste bulunabilir: [https://www.python.org/downloads/](https://www.python.org/downloads/)
:::

1. **Python 3.8** için kaynak kodunu indirin.

```bash
wget https://www.python.org/ftp/python/3.8.13/Python-3.8.13.tgz
```

2. İndirilen **tarball** dosyasını çıkarın:

```bash
tar xf Python-3.8.13.tgz
```

3. **--enable-optimizations** bayrağıyla yapılandırın:

```bash
cd Python-3.8.13
./configure --prefix=/usr --enable-optimizations
```

4. Derleme işlemini başlatmak için **make** çalıştırın:

```bash
make
```

5. Varsayılan Python ikili dosya yolunu **/usr/bin/python** altında koruyarak **altinstall** ile **Python 3.8** kurun.

```bash
make altinstall
```

6. **Kaynak** ve **tgz** dosyasını kaldırın:

```bash
rm -rf Python-3.8.13 Python-3.8.13.tgz
```

7. İşte bu kadar! **Python 3.8** kuruldu ve artık **CloudPanel**'de seçim yapmaya hazır.

<img class="border" src={useBaseUrl('img/python/guides/add-a-python-version/cloudpanel-python-version.png')} />

### Bağımlılıkları Kaldırma

```bash
apt --purge remove zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libreadline-dev libffi-dev libsqlite3-dev libbz2-dev
```
