import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

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
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'src/assets/fonts/*.ttf'),
          dest: 'assets/fonts'
        },
        {
          src: path.resolve(__dirname, 'src/assets/icons/*.svg'),
          dest: 'assets/icons',
          rename: (name, ext) => `${name}${ext}`
        },
        {
          src: path.resolve(__dirname, 'src/assets/icons/icon.json'),
          dest: 'assets/icons'
        }
      ]
    }),
    cssInjectedByJs({
      styleId: 'hp-design-system-styles',
      topExecutionPriority: false,
      relativeCSSInjection: true
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
        additionalData: `
          @use "@styles/variables" as *;
          @use "@styles/colors" as *;
        `,
        implementation: 'sass'
      }
    }
  },
  assetsInclude: ['**/*.ttf'],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'hp-design-system',
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
          const name = assetInfo.name || 'asset'
          if (name.endsWith('.css')) return 'assets/css/[name][extname]'
          if (/\.(ttf|otf|woff|woff2)$/i.test(name))
            return 'assets/fonts/[name][extname]'
          if (/\.svg$/.test(name)) return 'assets/icons/[name][extname]'
          return 'assets/[name][extname]'
        }
      }
    },
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: true,
    minify: false,
    target: 'esnext',
    assetsInlineLimit: 0
  }
})
