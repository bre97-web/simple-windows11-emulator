// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import publish from './scripts/publish.json'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    plugins: [
        react(),
    ],
    base: publish.base,
    root: './src',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
        sourcemap: true,
        manifest: true,
    }
})
