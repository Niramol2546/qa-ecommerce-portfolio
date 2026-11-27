import { test, expect } from '@playwright/test';

const API_BASE = 'https://restful-booker.herokuapp.com';

test.describe('API Testing - Restful Booker (CRUD Lifecycle)', () => {
  test('TC10: Full Booking Lifecycle (Auth -> Create -> Get -> Delete)', async ({ request }) => {
    // 1. POST /auth - ขอ Token
    const authRes = await request.post(`${API_BASE}/auth`, {
      data: { username: 'admin', password: 'password123' },
    });
    expect(authRes.status()).toBe(200);
    const { token } = await authRes.json();
    expect(token).toBeTruthy();

    // 2. POST /booking - สร้างรายการจองใหม่
    const createRes = await request.post(`${API_BASE}/booking`, {
      data: {
        firstname: 'QA',
        lastname: 'Portfolio',
        totalprice: 1500,
        depositpaid: true,
        bookingdates: { checkin: '2026-12-01', checkout: '2026-12-05' },
        additionalneeds: 'Breakfast',
      },
    });
    expect(createRes.status()).toBe(200);
    const created = await createRes.json();
    const bookingId = created.bookingid;
    expect(bookingId).toBeDefined();

    // 3. GET /booking/:id - ตรวจสอบข้อมูลที่สร้าง
    const getRes = await request.get(`${API_BASE}/booking/${bookingId}`);
    expect(getRes.status()).toBe(200);
    const booking = await getRes.json();
    expect(booking.firstname).toBe('QA');
    expect(booking.lastname).toBe('Portfolio');

    // 4. DELETE /booking/:id - ลบข้อมูลทิ้ง (Cleanup)
    const deleteRes = await request.delete(`${API_BASE}/booking/${bookingId}`, {
      headers: { Cookie: `token=${token}` },
    });
    expect(deleteRes.status()).toBe(201);
  });

  test('TC11: GET non-existent booking returns 404 Not Found', async ({ request }) => {
    const res = await request.get(`${API_BASE}/booking/999999999`);
    expect(res.status()).toBe(404);
  });
});