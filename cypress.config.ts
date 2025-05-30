import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'tests',
    supportFile: 'cypress/support/e2e.ts'
  },
});
