// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as BaseName from './publish.config.json'

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
            tag.startsWith('md') || tag.startsWith('lit')
        }
      }
    }),
    vueJsx({
      isCustomElement: (tag: string): boolean =>
        tag.startsWith('md') || tag.startsWith('lit')
    })
  ],
  base: BaseName.base,
  root: './src',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
  }
});
