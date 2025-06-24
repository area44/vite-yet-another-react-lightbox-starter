import path from "node:path";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.CI
    ? "/vite-yet-another-react-lightbox-starter/"
    : undefined,
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  plugins: [react()],
});
