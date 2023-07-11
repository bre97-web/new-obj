import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (): boolean => true
      }
    }
  }),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  clearScreen: true,
  base: '/new-obj',
  build: {
    emptyOutDir: true,
    outDir: '../../docs',
    sourcemap: true,
    manifest: true,
    minify: 'esbuild'
  }
})
