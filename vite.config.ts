import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base = process.env.BASE || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
