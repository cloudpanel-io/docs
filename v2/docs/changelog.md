---
id: changelog
title: Changelog
sidebar_label: Changelog
---

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