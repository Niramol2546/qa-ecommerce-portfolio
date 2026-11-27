import { test, expect } from '@playwright/test';

test.describe('API Testing - Automation Exercise', () => {
  test('TC10: GET /api/productsList returns 200 and product list', async ({ request }) => {
    const response = await request.get('/api/productsList');
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('TC11: POST /api/verifyLogin without email returns 400', async ({ request }) => {
    const response = await request.post('/api/verifyLogin', {
      form: {
        password: 'Password123!',
      },
    });

    const body = JSON.parse(await response.text());
    // หมายเหตุ: เว็บนี้ส่ง HTTP 200 แต่ใส่ responseCode: 400 ใน Body (เอาไปเขียน Bug Report ได้!)
    expect(body.responseCode).toBe(400);
    expect(body.message).toContain('email or password parameter is missing');
  });
});