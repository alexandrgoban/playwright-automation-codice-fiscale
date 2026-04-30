# Playwright Automation: Codice Fiscale Test Suite

This project contains an automated test suite for the Italian tax code (Codice Fiscale) calculator. Built with **Playwright** and following the **Page Object Model (POM)** pattern, it ensures the reliability of tax code generation and validation. The repository is integrated with **GitHub Actions** for continuous testing.

## Features
- **Scalable Architecture:** Implements Page Object Model for maintainability.
- **Data-Driven:** Uses external datasets for comprehensive test coverage.
- **CI/CD Ready:** Automated test execution on every push via GitHub Actions.
- **Reporting:** Detailed HTML reports for test result analysis.

## Quick Start

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/alexandrgoban/playwright-automation-codice-fiscale.git](https://github.com/alexandrgoban/playwright-automation-codice-fiscale.git)

2.  **Install dependencies:**
npm install

3. **Install Playwright browsers:**
   ```bash
   npx playwright install

4. **Run all tests:**
   npx playwright test

Project Structure
tests/: End-to-end test scripts.

page_object/: Page classes and interaction logic.

data/: Test data and constants.

