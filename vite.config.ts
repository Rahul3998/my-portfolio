import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 👇 IMPORTANT: Add this for GitHub Pages
  // If your repo is rahul3998/portfolio, set base: "/portfolio/"
  // If your repo is rahul3998/rahul3998.github.io, use base: "/"
  base: "/my-portfolio",
}));
