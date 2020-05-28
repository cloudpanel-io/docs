module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'CloudPanel CE',
      items: [
        'introduction',
        'requirements',
        'technology-stack',
        'changelog',
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
            'installation-aws',
            'installation-digital-ocean',
            'installation-google-cloud',
            'installation-microsoft-azure',
            'installation-other',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Frontend Area',
      items: [
        'account',
        'domains',
        'security',
        'users',
        'databases',
        'cron-jobs',
        'services',
        {
          type: 'category',
          label: 'Cloud Features',
          items: [
            'cloud-features-aws',
            'cloud-features-digital-ocean',
            'cloud-features-google-cloud',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Admin Area',
      items: [
        'admin-users',
        'admin-vhost-templates',
        'admin-database-servers',
        'admin-action-log',
        'admin-settings',
      ],
    },
    {
      type: 'category',
      label: 'CloudPanel CLI',
      items: [
        'cloudpanel-cli-commands',
      ],
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        {
          type: 'category',
          label: 'CakePHP',
          items: [
            'application-cakephp-4'
          ]
        },
        {
          type: 'category',
          label: 'CodeIgniter',
          items: [
            'application-codeigniter-4'
          ]
        },
        {
          type: 'category',
          label: 'Drupal',
          items: [
            'application-drupal-8',
            'application-drupal-9',
          ]
        },
        {
          type: 'category',
          label: 'FuelPHP',
          items: [
            'application-fuel-php-1.8'
          ]
        },
        {
          type: 'category',
          label: 'Joomla',
          items: [
            'application-joomla-3.9'
          ]
        },
        {
          type: 'category',
          label: 'Laminas',
          items: [
            'application-laminas',
          ]
        },
        {
          type: 'category',
          label: 'Laravel',
          items: [
            'application-laravel-7',
          ]
        },
        {
          type: 'category',
          label: 'Magento',
          items: [
            'application-magento-1',
            'application-magento-2',
          ]
        },
        {
          type: 'category',
          label: 'Neos',
          items: [
            'application-neos-5',
          ]
        },
        {
          type: 'category',
          label: 'Nextcloud',
          items: [
            'application-nextcloud-18',
          ]
        },
        {
          type: 'category',
          label: 'OroCommerce',
          items: [
            'application-oro-commerce-4.1',
          ]
        },
        {
          type: 'category',
          label: 'OroCrm',
          items: [
            'application-oro-crm-4.1',
          ]
        },
        {
          type: 'category',
          label: 'ownCloud',
          items: [
            'application-owncloud-10.4',
          ]
        },
        {
          type: 'category',
          label: 'PrestaShop',
          items: [
            'application-presta-shop-1.7',
          ]
        },
        {
          type: 'category',
          label: 'Shopware',
          items: [
            'application-shopware-6',
          ]
        },
        {
          type: 'category',
          label: 'Slim',
          items: [
            'application-slim-4',
          ]
        },
        {
          type: 'category',
          label: 'Symfony',
          items: [
            'application-symfony-4',
            'application-symfony-5',
          ]
        },
        {
          type: 'category',
          label: 'TYPO3',
          items: [
            'application-typo3-v10',
          ]
        },
        {
          type: 'category',
          label: 'WooCommerce',
          items: [
            'application-wocommerce',
          ]
        },
        {
          type: 'category',
          label: 'WordPress',
          items: [
            'application-wordpress-5',
          ]
        },
        {
          type: 'category',
          label: 'Yii',
          items: [
            'application-yii-2',
          ]
        },
      ],
    },
  ]
};
