import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([".agents/", ".astro/", "dist/", "playwright-report/", "test-results/", "src/assets/scripts/"]),
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
]);
