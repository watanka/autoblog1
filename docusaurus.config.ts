import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Silver Archive',
  tagline: '',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://watankah.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'watankah.com', // 실제 GitHub 레포지토리 이름으로 수정
  organizationName: 'watanka', // GitHub 사용자명 또는 조직명
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-R4558EgQNVbHpLSsryo21eodTWzbPVhtQWsNxFfW1ldxnZfE6EGGkhwn0uqAxsD3',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'ALL POSTS',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '/tags/**',
            '/archive/**',
            '/search/**',
            '/404.html',
            '/*.js',
            '/*.jsx',
            '/*.ts',
            '/*.tsx',
          ],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-BYF98EMW7Y',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    metadata: [
      {
        name: 'google-adsense-account',
        content: 'ca-pub-xxxxxxxxxxxxxxxx'
      },
      {
        name: 'keywords',
        content: 'xxx',
      },
      {
        name: 'description',
        content: 'xxx',
      },
    ],
    image: 'img/profile.jpg',
    navbar: {
      title: 'AutoBlog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/watanka',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
