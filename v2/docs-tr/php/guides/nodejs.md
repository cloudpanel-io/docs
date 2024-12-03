---
id: nodejs
title: PHP Siteleri için Node.js
sidebar_label: Node.js
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Bu sayfada, siteniz için [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) kullanarak [Node.js](https://nodejs.org/en/) kurulum rehberini bulabilirsiniz.

1. **Site Kullanıcısı** ile [SSH](../../../frontend-area/ssh-ftp/#ssh-login) üzerinden giriş yapın:

```bash
ssh john-doe@server-ip-address
```

2. Aşağıdaki komut ile [nvm](https://github.com/nvm-sh/nvm) kurun:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

3. Mevcut kabuk ortamını güncelleyin:

```bash
source ~/.bashrc
```

4. Gerekli **Node.js** sürümünü yükleyin, örneğin **22**:

```bash
nvm install 22
```

5. Kurulan **Node.js** sürümünü etkinleştirin:

```bash
nvm use 22
```

6. İşte bu kadar! **Node.js** sürümünü kontrol edin:

```bash
node -v
```
