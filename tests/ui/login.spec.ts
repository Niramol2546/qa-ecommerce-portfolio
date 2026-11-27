import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import invalidLoginData from '../../test-data/loginData.json';

test.describe('Authentication - Login Tests', () => {
  for (const data of invalidLoginData) {
    test(`${data.caseId}: Login fails with ${data.description}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.email, data.password);

      // ตรวจสอบว่าแสดงข้อความแจ้งเตือน Error ถูกต้อง
      await expect(loginPage.errorMessage).toBeVisible();
    });
  }
});