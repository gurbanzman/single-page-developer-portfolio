import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": import.meta.env.VITE_BACKEND, // Proxy API requests to the backend
      "/images": import.meta.env.VITE_BACKEND, // Proxy image requests to the backend
    },
  },
});
