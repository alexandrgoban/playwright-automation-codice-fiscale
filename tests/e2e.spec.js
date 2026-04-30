import { test } from '@playwright/test';
import { testUser1 } from "../data/testData";
import { CalcoloPage } from "../page_object/Calcolo.page";

test.describe('Verifica Calcolo Codice Fiscale', () => {

    test('should calculate correct fiscal code for a person', async ({ page }) => {
        const calcoloPage = new CalcoloPage(page);

        // Navigation is now handled by the Page Object
        await calcoloPage.goto();

        // Fill the form using data from testData
        await calcoloPage.fillCalcoloForm(testUser1);

        // Verify the result
        await calcoloPage.assertCodiceFiscale(testUser1.expectedCF);
    });
});
