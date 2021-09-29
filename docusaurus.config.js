const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'IcePanel Docs',
  tagline: 'Design structured diagrams, built to increase your teams trust in your docs.',
  url: 'https://docs.icepanel.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IcePanel',
  projectName: 'ice-docs',
  
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: 'https://github.com/icepanel/ice-docs/edit/main',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        }
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: true
      },
      navbar: {
        title: 'IcePanel Docs',
        logo: {
          alt: 'IcePanel logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'http://u.icepanel.io/9e75fdaf',
            label: 'IcePanel',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'IcePanel',
            items: [
              {
                label: 'For Architects',
                href: 'https://icepanel.io/?human=architect',
              },
              {
                label: 'For Developers',
                href: 'https://icepanel.io/?human=developer',
              },
              {
                label: 'For Product',
                href: 'https://icepanel.io/?human=product',
              },
              {
                label: 'C4 Model',
                href: 'https://icepanel.io/c4-model',
              },
              {
                label: 'Pricing',
                href: 'https://icepanel.io/pricing',
              },
              {
                label: 'Roadmap',
                href: 'https://icepanel.io/roadmap',
              },
              {
                label: 'Docs',
                to: '/'
              },
            ],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/26254332/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ice_panel/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/icepanel/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Terms of service',
                href: 'https://icepanel.io/terms-of-service',
              },
              {
                label: 'Privacy policy',
                href: 'https://icepanel.io/privacy-policy',
              },
            ],
          },
          {
            title: 'Contact us',
            items: [
              {
                label: 'Message us',
                href: 'https://icepanel.io/contact?human=architect',
              },
              {
                label: 'mail@icepanel.io',
                href: 'mailto:mail@icepanel.io',
              },
            ],
          },
        ],
        copyright: `VMLWEB Ltd © 8013081`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
    }),
});
