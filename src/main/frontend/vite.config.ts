import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag: string): boolean => tag.startsWith('md-')
      }
    }
  }), vueJsx({
    isCustomElement: (tag: string): boolean =>
      tag.startsWith('md-')
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  clearScreen: true,
  base: '/new-obj',
  build: {
  emptyOutDir: true,
  // to docs
  // outDir: '../../../docs',
  // to WEB-INF
  outDir: '../webapp',
  sourcemap: true,
  manifest: true,
  minify: 'esbuild'
  }
})
