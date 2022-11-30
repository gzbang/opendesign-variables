import path from 'path';
import { defineConfig } from 'vitepress';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    cssCodeSplit: true,
  },
  publicDir: path.resolve(__dirname, './.vitepress/public'),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './.vitepress/src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
});
