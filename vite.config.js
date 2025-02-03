import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // server: {
  //   proxy: {
  //     "/api": "http://localhost:3000", // Proxy API requests to the backend
  //     "/images": "http://localhost:3000", // Proxy image requests to the backend
  //   },
  // },
});
