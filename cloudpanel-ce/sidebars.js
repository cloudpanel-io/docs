module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'style-guide',
        'requirements',
        'technology-stack',
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
    }
  ]
};
