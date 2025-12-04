---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v2.5.3 - [2025-12-04]
**New**
- PHP 8.5 Support

**Bug Fixes**
- [#684 Cron Jobs interface do not accept a range of months](https://github.com/cloudpanel-io/cloudpanel-ce/issues/684)
- [#693 Unfortunately, there are problems installing from the cloud on Debian 13.](https://github.com/cloudpanel-io/cloudpanel-ce/issues/693)
- Translation Fixes

**Enhancements:**
- Updated phpMyAdmin to 5.2.3
- Updated WP-CLI to 2.12.0

**Security:**
- Security improvements (Yell Phone Naing)

## v2.5.2 - [2025-08-05]
**New**
- MySQL 8.4 Support
- Translations: Finnish

**Bug Fixes**
- [#621 Manage link returns a 404 for .zip domains](https://github.com/cloudpanel-io/cloudpanel-ce/issues/621)
- [#638 Amazon S3 Backup Permissions Bug](https://github.com/cloudpanel-io/cloudpanel-ce/issues/638)
- [#661 File editing isn't working through File Manager in Cloudpanel UI](https://github.com/cloudpanel-io/cloudpanel-ce/issues/661)
- [#662 Hetzner Snapshot creation issues](https://github.com/cloudpanel-io/cloudpanel-ce/issues/662)
- [#669 Custom rule in Firewall adds ProFTPD rule at same time](https://github.com/cloudpanel-io/cloudpanel-ce/issues/669)
- Translation Fixes

**Security:**
- CloudPanel's PHP-FPM Socket Misconfiguration (Aizat)
- Security improvements (Yell Phone Naing)

## v2.5.1 - [2025-03-03]
**Bug Fixes**
- [#542 Issue deleting subfolder named '0' causes browser freeze and deletes parent folder](https://github.com/cloudpanel-io/cloudpanel-ce/issues/542)
- [#558 Incorrect file permissions on new sites](https://github.com/cloudpanel-io/cloudpanel-ce/issues/558)
- [#582 Cron refuses a command which contains 'admin'](https://github.com/cloudpanel-io/cloudpanel-ce/issues/582)
- Translation Fixes

**Enhancements:**
- Updated phpMyAdmin to 5.2.2

**Security:**
- Security improvements (Yell Phone Naing)

## v2.5.0 - [2024-11-26]
**New**
 - PHP 8.4 Support
 - MariaDB 11.4 Support
 - Translations: Hungarian, Slovak, Thai

**Bug Fixes**
- [#471 username error](https://github.com/cloudpanel-io/cloudpanel-ce/issues/471)
- [#476 Shebang incorrect in /usr/bin/clpctl](https://github.com/cloudpanel-io/cloudpanel-ce/issues/476)
- [#484 Unexpected brackets at the beginning of files](https://github.com/cloudpanel-io/cloudpanel-ce/issues/484)
- [#500 Custom cron commands are not working](https://github.com/cloudpanel-io/cloudpanel-ce/issues/500)
- [#505 Web based File Manager does not upload files](https://github.com/cloudpanel-io/cloudpanel-ce/issues/505)
- [#511 .well-known directory deleted after certificate renew](https://github.com/cloudpanel-io/cloudpanel-ce/issues/511)
- [#527 Unable to login with site user via ssh key when ftp user is created (Thanks to ccMatrix)](https://github.com/cloudpanel-io/cloudpanel-ce/issues/527)
- [#530 File permissions revert to 0770 after file modification](https://github.com/cloudpanel-io/cloudpanel-ce/issues/530)
- [#535 "Additional Configuration Directives" doesn't allow for spaces in value](https://github.com/cloudpanel-io/cloudpanel-ce/issues/535)
- [#540 S3 backup - Region - Middle East (UAE) me-central-1 missing](https://github.com/cloudpanel-io/cloudpanel-ce/issues/540)
- Translation Fixes

**Enhancements:**
- New AWS regions for S3 remote backup

**Security:**
- Privilege Escalation from clpctlWrapper command (Yell Phone Naing) (HIGH)
- Privilege Escalation: Site User Access Allows Linux Password Changes (HIGH) (Yell Phone Naing)
- Server IP disclosure despite using Cloudflare (Yell Phone Naing)

## v2.4.2 - [2024-05-21]
**New**
 - Debian 12 and Ubuntu 24.04 with [HTTP/3](../frontend-area/vhost/#http3) Support
 - Node.js 22 LTS Support
 - Translations: Serbian, Georgian

**Bug Fixes**
- [#427 Cannot rename files in file manager](https://github.com/cloudpanel-io/cloudpanel-ce/issues/427)
- [#430 Comma in cron jobs minute](https://github.com/cloudpanel-io/cloudpanel-ce/issues/430)
- [#434 I think this should be a bug.](https://github.com/cloudpanel-io/cloudpanel-ce/issues/434)
- Translation Fixes

## v2.4.1 - [2024-01-22]

**New**
- Translations: Bosnian

**Enhancements:**
- The issuance of Let's Encrypt certificates is being tested against the staging environment first to avoid rate limit errors
- The performance of creating sites, especially Node.js sites, has been enhanced

**Bug Fixes**
- [#382 phpMyAdmin sorting not working](https://github.com/cloudpanel-io/cloudpanel-ce/issues/382)
- [#383 Instance Reboot at Admin/Instance/Setting doesn't reboot and block auto login from login pages](https://github.com/cloudpanel-io/cloudpanel-ce/issues/383)
- [#406 CloudPanel Dashboard doesn't when using the AWS EC2 installer.](https://github.com/cloudpanel-io/cloudpanel-ce/issues/406)
- Translation Fixes

**Security**
- Vulnerability that allows a user with the lowest privilege to conduct a session hijacking, subsequently gaining unauthorized access to the admin and other user accounts. (Muhammad Aizat, datack.my)

## v2.4.0 - [2023-11-27]

**New**
- PHP 8.3 Support
- Node.js 20 LTS Support
- Translations: Danish, Czech

**Enhancements:**
- The databases are backed up prior to executing remote backup
- The site settings and vhost are being included in the remote backup file
- Updated phpMyAdmin to 5.2.1

**Bug Fixes**
- [#329 duplicate settings key in file-manager.conf](https://github.com/cloudpanel-io/cloudpanel-ce/issues/329)
- [#338 The original certificate is not removed when you delete a web application](https://github.com/cloudpanel-io/cloudpanel-ce/issues/338)
- [#355 Login Page Autocomplete/Password Manager Issue](https://github.com/cloudpanel-io/cloudpanel-ce/issues/355)
- [#359 When you delete a website the nodejs app started with PM2 is not deleted](https://github.com/cloudpanel-io/cloudpanel-ce/issues/359)
- [#363 Custom v2-varnish vhost templates cause a 403 page and missing Varnish settings](https://github.com/cloudpanel-io/cloudpanel-ce/issues/363)
- [#367 phpMyAdmin basic auth doesn't work when CloudPanel basic auth is enabled](https://github.com/cloudpanel-io/cloudpanel-ce/issues/367)

**Security**
- File Manager: New file chown issue (CVE-2023-43880)
- File Manager: Zip symlink (BSDTAR) (CVE-2023-43881) 
- OS Command Injection from chmod file (CVE-2023-46157, Muhammad Aizat, datack.my) 
- Command Injection (Yell Phone Naing)

## v2.3.2 - [2023-08-21]

**New**
- Translation: Koran, Persian

**Bug Fixes**
- Translation Fixes

Enhancements:
- Vietnamese, Chinese Translation
- RTL stylesheet improvements

**Security**
- [#298 MySQL Root Password Leak from site user (Thanks to Yell Phone Naing)](https://github.com/cloudpanel-io/cloudpanel-ce/issues/298)
- Critical: Privilege Escalation to root from user (Thanks to Yell Phone Naing)

## v2.3.1 - [2023-06-20]

**Bug Fixes**
- [#287 Colon in remote cloud backup breaks most filesystems](https://github.com/cloudpanel-io/cloudpanel-ce/issues/287)
- [#290 File Manager Extract not working since v2.3.0](https://github.com/cloudpanel-io/cloudpanel-ce/issues/290)
- [#293 Strange \n\n inside the certificate file used for custom domain.](https://github.com/cloudpanel-io/cloudpanel-ce/issues/293)
- Translation Fixes

**Security**
- Critical (CVE-2023-35885): Insecure file manager cookie authentication (Muhammad Aizat, datack.my)
- Critical (CVE-2023-36630): Insecure File Upload leads to Privilege Escalation and Authentication Bypass (Mohammad Zulfiqar)

## v2.3.0 - [2023-06-06]

**New**
- Translation: Bulgarian
- New CloudPanel CLI Root Commands:
  - User:
    - [user:add](/cloudpanel-cli/root-user-commands/#adding-a-user)
    - [user:delete](/cloudpanel-cli/root-user-commands/#deleting-a-user)
    - [user:list](/cloudpanel-cli/root-user-commands/#list-users)
  - Site:
    - [site:install:certificate](/cloudpanel-cli/root-user-commands/#installing-a-certificate)

**Enhancements**
- The site user name and password can be entered manually for new WordPress sites.

**Bug Fixes**
- [#278 CLI need normalize domain name field](https://github.com/cloudpanel-io/cloudpanel-ce/issues/278)
- [#284 CLPCTL - Problem with special characters in password result false error](https://github.com/cloudpanel-io/cloudpanel-ce/issues/284)
- Translation Fixes

**Security**
- Critical (CVE-2023-33747): Privilege Escalation to root from user. Big thanks to Muhammad (datack.my, host.sabily.info) for reporting and testing
- OS Command Injection. Big thanks to Laurence from crowdsec.net for reporting and testing

## v2.2.2 - [2023-04-03]

**New**
- [MariaDB 10.11 LTS Support](https://mariadb.com/kb/en/changes-improvements-in-mariadb-1011/)
- Hebrew
- Japanese

**Bug Fixes**
- [#245 New Reverse Proxy | root folder permission in htdocs www.site.com folders](https://github.com/cloudpanel-io/cloudpanel-ce/issues/245)
- [#254 Site path / copy and paste issues](https://github.com/cloudpanel-io/cloudpanel-ce/issues/254)
- Translation Fixes

## v2.2.1 - [2023-02-27]

**New**
- [Reverse Proxy](../frontend-area/add-site/#create-a-reverse-proxy)
- Chinese (Simplified)
- Chinese (Taiwan)

**Bug Fixes**
- [#210 Dark mode: Separating table borders missing](https://github.com/cloudpanel-io/cloudpanel-ce/issues/210)
- [#220 Hetzner Snapshot cleanup throws an exception when delete protection is enabled on a snapshot](https://github.com/cloudpanel-io/cloudpanel-ce/issues/220)
- Translation Fixes

## v2.2.0 - [2022-12-08]

**New**
- [Add PHP 8.2 Support](https://feature-requests.cloudpanel.io/posts/15/support-for-php-8-2)
- [Dark Mode](https://feature-requests.cloudpanel.io/posts/1/add-dark-theme)
- Node.js 18 LTS Support

**Improvements**
- [File Manager order Directories before Files](https://feature-requests.cloudpanel.io/posts/30/file-manager-order-directories-before-files)

**Bug Fixes**
- [#208 Unable to create a WordPress site with a database server that doesn't use the default port 3306](https://github.com/cloudpanel-io/cloudpanel-ce/issues/208)
- Translation Fixes

## v2.1.0 - [2022-11-03]

**New**
- [Varnish Cache Support](../frontend-area/varnish-cache/introduction/)

**Improvements**
 - Generate Password Link for Site User Password Update

**Bug Fixes**
- [#138 WordPress Admin login doesn't work with passwords which contains special characters like](https://github.com/cloudpanel-io/cloudpanel-ce/issues/138)
- [#150 Cron Job PHP version issue](https://github.com/cloudpanel-io/cloudpanel-ce/issues/150)
- [#153 Backup Custom Rclone Config Time](https://github.com/cloudpanel-io/cloudpanel-ce/issues/153)
- Translation Fixes

## v2.0.4 - [2022-09-08]

**New**
- Added Languages: Arabic, Ukrainian

**Bug Fixes**
- [#137 Remote backups don't get deleted after configured retention period, it affects only the SFTP storage provider](https://github.com/cloudpanel-io/cloudpanel-ce/issues/137)
- Translation Fixes
- MariaDB 10.9 Support

## v2.0.3 - [2022-08-24]

**New**
- [Remote Backup](../admin-area/backups/) (Amazon S3, Wasabi, Digital Ocean Spaces, Dropbox, Google Drive, SFTP and Custom Rclone Config)
- Added Languages: Italian, Indonesian, Spanish, Romanian, Russian, Polish, Vietnamese

**Bug Fixes**
- [#115 Using " in the additional directives configuration breaks CloudPanel](https://github.com/cloudpanel-io/cloudpanel-ce/issues/115)
- [#122 Numeral in Domain Name Can't Install Wordpress](https://github.com/cloudpanel-io/cloudpanel-ce/issues/122)
- [#132 413 Request Entity Too Large, File Manager file upload over 512MB with custom domain](https://github.com/cloudpanel-io/cloudpanel-ce/issues/132)

## v2.0.2 - [2022-07-04]

**Bug Fixes**
- Remove FS_CHMOD_FILE and FS_CHMOD_DIR from default WP settings

## v2.0.1 - [2022-07-04]

**New**
- Added Portuguese (Brasil) translation
- Added Turkish translation
- MariaDB 10.8 support for Ubuntu and Debian
- Added Default WP settings:
  - WP_MEMORY_LIMIT: 256M
  - WP_MAX_MEMORY_LIMIT: 512M
  - FS_CHMOD_FILE: 0644
  - FS_CHMOD_DIR: 0755

**Bug Fixes**
- Site User Name generation didn't work with a two-level subdomain like wp.blog.eu.org
- Translations fixes

## v2.0.0 - [2022-06-20]

- Initial Release