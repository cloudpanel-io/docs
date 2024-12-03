---
id: changelog
title: Değişiklik Günlüğü
sidebar_label: Değişiklik Günlüğü
---

## v2.5.0 - [2024-11-26]
**Yeni**
- PHP 8.4 Desteği
- MariaDB 11.4 Desteği
- Çeviriler: Macarca, Slovakça, Tayca

**Hata Düzeltmeleri**
- [#471 kullanıcı adı hatası](https://github.com/cloudpanel-io/cloudpanel-ce/issues/471)
- [#476 /usr/bin/clpctl içinde yanlış Shebang](https://github.com/cloudpanel-io/cloudpanel-ce/issues/476)
- [#484 Dosyaların başındaki beklenmeyen parantezler](https://github.com/cloudpanel-io/cloudpanel-ce/issues/484)
- [#500 Özel cron komutları çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/500)
- [#505 Web tabanlı Dosya Yöneticisi dosya yüklemiyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/505)
- [#511 .well-known dizini sertifika yenilemeden sonra siliniyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/511)
- [#527 FTP kullanıcı oluşturulduğunda SSH anahtarıyla site kullanıcı girişi yapılamıyor (ccMatrix'e teşekkürler)](https://github.com/cloudpanel-io/cloudpanel-ce/issues/527)
- [#530 Dosya değişikliğinden sonra dosya izinleri 0770'a dönüyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/530)
- [#535 "Ek Yapılandırma Direktifleri" değerde boşluklara izin vermiyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/535)
- [#540 S3 yedekleme - Bölge - Orta Doğu (BAE) me-central-1 eksik](https://github.com/cloudpanel-io/cloudpanel-ce/issues/540)
- Çeviri Düzeltmeleri

**Geliştirmeler:**
- Yeni AWS bölgeleri için S3 uzaktan yedekleme

**Güvenlik:**
- clpctlWrapper komutundan Yetki Yükseltme (Yell Phone Naing) (YÜKSEK)
- Site Kullanıcı Erişimi Linux Şifre Değişikliklerine İzin Veriyor (YÜKSEK) (Yell Phone Naing)
- Cloudflare kullanmasına rağmen sunucu IP ifşası (Yell Phone Naing)

## v2.4.2 - [2024-05-21]
**Yeni**
- Debian 12 ve Ubuntu 24.04 [HTTP/3](../frontend-area/vhost/#http3) Desteği
- Node.js 22 LTS Desteği
- Çeviriler: Sırpça, Gürcüce

**Hata Düzeltmeleri**
- [#427 Dosya yöneticisinde dosyaları yeniden adlandıramama](https://github.com/cloudpanel-io/cloudpanel-ce/issues/427)
- [#430 Cron görevlerinde virgül kullanımı](https://github.com/cloudpanel-io/cloudpanel-ce/issues/430)
- [#434 Bunun bir hata olduğunu düşünüyorum.](https://github.com/cloudpanel-io/cloudpanel-ce/issues/434)
- Çeviri Düzeltmeleri

## v2.4.1 - [2024-01-22]

**Yeni**
- Çeviriler: Boşnakça

**Geliştirmeler:**
- Oran sınırlama hatalarını önlemek için Let's Encrypt sertifikalarının ilk önce sahne ortamında test edilmesi
- Özellikle Node.js siteleri için site oluşturma performansının artırılması

**Hata Düzeltmeleri**
- [#382 phpMyAdmin sıralama çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/382)
- [#383 Yönetici/Ayarlar bölümünde Yeniden Başlat çalışmıyor ve giriş sayfasından otomatik giriş engelleniyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/383)
- [#406 AWS EC2 kurulumcusu kullanıldığında CloudPanel Dashboard açılmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/406)
- Çeviri Düzeltmeleri

**Güvenlik**
- Düşük yetkiye sahip bir kullanıcının oturum korsanlığı yaparak yönetici ve diğer kullanıcı hesaplarına yetkisiz erişim sağlamasına olanak tanıyan bir güvenlik açığı. (Muhammad Aizat, datack.my)

## v2.4.0 - [2023-11-27]

**Yeni**
- PHP 8.3 Desteği
- Node.js 20 LTS Desteği
- Çeviriler: Danca, Çekçe

**Geliştirmeler:**
- Veritabanları, uzaktan yedekleme yapılmadan önce yedeklenir
- Site ayarları ve vhost, uzaktan yedekleme dosyasına dahil edilir
- phpMyAdmin 5.2.1'e güncellendi

**Hata Düzeltmeleri**
- [#329 file-manager.conf içinde yinelenen ayar anahtarı](https://github.com/cloudpanel-io/cloudpanel-ce/issues/329)
- [#338 Bir web uygulamasını sildiğinizde orijinal sertifika kaldırılmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/338)
- [#355 Giriş Sayfası Otomatik Tamamlama/Şifre Yöneticisi Sorunu](https://github.com/cloudpanel-io/cloudpanel-ce/issues/355)
- [#359 Bir web sitesini sildiğinizde PM2 ile başlatılan nodejs uygulaması silinmiyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/359)
- [#363 Özel v2-varnish vhost şablonları 403 sayfası ve eksik Varnish ayarlarına neden oluyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/363)
- [#367 phpMyAdmin temel kimlik doğrulaması CloudPanel temel kimlik doğrulaması etkinleştirildiğinde çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/367)

**Güvenlik**
- Dosya Yöneticisi: Yeni dosya chown sorunu (CVE-2023-43880)
- Dosya Yöneticisi: Zip symlink (BSDTAR) (CVE-2023-43881)
- chmod dosyasından OS Komut Enjeksiyonu (CVE-2023-46157, Muhammad Aizat, datack.my)
- Komut Enjeksiyonu (Yell Phone Naing)

## v2.3.2 - [2023-08-21]

**Yeni**
- Çeviri: Korece, Farsça

**Hata Düzeltmeleri**
- Çeviri Düzeltmeleri

**Geliştirmeler:**
- Vietnamca, Çince Çeviri
- RTL stil sayfası geliştirmeleri

**Güvenlik**
- [#298 Site kullanıcısından MySQL Root Şifre Sızıntısı (Yell Phone Naing'e teşekkürler)](https://github.com/cloudpanel-io/cloudpanel-ce/issues/298)
- Kritik: Kullanıcıdan root yetkisine yükselme (Yell Phone Naing'e teşekkürler)

## v2.3.1 - [2023-06-20]

**Hata Düzeltmeleri**
- [#287 Uzaktan bulut yedeklemede iki nokta üst üste çoğu dosya sistemini bozuyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/287)
- [#290 Dosya Yöneticisi Çıkarma işlemi v2.3.0'dan beri çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/290)
- [#293 Özel alan adı için kullanılan sertifika dosyasının içinde garip \n\n karakterleri](https://github.com/cloudpanel-io/cloudpanel-ce/issues/293)
- Çeviri Düzeltmeleri

**Güvenlik**
- Kritik (CVE-2023-35885): Güvensiz dosya yöneticisi çerez kimlik doğrulaması (Muhammad Aizat, datack.my)
- Kritik (CVE-2023-36630): Güvensiz Dosya Yükleme, Yetki Yükseltme ve Kimlik Doğrulama Atlamasına yol açıyor (Mohammad Zulfiqar)

## v2.3.0 - [2023-06-06]

**Yeni**
- Çeviri: Bulgarca
- Yeni CloudPanel CLI Root Komutları:
  - Kullanıcı:
    - [user:add](/cloudpanel-cli/root-user-commands/#adding-a-user)
    - [user:delete](/cloudpanel-cli/root-user-commands/#deleting-a-user)
    - [user:list](/cloudpanel-cli/root-user-commands/#list-users)
  - Site:
    - [site:install:certificate](/cloudpanel-cli/root-user-commands/#installing-a-certificate)

**Geliştirmeler**
- Yeni WordPress siteleri için site kullanıcı adı ve şifresi manuel olarak girilebilir.

**Hata Düzeltmeleri**
- [#278 CLI'da alan adı alanını normalize etme ihtiyacı](https://github.com/cloudpanel-io/cloudpanel-ce/issues/278)
- [#284 CLPCTL - Şifre içindeki özel karakterlerin yanlış hata vermesine neden olması](https://github.com/cloudpanel-io/cloudpanel-ce/issues/284)
- Çeviri Düzeltmeleri

**Güvenlik**
- Kritik (CVE-2023-33747): Kullanıcıdan root yetkisine yükselme. Bildirim ve test için Muhammad'a büyük teşekkürler (datack.my, host.sabily.info)
- OS Komut Enjeksiyonu. Bildirim ve test için Laurence'a büyük teşekkürler (crowdsec.net)

## v2.2.2 - [2023-04-03]

**Yeni**
- [MariaDB 10.11 LTS Desteği](https://mariadb.com/kb/en/changes-improvements-in-mariadb-1011/)
- İbranice
- Japonca

**Hata Düzeltmeleri**
- [#245 Yeni Ters Proxy | htdocs www.site.com dizinlerindeki root klasör izinleri](https://github.com/cloudpanel-io/cloudpanel-ce/issues/245)
- [#254 Site yolu / kopyala ve yapıştır sorunları](https://github.com/cloudpanel-io/cloudpanel-ce/issues/254)
- Çeviri Düzeltmeleri

## v2.2.1 - [2023-02-27]

**Yeni**
- [Ters Proxy](../frontend-area/add-site/#create-a-reverse-proxy)
- Çince (Basitleştirilmiş)
- Çince (Tayvan)

**Hata Düzeltmeleri**
- [#210 Karanlık mod: Tablo kenarlıklarının eksik olması](https://github.com/cloudpanel-io/cloudpanel-ce/issues/210)
- [#220 Hetzner Snapshot temizliği, bir snapshot'ta silme koruması etkinleştirildiğinde istisna atıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/220)
- Çeviri Düzeltmeleri

## v2.2.0 - [2022-12-08]

**Yeni**
- [PHP 8.2 Desteği Ekle](https://feature-requests.cloudpanel.io/posts/15/support-for-php-8-2)
- [Karanlık Mod](https://feature-requests.cloudpanel.io/posts/1/add-dark-theme)
- Node.js 18 LTS Desteği

**Geliştirmeler**
- [Dosya Yöneticisi, Dizinleri Dosyaların Önünde Sıralar](https://feature-requests.cloudpanel.io/posts/30/file-manager-order-directories-before-files)

**Hata Düzeltmeleri**
- [#208 Varsayılan port 3306'yı kullanmayan bir veritabanı sunucusu ile WordPress sitesi oluşturulamıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/208)
- Çeviri Düzeltmeleri

## v2.1.0 - [2022-11-03]

**Yeni**
- [Varnish Cache Desteği](../frontend-area/varnish-cache/introduction/)

**Geliştirmeler**
- Site Kullanıcı Şifre Güncellemesi için Şifre Bağlantısı Oluşturma

**Hata Düzeltmeleri**
- [#138 WordPress Yönetici

**Yeni**
- [Varnish Cache Desteği](../frontend-area/varnish-cache/introduction/)

**Geliştirmeler**
- Site Kullanıcı Şifre Güncellemesi için Şifre Bağlantısı Oluşturma

**Hata Düzeltmeleri**
- [#138 WordPress Yönetici girişi özel karakter içeren şifrelerle çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/138)
- [#150 Cron Job PHP sürüm sorunu](https://github.com/cloudpanel-io/cloudpanel-ce/issues/150)
- [#153 Özel Rclone Yapılandırma Yedekleme Zamanı](https://github.com/cloudpanel-io/cloudpanel-ce/issues/153)
- Çeviri Düzeltmeleri

## v2.0.4 - [2022-09-08]

**Yeni**
- Eklenen Diller: Arapça, Ukraynaca

**Hata Düzeltmeleri**
- [#137 Uzaktan yedeklemeler, yapılandırılan saklama süresinden sonra silinmiyor; yalnızca SFTP depolama sağlayıcısını etkiliyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/137)
- Çeviri Düzeltmeleri
- MariaDB 10.9 Desteği

## v2.0.3 - [2022-08-24]

**Yeni**
- [Uzaktan Yedekleme](../admin-area/backups/) (Amazon S3, Wasabi, Digital Ocean Spaces, Dropbox, Google Drive, SFTP ve Özel Rclone Yapılandırması)
- Eklenen Diller: İtalyanca, Endonezce, İspanyolca, Romence, Rusça, Lehçe, Vietnamca

**Hata Düzeltmeleri**
- [#115 Ek direktifler yapılandırmasında " kullanımı CloudPanel'i bozuyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/115)
- [#122 Alan Adında Sayı Kullanımı WordPress Kurulumunu Engelliyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/122)
- [#132 413 İstek Varlık Çok Büyük, Dosya Yöneticisi üzerinden 512 MB üzeri dosya yükleme özel alan adı ile çalışmıyor](https://github.com/cloudpanel-io/cloudpanel-ce/issues/132)

## v2.0.2 - [2022-07-04]

**Hata Düzeltmeleri**
- Varsayılan WP ayarlarından FS_CHMOD_FILE ve FS_CHMOD_DIR kaldırıldı

## v2.0.1 - [2022-07-04]

**Yeni**
- Brezilya Portekizcesi çevirisi eklendi
- Türkçe çevirisi eklendi
- Ubuntu ve Debian için MariaDB 10.8 desteği
- Varsayılan WP ayarları eklendi:
  - WP_MEMORY_LIMIT: 256M
  - WP_MAX_MEMORY_LIMIT: 512M
  - FS_CHMOD_FILE: 0644
  - FS_CHMOD_DIR: 0755

**Hata Düzeltmeleri**
- wp.blog.eu.org gibi iki seviyeli bir alt alan adıyla Site Kullanıcı Adı oluşturulamadı
- Çeviri Düzeltmeleri

## v2.0.0 - [2022-06-20]

- İlk Yayın
