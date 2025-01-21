import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-favicon',
      apply: 'build',
      closeBundle() {
        const srcPath = 'assets/images/favicon.png';
        const destPath = 'dist/assets/images/favicon.png';
        if (existsSync(srcPath)) {
          copyFileSync(srcPath, destPath);
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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'favicon.png') {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});