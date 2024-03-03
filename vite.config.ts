import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windiCSSPlugin from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    react(),
    windiCSSPlugin(),
  ],
});
