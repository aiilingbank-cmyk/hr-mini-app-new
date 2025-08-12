import { defineConfig } from 'vite'

// Use relative base so it works on any GitHub Pages subpath without editing
export default defineConfig({
  base: './',
  server: { port: 5173, host: true }
})
