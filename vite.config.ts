import { defineConfig } from 'vite';
//@ts-ignore
import viteEslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    UnoCSS({
      presets: [presetAttributify({}), presetUno()]
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
