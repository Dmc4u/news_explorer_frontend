import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/news_explorer_frontend/", // must match your GitHub repo name
  plugins: [react()],
  server: {
    port: 3000,
  },
});
