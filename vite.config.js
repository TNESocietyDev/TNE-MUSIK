import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import pluginAPI from "vite-plugin-api"; // Ensure this plugin is correctly installed and imported

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Load environment variables

  return {
    define: {
      "process.env": env, // Define process.env to avoid reference errors in the browser
    },
    plugins: [react(), pluginAPI()], // Add React support and additional API plugin
  };
});
