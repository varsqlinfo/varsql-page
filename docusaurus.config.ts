import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Varsql",
  tagline: `Varsql은 DB client 프로그램 설치없이 <br>
				<span>웹으로</span> DB를 접속 하여<br>
				SQL을 실행 할 수 있는 어플리케이션 입니다.`,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://varsql.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "varsqlinfo", // Usually your GitHub org/user name.
  projectName: "varsql", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        //languages: ["en", "ko", "zh", "ja"], // language codes
        languages: ["en"], // language codes
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
    //locales: ["en", "fr", "ko", "zh", "ja"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      ko: {
        htmlLang: "ko",
      },
      zh: {
        htmlLang: "zh-CN",
      },
      ja: {
        htmlLang: "ja",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fr: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} varsql, Inc.`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      { name: "keywords", content: "varsql, web db tool" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    navbar: {
      title: "Varsql",
      logo: {
        alt: "Varsql",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/varsqlinfo/varsql",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "License",
              to: "/license",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/varsql",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/varsqlinfo/varsql",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 ~ ${new Date().getFullYear()} Varsql`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
