module.exports = {
  title: 'CloudPanel CE | Documentation',
  tagline: 'CloudPanel CE | Documentation',
  url: 'https://github.com/cloudpanel-io/docs/tree/master/docs/cloudpanel-ce',
  baseUrl: '/docs/cloudpanel-ce/',
  favicon: 'img/favicon.png',
  organizationName: 'CloudPanel',
  projectName: 'CloudPanelCE',
  themeConfig: {
    disableDarkMode: true,
    algolia: {
      appId: 'MTBF0OPI8S',
      apiKey: '4a68c2ae70048709e0852b5462dee94d',
      indexName: 'cloudpanel',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      logo: {
        alt: 'CloudPanel CE | Documentation',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'classic',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Contact',
              href: '#',
            },
            {
              label: 'Imprint',
              to: '#',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cloudpanel',
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudpanel.io',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://www.cloudpanel.io/blog/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cloudpanel-io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudpanel_io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} cloudpanel.io`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cloudpanel-io/docs/tree/master/cloudpanel-ce',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
