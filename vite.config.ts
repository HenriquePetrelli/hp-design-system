import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    }),

    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-last',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: ['fill', 'stroke']
            }
          }
        ]
      }
    }),

    // Copiar assets da lib (fontes e ícones)
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/assets/fonts/*.{ttf,woff,woff2}'),
          dest: 'assets/fonts'
        },
        {
          src: path.resolve(__dirname, 'src/assets/icons/*.svg'),
          dest: 'assets/icons'
        },
        {
          src: path.resolve(__dirname, 'src/assets/icons/icon.json'),
          dest: 'assets/icons'
        }
      ]
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/components'),
      '@composables': path.resolve(__dirname, './src/composables')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        implementation: 'sass'
      }
    }
  },

  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HpDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `hp-design-system.${format}.js`
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },

        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || ''

          if (name.endsWith('.css')) {
            return 'style.css'
          }

          if (/\.(ttf|otf|woff|woff2)$/i.test(name)) {
            return 'assets/fonts/[name][extname]'
          }

          if (/\.svg$/i.test(name)) {
            return 'assets/icons/[name][extname]'
          }

          return 'assets/[name][extname]'
        }
      }
    },

    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: true,
    minify: false,
    target: 'esnext',
    assetsInlineLimit: 0
  }
})
