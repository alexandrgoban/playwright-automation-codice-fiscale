import { expect } from "@playwright/test";

/**
 * Page Object for the Codice Fiscale calculation page.
 */
export class CalcoloPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
        // Locators
        this.consentButton = page.locator('.fc-cta-consent');
        this.cognomeField = page.locator('#input_cognome');
        this.nomeField = page.locator('#input_nome');
        this.sessoDropDown = page.locator('[name="sesso"]');
        this.luogoField = page.locator('[name="luogo"]');
        this.provinciaField = page.locator('[name="prov"]');
        this.dayDropDown = page.locator('[name="gdate"]');
        this.monthDropDown = page.locator('[name="mdate"]');
        this.yearDropDown = page.locator('[name="adate"]');
        this.submitButton = page.locator('[value="Calcola il Codice Fiscale"]');
        this.codiceFiscaleLabel = page.locator('.field.cf .input');
    }

    /**
     * Navigates to the Calcolo page using the baseURL from config.
     */
    async goto() {
        await this.page.goto('/');
    }

    /**
     * Handles the cookie consent banner if visible.
     */
    async handleConsent() {
        // Use a small timeout for consent check to avoid long waits
        if (await this.consentButton.isVisible({ timeout: 5000 })) {
            await this.consentButton.click();
        }
    }

    /**
     * Fills the fiscal code calculation form.
     * @param {Object} data - User data for the form.
     */
    async fillCalcoloForm(data) {
        await this.handleConsent();
        
        await this.cognomeField.fill(data.cognome);
        await this.nomeField.fill(data.nome);
        await this.sessoDropDown.selectOption({ label: data.sesso });
        await this.luogoField.fill(data.luogo);
        
        await this.provinciaField.fill(data.prov);
        await this.provinciaField.press('Tab'); // Triggers potential validation/lookup

        await this.dayDropDown.selectOption({ label: data.day });
        await this.monthDropDown.selectOption({ label: data.month });
        await this.yearDropDown.selectOption({ label: data.year });
        
        await this.submitButton.click();
    }

    /**
     * Asserts that the calculated fiscal code matches the expected value.
     * @param {string} expectedCF - The expected fiscal code.
     */
    async assertCodiceFiscale(expectedCF) {
        await expect(this.codiceFiscaleLabel).toBeVisible();
        await expect(this.codiceFiscaleLabel).toHaveText(expectedCF);
    }
}
