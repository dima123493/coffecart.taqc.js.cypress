# ☕ CoffeCart Cypress

**End-to-end test automation project for the CoffeCart web application using [Cypress](https://www.cypress.io/).**  
This project supports both interactive (headed) and CI-ready (headless) test execution.

---

## 🚀 Project Setup

### ✅ 1. Install Node.js

Ensure Node.js is installed:

```bash
node -v
npm -v
```
If not installed, download it from Node.js official site
🔧 Recommended: Use the latest LTS (Long-Term Support) version.

### ✅ 2. Clone the Repository

```bash
git clone https://github.com/your-username/coffecart.taqc.js.cypress.git
cd coffecart.taqc.js.cypress
```

### ✅ 3. Install Project Dependencies

```bash
npm install
```

This will install all required packages listed in package.json and create the node_modules/ folder.

### ✅ 4. (Optional) Set Up Environment Variables

```bash
cp .env.example .env
```
 Edit the `.env` file to fill in the actual values

## 🧪 Running Tests
| Command                                   | Description                                                                      |
| ---------------------------------------- |----------------------------------------------------------------------------------|
| `npm run cy:open`                        | Opens Cypress Test Runner UI. Choose "E2E Testing" and start tests.              |
| `npm run cy:run`                         | Runs all tests in **headless** mode (useful for CI pipelines).                   |
| `npm run cy:run:headed`                  | Runs all tests in **headed** mode (visible browser).                             |
| `npm run cy:run:spec -- "path/to/file"`  | Runs a specific spec file. Example: `npm run cy:run:spec -- tests/sample.cy.ts"` |
| `npm test`                               | Alias for running `cypress run`.                                                 |

For Allure reporting commands, see the [Allure Report Integration](#-allure-report-integration) section below.

## 📁 Project Structure
```aiignore
coffecart.taqc.js.cypress/
├── cypress/
│   ├── e2e/                # All Cypress test files (organized by feature or module)
│   ├── support/            # Custom commands and config overrides
│   └── fixtures/           # Test data and mock responses
│
├── tests/                  # Test files using the .cy.ts extension
│
├── allure-results/         # Generated during test execution (contains raw test data)
├── allure-report/          # Generated HTML report (created from allure-results)
│
├── .env.example            # Sample environment variables file
├── cypress.config.ts       # Cypress configuration file (TypeScript)
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## 📊 Allure Report Integration

Allure reporting is already pre-configured in this project. The Allure reporting workflow consists of two main steps:

1. **Test Execution**: When tests are run, test results are automatically collected in the `allure-results` directory.
2. **Report Generation**: After test execution, you can generate a visual HTML report from these results.

### Allure Workflow

```
Test Execution → allure-results/ → Report Generation → allure-report/
```

### Commands

| Command                  | Description                                                           |
|--------------------------|-----------------------------------------------------------------------|
| `npm run cy:run`         | Runs tests and generates Allure results in the `allure-results` folder |
| `npm run allure:generate`| Generates HTML report from results in the `allure-report` folder      |
| `npm run allure:open`    | Opens the generated report in your default browser                    |

### Typical Usage

```bash
# Run tests (generates allure-results/)
npm run cy:run

# Generate and open the report
npm run allure:generate
npm run allure:open
```

Both `allure-results/` and `allure-report/` directories are excluded from version control in the `.gitignore` file as they contain generated content.
