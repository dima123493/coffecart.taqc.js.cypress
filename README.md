# coffecart.taqc.js.cypress
# coffecart.taqc.js
🛠️ 🔁 Інструкція: Підготовка JS-проєкту після клонування
✅ 1. Встановити Node.js (якщо ще не встановлений)
Перевірити, чи встановлено Node.js:
node -v
npm -v
Якщо немає — завантажити з:
🔗 https://nodejs.org/

🔧 Рекомендується остання LTS версія (довгострокова підтримка).

✅ 2. Клонувати репозиторій

git clone https://github.com/користувач/назва-проекту.git
cd назва-проекту
✅ 3. Встановити залежності з package.json

npm install
Це створить/оновить node_modules/ і підтягне все, що потрібно для запуску/збірки проекту.

✅ 4. (Опціонально) Створити .env файл з налаштуваннями середовища
Якщо в проєкті використовується .env.example або README.md містить перелік змінних — створити .env:

cp .env.example .env
Потім відредагувати файл і додати свої значення.

✅ 5. Запустити всі тести з графічним інтерфейсом
npx cypress open
-> choose E2E Testing
-> choose a browser
-> press "Start E2E Testing in <browser>"

✅ 6. Запустити всі тести 
npx cypress run

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
git clone https://github.com/your-username/coffecart.taqc.js.cypress.git
cd coffecart.taqc.js.cypress

### ✅ 3. Install Project Dependencies
npm install

This will install all required packages listed in package.json and create the node_modules/ folder.

### ✅ 4. (Optional) Set Up Environment Variables

cp .env.example .env
# Edit the `.env` file to fill in the actual values

🧪 Running Tests
| Command                                 | Description                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------- |
| `npx cypress open`                      | Opens Cypress Test Runner UI. Choose "E2E Testing" and start tests.                    |
| `npx cypress run`                       | Runs all tests in **headless** mode (useful for CI pipelines).                         |
| `npx cypress run --headed`              | Runs all tests in **headed** mode (visible browser).                                   |
| `npx cypress run --spec "path/to/file"` | Runs a specific spec file. Example: `npx cypress run --spec "cypress/e2e/login.cy.ts"` |
| `npm test`                              | Alias for running `npx cypress run`.                                                   |

📁 Project Structure
```aiignore
coffecart.taqc.js.cypress/
├── cypress/
│   ├── e2e/                # All Cypress test files (organized by feature or module)
│   ├── support/            # Custom commands and config overrides
│   └── fixtures/           # Test data and mock responses
│
├── .env.example            # Sample environment variables file
├── cypress.config.ts       # Cypress configuration file (TypeScript)
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## 📊 (Optional) Allure Report Integration

Allure reporting is already pre-configured.
To generate and open Allure reports after test runs:
```bash
npm run allure:generate
npm run allure:open
```
