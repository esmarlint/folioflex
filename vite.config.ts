import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Configura Vite con los plugins necesarios
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Soporte para alias
  ],
});
