const versions = require('./versions.json');

module.exports = {
  title: 'CloudPanel CE | Documentation',
  tagline: 'CloudPanel CE | Documentation',
  url: 'https://www.cloudpanel.io',
  baseUrl: '/docs/v1/',
  favicon: 'img/favicon.png',
  onBrokenLinks: 'throw',
  organizationName: 'CloudPanel',
  projectName: 'CloudPanelCE',
  /*
  scripts: [
    'https://www.cloudpanel.io/docs/cloudpanel-ce/js/feedback.js',
  ],
  */
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    gtag: {
      trackingID: 'UA-168148528-1',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      logo: {
        alt: 'CloudPanel CE | Documentation',
        src: 'img/logo.svg',
        href: 'https://www.cloudpanel.io/docs/cloudpanel-ce/introduction',
        target: '_self'
      },
      items: [
        /*
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
        */
        /*{to: 'blog', label: 'Blog', position: 'left'},*/
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Overview',
              href: 'https://www.cloudpanel.io/product/',
            },
            {
              label: 'Technology',
              href: 'https://www.cloudpanel.io/product/#technology-stack',
            },
            {
              label: 'Features',
              href: 'https://www.cloudpanel.io/product/#features',
            },
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Documentation',
              href: 'https://www.cloudpanel.io/docs/cloudpanel-ce/',
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudpanel.io',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/cloudpanel-io/'
            },
            {
              label: 'Discord',
              href: 'https://discord.cloudpanel.io/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/mgt-commerce-gmbh',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloudpanel_io',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: 'https://www.cloudpanel.io/about-us/',
            },
            {
              label: 'Contact Us',
              href: 'https://www.cloudpanel.io/contact/',
            },
            {
              label: 'Feedback',
              href: 'https://www.cloudpanel.io/feedback/',
            },
            {
              label: 'Blog',
              href: 'https://www.cloudpanel.io/blog/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              href: 'https://www.cloudpanel.io/imprint/',
            },
            {
              label: 'License Terms',
              to: 'https://www.cloudpanel.io/license-terms/',
            },
            {
              label: 'Privacy Policy',
              to: 'https://www.cloudpanel.io/privacy-policy/',
            },
            {
              label: 'GDPR',
              to: 'https://www.cloudpanel.io/gdpr/',
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
          routeBasePath: '/',
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
  plugins: [require.resolve('docusaurus-lunr-search')],
};
