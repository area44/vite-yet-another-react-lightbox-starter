import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "yet-another-lightbox-starter",
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
  },
  plugins: [react()],
})
