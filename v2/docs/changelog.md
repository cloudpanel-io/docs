---
id: changelog
title: Changelog
sidebar_label: Changelog
---

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