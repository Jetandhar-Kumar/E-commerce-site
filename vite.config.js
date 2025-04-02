import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()

  ],
})
// this will show pages on github// 
({
  plugins: [react()],
  base: "/your-github-repo-name/",
});
