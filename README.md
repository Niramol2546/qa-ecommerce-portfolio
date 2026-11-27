# Hybrid QA Portfolio (Manual + Playwright Automation)

![Playwright Tests](https://github.com/Niramol2546/qa-ecommerce-portfolio/actions/workflows/playwright.yml/badge.svg)

โปรเจกต์ทดสอบระบบแบบครบวงจร ผสมผสานระหว่าง **Manual QA** (Test Plan, Test Cases, Exploratory Bug Report) และ **Test Automation** (UI E2E ด้วย Page Object Model, Data-Driven Testing, REST API CRUD และ CI/CD)

## Target Systems
- **UI Testing:** [SauceDemo](https://www.saucedemo.com) (E-Commerce)
- **API Testing:** [Restful-Booker](https://restful-booker.herokuapp.com) (Booking REST API)

## Tech Stack & Tools
- **Automation Framework:** Playwright (TypeScript)
- **Design Pattern:** Page Object Model (POM)
- **Testing Types:** UI E2E, Data-Driven, REST API CRUD, Manual Exploratory
- **CI/CD:** GitHub Actions (Cross-browser execution + HTML Report Artifacts)

## Key Highlights
- **Page Object Model (POM):** แยก Locator และ Action ไว้ใน `pages/LoginPage.ts` เพื่อลดความซ้ำซ้อนและดูแลรักษาง่าย
- **Data-Driven Testing:** แยกชุดข้อมูลทดสอบ (Negative & Boundary Cases) ไว้ใน `test-data/loginData.json`
- **API CRUD Lifecycle:** ทดสอบครบวงจรตั้งแต่ขอ Auth Token -> สร้างข้อมูล -> ตรวจสอบข้อมูล -> ลบข้อมูลทิ้งเพื่อรักษาความสะอาดของระบบ
- **Manual QA & Bug Reporting:** มีเอกสาร Test Plan, Test Cases และรายงานบั๊กที่พบจริง ([ดูตัวอย่าง Bug Report](docs/bug-reports/BUG-01_Problem_User_Broken_Images.md))

## How to Run Locally
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report