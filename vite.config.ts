import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Sitio principal (fiore-rs.github.io) con dominio propio fiorers.dev
// se sirve desde la raíz
export default defineConfig({
  plugins: [react()],
  base: "/",
});
