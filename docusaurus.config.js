// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BAD Tools Community Toolkit',
  tagline: 'Blended Agile Delivery Toolkit',
  url: 'https://bad.tools',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/BADLogo.png', 

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'Warning: Alpha release',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'BAD Tools Community Toolkit',
        logo: {
          alt: 'BAD.Tools',
          src: 'img/BADLogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Toolkit',
          }, 
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://burendo.com" target="_blank"><IMG src="/img/sponsor-burendo.png" width=200></a>',
          },    
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Toolkit',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Frameworks & Toolkits',
                to: '/docs/Frameworks%20and%20Toolkits/intro',
              },
              {
                label: 'Areas of Focus',
                to: '/docs/Areas%20of%20Focus/intro',
              },
              {
                label: 'Playbooks & Cheatsheets',
                to: '/docs/Playbooks/intro',
              },
              {
                label: 'Templates & Examples',
                to: '/docs/Tools/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'License',
                href: 'https://creativecommons.org/licenses/by/4.0/',
              },{
                label: 'Twitter',
                href: 'https://twitter.com/burendouk',
              },
              {
                label: 'LinkedIn',
                href: 'https://twitter.com/burendouk',
              },
              {
                label: 'Slack',
                href: 'https://twitter.com/burendouk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'BAD.tools',
                href: 'https://bad.tools',
              },              {
                label: 'Burendo',
                href: 'https://burendo.com',
              },
              {
                label: 'Community Toolkit GitHub',
                href: 'https://github.com/BurendoUK/bad-community-toolkit',
              },
            ],
          },
        ],
        copyright: `<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png"/></a> by <a href="https://bad.tools" target="_blank"><img src="/img/BADLogo.png" width=15> The BAD Toolkit</a>. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
