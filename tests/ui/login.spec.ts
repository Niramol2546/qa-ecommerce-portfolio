import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import invalidLoginData from '../../test-data/loginData.json';

test.describe('UI Authentication - SauceDemo', () => {
  test('TC01: Login succeeds with standard_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  for (const data of invalidLoginData) {
    test(`${data.caseId}: Login fails with ${data.description}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toContainText(data.expectedError);
    });
  }
});