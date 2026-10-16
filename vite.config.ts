import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Fuentes que se ven al cargar la página (solo el subconjunto latino, que es el que usa el sitio).
// Se precargan desde el <head> para que lleguen junto con el CSS y no haya un salto
// de la fuente de respaldo a la real en los titulares (FOUT).
const FUENTES_PRECARGADAS = [
  /archivo-latin-wdth-normal-.*\.woff2$/,
  /hanken-grotesk-latin-(400|500)-normal-.*\.woff2$/,
  /jetbrains-mono-latin-(400|500)-normal-.*\.woff2$/,
];

function precargarFuentes(): Plugin {
  return {
    name: "precargar-fuentes",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        if (!ctx.bundle) return [];
        return Object.keys(ctx.bundle)
          .filter((archivo) => FUENTES_PRECARGADAS.some((patron) => patron.test(archivo)))
          .map((archivo) => ({
            tag: "link",
            attrs: { rel: "preload", as: "font", type: "font/woff2", href: `/${archivo}`, crossorigin: "" },
            injectTo: "head-prepend" as const,
          }));
      },
    },
  };
}

// Sitio principal (fiore-rs.github.io) con dominio propio fiorers.dev
// se sirve desde la raíz
export default defineConfig({
  plugins: [react(), precargarFuentes()],
  base: "/",
});
