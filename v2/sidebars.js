module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'CloudPanel',
      items: [
        'introduction',
        'requirements',
        'technology-stack',
        'changelog',
        'update',
        'support',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started',
        {
          type: 'category',
          label: 'Installation',
          items: [
            {
              type: 'category',
              label: 'Amazon Web Services',
              items: [
                'getting-started/amazon-web-services/installation/ami',
                'getting-started/amazon-web-services/installation/installer',
              ]
            },
            {
              type: 'category',
              label: 'Digital Ocean',
              items: [
                'getting-started/digital-ocean/installation/marketplace',
                'getting-started/digital-ocean/installation/installer',
              ]
            },
            {
              type: 'category',
              label: 'Hetzner Cloud',
              items: [
                'getting-started/hetzner-cloud/installation/installer',
              ]
            },
            {
              type: 'category',
              label: 'Google Compute Engine',
              items: [
                'getting-started/google-compute-engine/installation/installer',
              ]
            },
            {
              type: 'category',
              label: 'Microsoft Azure',
              items: [
                'getting-started/microsoft-azure/installation/installer',
              ]
            },
            {
              type: 'category',
              label: 'Vultr',
              items: [
                'getting-started/vultr/installation/marketplace',
                'getting-started/vultr/installation/installer',
              ]
            },
            'getting-started/other',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Frontend Area',
      items: [
        'frontend-area/add-site',
        'frontend-area/account',
        'frontend-area/settings',
        'frontend-area/vhost',
        'frontend-area/databases',
        'frontend-area/tls',
        'frontend-area/security',
        'frontend-area/ssh-ftp',
        'frontend-area/file-manager',
        'frontend-area/cron-jobs',
        'frontend-area/logs',
      ],
    },
    {
      type: 'category',
      label: 'Admin Area',
      items: [
        'admin-area/users',
        'admin-area/events',
        'admin-area/instance',
        'admin-area/security',
        'admin-area/settings',
        {
          type: 'category',
          label: 'Cloud Features',
          items: [
            'admin-area/cloud-features/amazon-web-services',
            'admin-area/cloud-features/digital-ocean',
            'admin-area/cloud-features/hetzner-cloud',
            'admin-area/cloud-features/google-compute-engine',
            'admin-area/cloud-features/vultr',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'CloudPanel CLI',
      items: [
        'cloudpanel-cli/root-user-commands',
        'cloudpanel-cli/site-user-commands',
      ],
    },
    {
      type: 'category',
      label: 'Node.js',
      items: [
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'nodejs/deployment/pm2',
          ],
        },
        {
          type: 'category',
          label: 'Applications',
          items: [
            'nodejs/applications/strapi',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'PHP',
      items: [
        {
          type: 'category',
          label: 'Applications',
          items: [
            'php/applications/cakephp',
            'php/applications/codeigniter',
            'php/applications/drupal',
            'php/applications/fuelphp',
            'php/applications/joomla',
            'php/applications/laminas',
            'php/applications/laravel',
            'php/applications/magento',
            'php/applications/matomo',
            'php/applications/mautic',
            'php/applications/moodle',
            'php/applications/neos',
            'php/applications/nextcloud',
            'php/applications/owncloud',
            'php/applications/prestashop',
            'php/applications/shopware',
            'php/applications/slim',
            'php/applications/symfony',
            'php/applications/typo3',
            'php/applications/woocommerce',
            'php/applications/wordpress',
            'php/applications/yii',
            'php/applications/other',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          items: [
            'php/guides/building-a-php-extension',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Python',
      items: [
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'python/deployment/uwsgi',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          items: [
            'python/guides/adding-a-python-version',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Best Practices',
          items: [
            'guides/best-practices/security',
          ],
        },
      ],
    },
  ]
};
