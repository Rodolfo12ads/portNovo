import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Caminho relativo do seu repositório
  plugins: [react()],
});
