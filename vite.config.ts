import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: false,
    host: true,
    allowedHosts: ['math-study-learning-platform.onrender.com', '.onrender.com']
  },
  preview: {
    host: true,
    allowedHosts: ['math-study-learning-platform.onrender.com', '.onrender.com']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [/Terraria\.html/, /games1\.html/, /games2\.html/, /browser\.html/]
    }
  }
});
