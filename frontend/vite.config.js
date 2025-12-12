import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // REMOVA a seção server/proxy completamente!
  
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  
  // IMPORTANTE: Base path vazio ou '/'
  base: '/'
});
