import { SITE } from "../app/utils/site-info.js";

export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-08-22",
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/fanlinks.css"
  ],
  app: {
    rootId: "app",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        "lang": "en",
        "data-bs-theme": "dark"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#181818" },
        { rel: "preconnect", href: "https://bayza.music" }
      ]
    }
  },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxt/eslint"
  ],
  icon: { mode: "svg", serverBundle: "remote" },
  features: {
    inlineStyles: false
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"]
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: ["/images/*", "/font/*"]
        }
      }
    }
  },
  site: {
    url: SITE.url
  },
  sitemap: {
    sources: ["/api/__sitemap"],
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } },
    "/api/_nuxt_icon/**": { cache: { maxAge: 1.577e+7 } }
  },
  eslint: {
    config: {
      autoInit: false,
      stylistic: true
    }
  }
});
