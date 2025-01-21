import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fsExtra from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const { copySync, existsSync } = fsExtra;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-assets',
      apply: 'build',
      closeBundle() {
        const srcPath = 'assets';
        const destPath = 'dist/assets';
        if (existsSync(srcPath)) {
          copySync(srcPath, destPath);
        } else {
          console.error(`Error: ${srcPath} does not exist.`);
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: () => {
          return 'assets/[name][extname]';
        },
      },
    },
  },
});