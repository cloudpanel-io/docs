---
id: security
title: En İyi Uygulamalar - Güvenlik
sidebar_label: Güvenlik
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bu sitede **CloudPanel**, **sunucunuz** ve **sitelerinizi** güvende tutmak için en iyi uygulamaları bulabilirsiniz.

## CloudPanel Güvenliği

### Port Güvenlik Duvarı

**CloudPanel**, **Basitleştirilmiş Güvenlik Duvarı (UFW)** olarak da bilinen [UFW](https://en.wikipedia.org/wiki/Uncomplicated_Firewall) tabanlı entegre bir [Güvenlik Duvarı](../../../admin-area/security/) ile birlikte gelir.

**22 (SSH)** ve **8443 (CloudPanel)** portlarını yalnızca kendi **IP adresleriniz** için açın. Eğer sabit bir IP adresiniz yoksa, [OpenVPN](https://openvpn.net/) gibi bir VPN çözümünü değerlendirin.

:::caution Bulut Sağlayıcıları
Çoğu bulut sağlayıcı, gelen ve giden trafiği yönetmek için **güvenlik duvarı/güvenlik grupları** sunar. 
Tavsiye edilen yöntem, entegre güvenlik duvarını kullanmak yerine bu güvenlik gruplarını kullanmaktır.
Performans ve güvenlik nedenleriyle, trafiğin sunucuya ulaşmadan önce tamamen engellenmesi önerilir.
:::

### Basic Auth

**CloudPanel** önüne bir [Basic Auth](../../../admin-area/security/#basic-auth) eklemek, özellikle **8443 (CloudPanel)** portunu kapatamıyorsanız veya IP listelemesi yapamıyorsanız ek bir güvenlik katmanı sağlar.

### İki Faktörlü Kimlik Doğrulama

Kullanıcılarınız için [İki Faktörlü Kimlik Doğrulama](../../../frontend-area/account/#two-factor-authentication) etkinleştirin. 
Bu, kullanıcı zayıf bir şifre kullanıyorsa veya şifre çalınırsa ikinci bir güvenlik katmanı sağlar.

### Sürekli Güncellemeler

Yazılımlar güvenlik açıklarına sahip olabilir, bu nedenle [CloudPanel'i Güncel Tutmak](../../../update) önemlidir.

## Yedeklemeler

**Veri güvenliği** çok önemlidir. İyi bir **yedekleme stratejisi**, her site için hayati öneme sahiptir. Donanım herhangi bir zamanda bozulabilir, dosya sistemi bozulabilir veya birileri yanlışlıkla dosyaları silebilir. 
İyi bir **yedekleme stratejisi** ile kaza durumunda **veri kaybını** minimumda tutabiliriz. En kritik kısım, sürekli güncellenen **veritabanıdır**.

[Managed Magento Hosting](https://www.mgt-commerce.com) konusunda 11 yılı aşkın deneyimle, müşterilerimiz için saatlik [Amazon Machine Images (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) yedeklerinin harika bir çözüm olduğunu gördük. 
**AWS**, temelde bir tam yedekleme yapar ve ardından saatlik artımlı yedeklemeler gerçekleştirir.

### Otomatik Yedeklemeler

**CloudPanel** ile otomatik yedeklemeleri etkinleştirebilirsiniz; mevcut [Bulut Özellikleri](../../../admin-area/cloud-features/amazon-web-services/) hakkında bilgi edinin.

### Uzaktan Yedeklemeler

Entegre [Uzaktan Yedekleme](../../../admin-area/backups/) özelliği ile sitelerinizin kopyalarını **Amazon S3**, **Wasabi**, **Digital Ocean Spaces**, **Dropbox**, **SFTP** gibi hizmetlerde ve diğer depolama sağlayıcılarında saklayabilirsiniz.

### Yedeklerinizi Test Edin

Bazı **dosyaları** veya **veritabanlarını** geri yüklemeniz gerektiğinde, yedeklerinizin çalışmadığını öğrenmek istemezsiniz. 
**Yedeklerinizi test etmek** ve güncel bir test/staging ortamı oluşturmak iyi bir yaklaşımdır. 
Bunu başarmak için, günlük olarak cron işini kullanarak ortamlarınızı güncelleyen bir betik geliştirebilirsiniz.

## Sunucu Güvenliği

### Yazılım ve İşletim Sistemini Güncelleyin

Tüm yazılım ve işletim sistemiyle ilgili güvenlik düzeltmelerini güncel tutmak önemlidir. Sunucu sistemleri ve yazılım teknolojileri o kadar karmaşıktır ki, taşıdıkları güvenlik açıklarının bazıları kolayca fark edilmeyebilir.

### Güvenlik Sertleştirme

Maksimum sunucu korumasını sağlamak için sunucu güvenlik sertleştirme işlemini tamamlamalısınız. 
Basitçe söylemek gerekirse, bu, sunucu yazılımınızdaki ve işletim sisteminizdeki güvenlik açıklarını gidermek ve genel sunucu güvenliğini artırmak için temel ve ileri düzey güvenlik önlemlerini uygulamak anlamına gelir.

Sunucu sertleştirmeyi sağlamak için yaygın yöntemler:

- **Güçlü şifreler kullanmak**
- **Düzenli sistem yedeklemeleri yapmak**
- **İşletim sistemlerini güncel tutmak ve güvenlik yamalarını yayınlandıkça uygulamak**
- **Güvenlik duvarları ve antivirüs yazılımları kurmak**
- **Gereksiz üçüncü taraf yazılımları kaldırmak**
- **İletişim ve veri şifreleme**

## Site Güvenliği

### Web Uygulama Güvenlik Duvarı

**DDoS Saldırıları**, **SQL Enjeksiyonları** veya **Cross-Site Scripting** gibi yaygın web saldırılarına karşı sitenizi korumak hayati öneme sahiptir.

Aşağıdaki hizmetleri öneriyoruz:

- [Cloudflare](https://www.cloudflare.com/), ayrıca [CloudPanel Cloudflare Entegrasyonu](../../../frontend-area/security/#cloudflare) bölümüne bakın
- [Sucuri](https://sucuri.net/)
- [AWS Web Application Firewall](https://aws.amazon.com/waf/)
- 
