import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    VitePWA({
      mode: "production",
      base: "/",
      includeAssets: ["favicon.svg"],
      manifest: {
        background_color: "#000000",
        display: "fullscreen",
        name: "PWA Router",
        short_name: "PWA Router",
        start_url: "/",
        theme_color: "#ffffff",
        icons: [
          {
            src: "vue.png", // <== don't add slash, for testing
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/vue.png", // <== don't remove slash, for testing
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "vue.png", // <== don't add slash, for testing
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
