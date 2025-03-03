import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "promach-craft-brand-sites",
  description: "Developer documentation for promach-craft-brand-sites",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: '🚀 Hosting & Deployment', link: '/01-hosting-and-deployment' },
          { text: '👷 Local Development', link: '/02-ddev-local-development' },
          { text: '🏗️ Front End Build', link: '/03-front-end-build' },
          { text: '🪵 Logging & Debugging', link: '/04-logs-debugging' },
          { text: '🎨 UI Dev', link: '/05-ui-development' },
          { text: '🧪 Testing & Linting', link: '/06-test' },
        ]
      }, {
        text: 'Environments',
        items: [
          {text: '🌐 Production', link: '#todo'},
          {text: '🎭 Staging', link: '#todo'},
          {text: '🧫 Client Testing', link: 'https://promach-craft-brand-sites.client-testing.com/'},
        ]
      }, {
        text: 'Repositories',
        items: [
          { text: 'Zaengle', link: 'https://github.com/zaengle/promach-craft-brand-sites.git' },
        ]
      }, {
        text: 'Resources',
        items: []
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zaengle/promach-craft-brand-sites.git' }
    ],
  },
})
