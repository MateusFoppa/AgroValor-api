/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'client/src/components'),
      '@services': path.resolve(__dirname, 'client/src/services'),
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
});
