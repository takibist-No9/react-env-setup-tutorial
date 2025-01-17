import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
const viteConfig = defineViteConfig({
  plugins: [react(), tsconfigPaths()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
