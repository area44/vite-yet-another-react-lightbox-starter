import react from '@vitejs/plugin-react'
import path from "path";

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-yet-another-react-lightbox-starter/",
  resolve: {
    alias: {
      '@': path.resolve('./src')
    },
  },
  plugins: [react()],
})
