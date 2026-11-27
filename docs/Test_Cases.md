# Test Cases Summary

| ID | Module | Test Case Title | Type | Execution | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC01 | Auth | Login with valid email and password | Positive | Automated (UI) | High |
| TC02 | Auth | Login with invalid password | Negative | Automated (UI - Data Driven) | High |
| TC03 | Auth | Login with non-existent email | Negative | Automated (UI - Data Driven) | High |
| TC04 | Auth | Login with empty email/password fields | Boundary | Manual | Medium |
| TC05 | Product | Search product with valid keyword (e.g., "Top") | Positive | Automated (UI) | High |
| TC06 | Product | Search product with non-existent keyword | Negative | Automated (UI) | Medium |
| TC07 | Cart | Add multiple products to cart and verify total price | Positive | Automated (UI) | High |
| TC08 | Cart | Remove product from cart | Positive | Automated (UI) | Medium |
| TC09 | Checkout | End-to-End Checkout flow (API Create User -> UI Checkout -> API Delete User) | Hybrid E2E | Automated (UI + API) | Critical |
| TC10 | API | GET `/api/productsList` returns 200 and valid product array | Positive | Automated (API) | High |
| TC11 | API | POST `/api/verifyLogin` without email parameter returns 400 | Negative | Automated (API) | Medium |
| TC12 | UI/UX | Verify homepage layout responsiveness and broken images | Exploratory | Manual | Low |