---
id: update
title: Güncelleme
sidebar_label: Güncelleme
---

import useBaseUrl from '@docusaurus/useBaseUrl';

**CloudPanel**, **Debian Paketi** (deb) olarak sunulmaktadır. Bu, **CloudPanel** ve tüm bağımlılıkları kolayca güncellememizi sağlar.

:::warning Sunucunuzu yedekleyin
Güncellemeden önce bir sorunla karşılaşma ihtimaline karşı, sunucunuzun bir **görüntüsünü/snapshot'ını** oluşturduğunuzdan emin olun.
:::

**CloudPanel**'i en son sürüme güncellemek için şu adımları izleyin:

1. **SSH** üzerinden root kullanıcısı olarak giriş yapın.

2. Güncelleme komut dosyasını çalıştırın:

```bash
clp-update
```

## Test Sürümleri

Test sürümleri, en yeni özelliklere erken erişim sağlar. <br />
Bazı özelliklerin deneysel olabileceğini ve bazılarının kararlı sürüme hiç ulaşmayabileceğini unutmayın.

**Test sürüm kanalına** geçmek için şu adımları izleyin:

1. **SSH** üzerinden root kullanıcısı olarak giriş yapın.

2. Sürüm kanalını **test** olarak ayarlayın:

```bash
clpctl cloudpanel:set:release-channel --channel='test'
```

3. Güncelleme komut dosyasını çalıştırın:

```bash
clp-update
```
