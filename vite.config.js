// File changed completely
// https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import pluginAPI from "vite-plugin-api";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env": env,
    },
    plugins: [react(), pluginAPI()],
  };
});
