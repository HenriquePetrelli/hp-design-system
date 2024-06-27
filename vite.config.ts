import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(), // Use @vitejs/plugin-vue to process .vue files
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'hp-design-system',
      formats: ['es'], // Build as ES module
      fileName: (format) => `hp-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Tratar 'vue' como uma dependência externa
      output: {
        exports: 'named', // Usar exportações nomeadas
        globals: {
          vue: 'Vue', // Fornecer a variável global 'Vue' para a construção UMD
        },
      },
    },
    emptyOutDir: false, // Manter a pasta de tipos gerados pelo TypeScript
  },
});
