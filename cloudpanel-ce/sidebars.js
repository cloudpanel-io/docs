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
        'style-guide',
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
            'cloud-features-microsoft-azure',
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
        {
          type: 'category',
          label: 'Cloud Features',
          items: [
            'admin-cloud-features-aws',
            'admin-cloud-features-digital-ocean',
            'admin-cloud-features-google-cloud',
            'admin-cloud-features-microsoft-azure',
          ]
        }
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
        'application-drupal',
        'application-magento',
        'application-wordpress',
        'application-wo-commerce',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides-test',
      ],
    },
  ]
};
