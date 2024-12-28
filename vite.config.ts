import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@widget": path.resolve(__dirname, "src/widget"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@shared/assets/styles/variables.scss";`
      }
    }
  }
});
