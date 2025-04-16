import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        legalNotice: path.resolve(__dirname, 'legal-notice.html'),
        notfound: path.resolve(__dirname, '404.html'),
      },
    },
  },
});
