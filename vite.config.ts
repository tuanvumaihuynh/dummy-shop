import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: './src/typed-router.d.ts',
      importMode: 'async'
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      defaultLayout: 'DefaultLayout'
      // Specify the path to the layouts directory vite not reloading, move all layout to layouts dir until this is fixed
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts/issues/142
      // layoutsDirs: ['src/layouts', 'src/features/**/layouts']
      // pagesDirs: []
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', VueRouterAutoImports],
      dts: './src/auto-imports.d.ts',
      viteOptimizeDeps: true
    }),

    // https://github.com/vuejs/devtools-next
    vueDevTools(),
    Vue()
  ]
})
