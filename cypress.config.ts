import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'tests/**/*.cy.{js,ts,jsx,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: 'allure-results'
    }
  },
});
