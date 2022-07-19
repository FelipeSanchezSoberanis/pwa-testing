import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        short_name: "VueJS",
        icons: [
          { src: "src/assets/vue.png", sizes: "192x192", type: "image/png" },
          { src: "src/assets/vue.png", sizes: "512x512", type: "image/png" },
        ],
        start_url: "/",
        display: "standalone",
        prefer_related_applications: false,
        theme_color: "#B12A34",
        background_color: "#B12A34",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
