import path from "node:path";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(import.meta.dirname, "lib"),
    lib: {
      entry: path.resolve(import.meta.dirname, "entry.ts"),
      name: "VueDaumPostcode",
      formats: ["es", "umd"],
      fileName: "vue-daum-postcode",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    sourcemap: true,
  },
});
