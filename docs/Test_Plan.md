# Test Plan: Hybrid QA Portfolio (SauceDemo UI + Restful-Booker API)

## 1. Objective
ตรวจสอบความถูกต้องของระบบ E-Commerce ฝั่ง UI (`https://www.saucedemo.com`) และระบบจองห้องพักฝั่ง REST API (`https://restful-booker.herokuapp.com`) โดยผสมผสานระหว่าง Manual Testing และ Automated Testing

## 2. Scope of Testing
- **UI (SauceDemo):** Authentication (Valid, Locked Out, Invalid, Empty), Exploratory Testing (`problem_user`)
- **API (Restful-Booker):** Full CRUD Lifecycle (`POST /auth`, `POST /booking`, `GET /booking/:id`, `DELETE /booking/:id`) และ Negative Case (`404 Not Found`)

## 3. Test Strategy (Manual vs Automation)
- **Automated (Playwright + POM):** รัน Regression บน Flow หลัก, Data-Driven Login และ API CRUD Lifecycle ผูกกับ GitHub Actions CI/CD
- **Manual:** Exploratory Testing ด้วยบัญชี `problem_user` เพื่อตรวจจับบั๊กด้าน UI/UX และพฤติกรรมที่ผิดปกติ