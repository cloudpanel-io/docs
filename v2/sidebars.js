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
            'getting-started/installation-aws',
            {
              type: 'category',
              label: 'Digital Ocean',
              items: [
                'getting-started/installation-digital-ocean-marketplace',
                'getting-started/installation-digital-ocean-installer',
              ]
            },
            'getting-started/installation-hetzner-cloud',
            'getting-started/installation-google-cloud',
            'getting-started/installation-microsoft-azure',
            'getting-started/installation-vultr',
            'getting-started/installation-other',
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Frontend Area',
      items: [
        'frontend-area/sites',
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
        'cloudpanel-cli/cli-commands',
      ],
    },
  ]
};
