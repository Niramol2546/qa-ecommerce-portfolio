# Test Plan: Automation Exercise (E-Commerce)

## 1. Objective
ตรวจสอบความถูกต้องของฟีเจอร์หลักบนเว็บ E-Commerce (`https://automationexercise.com`) ทั้งฝั่ง UI และ REST API โดยผสมผสานระหว่าง Manual Testing และ Automated Testing

## 2. Scope of Testing
- **In-Scope:**
  - Authentication (Register, Login, Logout)
  - Product Search & Filtering
  - Shopping Cart & Checkout Flow
  - REST API Verification (Products List, Verify Login, Create/Delete Account)
- **Out-of-Scope:**
  - Performance / Load Testing
  - Payment Gateway จริง (ใช้ข้อมูลบัตรจำลองเท่านั้น)

## 3. Test Strategy (Manual vs Automation)
- **Automated (Playwright + POM):** เลือก Flow หลักที่ต้องเทสซ้ำบ่อยๆ (Regression), Data-Driven Login และ API Pre-condition/Cleanup
- **Manual:** เคสที่เน้นการตรวจสอบหน้าตา UI/Layout, การแสดงผลบนหน้าจอขนาดต่างๆ และ Exploratory Testing เพื่อหาบั๊กที่ไม่ได้อยู่ในสคริปต์

## 4. Risk & Mitigation
- **Risk:** เว็บเป้าหมายมี Google Ads เด้งคั่นระหว่างเปลี่ยนหน้า อาจทำให้ Automated Test สุ่มพัง (Flaky Test)
- **Mitigation:** ใช้ `page.route()` ใน Playwright เพื่อบล็อก Request จากโดเมนโฆษณาขณะรันเทส