import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue-daum-postcode': resolve(__dirname, '../src'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../example-dist'),
  },
})
