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
          label: 'Magento',
          items: [
            'application-magento-1',
            'application-magento-2',
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
          label: 'WordPress',
          items: [
            'application-wordpress-5',
          ]
        },
      ],
    },
  ]
};
