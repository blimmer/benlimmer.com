import { defineConfig } from "@playwright/test";

export default defineConfig({
  webServer: {
    command: "yarn dev",
    port: 4321,
    timeout: 30000,
    reuseExistingServer: !process.env.CI,
  },
});
