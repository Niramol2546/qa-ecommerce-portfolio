import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Hybrid E2E - API Setup + UI Login + API Cleanup', () => {
  test('TC01: Create user via API, Login via UI, then Delete user via API', async ({ page, request }) => {
    // สุ่มอีเมลไม่ให้ซ้ำกันเวลาเทสรันพร้อมกัน
    const uniqueEmail = `qa_user_${Date.now()}@example.com`;
    const password = 'Password123!';
    const name = 'QA Portfolio';

    // 1. [API Setup] ยิง API สร้างบัญชีใหม่
    const createRes = await request.post('/api/createAccount', {
      form: {
        name,
        email: uniqueEmail,
        password,
        title: 'Mr',
        birth_date: '10',
        birth_month: '5',
        birth_year: '1999',
        firstname: 'QA',
        lastname: 'Tester',
        company: 'Portfolio Co',
        address1: '123 Test St',
        address2: '',
        country: 'Thailand',
        zipcode: '11120',
        state: 'Nonthaburi',
        city: 'Pakkret',
        mobile_number: '0812345678',
      },
    });
    const createBody = JSON.parse(await createRes.text());
    expect(createBody.responseCode).toBe(201);

    try {
      // 2. [UI Action] ล็อกอินผ่านหน้าเว็บด้วย POM
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(uniqueEmail, password);

      // ตรวจสอบว่าล็อกอินสำเร็จและแสดงชื่อผู้ใช้
      await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
    } finally {
      // 3. [API Cleanup] ลบบัญชีทิ้งเสมอ (แม้ UI Test จะพังก็ตาม)
      const deleteRes = await request.delete('/api/deleteAccount', {
        form: {
          email: uniqueEmail,
          password,
        },
      });
      const deleteBody = JSON.parse(await deleteRes.text());
      expect(deleteBody.responseCode).toBe(200);
    }
  });
});