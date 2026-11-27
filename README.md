# E-Commerce Hybrid QA Portfolio (Manual + Playwright Automation)

โปรเจกต์ทดสอบระบบเว็บ E-Commerce ([Automation Exercise](https://automationexercise.com)) แบบครบวงจร ผสมผสานระหว่าง **Manual QA** (Test Plan, Test Cases, Bug Reports) และ **Test Automation** (UI E2E ด้วย Page Object Model, Data-Driven Testing, API Testing และ CI/CD)

## Tech Stack & Tools
- **Automation Framework:** Playwright (TypeScript)
- **Design Pattern:** Page Object Model (POM)
- **Testing Types:** UI E2E, Data-Driven, REST API, Hybrid (API Setup/Cleanup + UI)
- **CI/CD:** GitHub Actions (Automated execution + HTML Report Artifacts)

## Key Highlights
- **Hybrid Testing Strategy:** ใช้ REST API สร้างและลบบัญชีผู้ใช้ (`createAccount` / `deleteAccount`) เพื่อเป็น Pre-condition และ Cleanup ให้กับ UI Test ช่วยลดเวลาการทำงานและป้องกันข้อมูลขยะ
- **Flaky Test Prevention:** ดักจับและบล็อก Request จากโดเมนโฆษณาภายนอก (Google Ads) ด้วย `page.route()` ใน `BasePage.ts`
- **Data-Driven Testing:** แยกชุดข้อมูลทดสอบ (Negative Cases) ไว้ใน `test-data/loginData.json` เพื่อให้ดูแลและเพิ่มเคสใหม่ได้ง่าย
- **Real Bug Reporting:** ตรวจพบและรายงานปัญหา HTTP Status Code ของ API ไม่ตรงตามมาตรฐาน RESTful ([ดูตัวอย่าง Bug Report](docs/bug-reports/BUG-01_API_Wrong_HTTP_Status.md))

## How to Run Locally
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install

# 3. Run all tests
npx playwright test

# 4. View HTML Test Report
npx playwright show-report

## Project Structure
```text
├── docs/
│   ├── Test_Plan.md             # แผนการทดสอบและกลยุทธ์ Manual vs Automation
│   ├── Test_Cases.md            # ตาราง Test Cases ทั้งหมด
│   └── bug-reports/             # รายงานบั๊กที่พบจริง
├── pages/                       # Page Object Model (BasePage, LoginPage)
├── test-data/                   # ข้อมูล JSON สำหรับ Data-Driven Test
├── tests/
│   ├── ui/                      # UI & Hybrid E2E Tests
│   └── api/                     # REST API Tests
└── .github/workflows/           # GitHub Actions CI Pipeline



