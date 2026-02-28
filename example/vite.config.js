import { resolve } from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-daum-postcode": resolve(import.meta.dirname, "../src"),
    },
  },
  build: {
    outDir: resolve(import.meta.dirname, "../example-dist"),
  },
});
