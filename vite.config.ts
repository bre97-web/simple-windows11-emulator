// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string): boolean =>
            tag.startsWith('md') || tag.startsWith('lit') || tag.startsWith('fluent')
        }
      }
    }),
    vueJsx({
      isCustomElement: (tag: string): boolean =>
        tag.startsWith('md') || tag.startsWith('lit') || tag.startsWith('fluent')
    })
  ],
  base: '/simple-windows11-emulator',
  root: './src',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
  }
});
