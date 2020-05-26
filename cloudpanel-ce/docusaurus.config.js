const versions = require('./versions.json');

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
    gtag: {
      trackingID: 'UA-88888',
    },
    algolia: {
      apiKey: '4a68c2ae70048709e0852b5462dee94d',
      indexName: 'cloudpanel',
      algoliaOptions: {
        facetFilters: [`version:1`]
      },
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      logo: {
        alt: 'CloudPanel CE | Documentation',
        src: 'img/logo.svg',
      },
      links: [
        {
          label: 'Versions',
          to: 'docs/introduction', // "fake" link
          position: 'left',
          activeBasePath: 'docs',
          items: [
            {
              label: versions[0],
              to: '/introduction',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `/${version}/introduction`,
            }))
          ],
        },
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
      ],
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
