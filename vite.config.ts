import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base = process.env.BASE || "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  plugins: [react()],
});
