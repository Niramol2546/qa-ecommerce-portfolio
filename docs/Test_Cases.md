# Test Cases Summary

| ID | Module | Test Case Title | Type | Execution | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC01 | UI Auth | Login succeeds with `standard_user` | Positive | Automated (UI - POM) | Done |
| TC02 | UI Auth | Login fails with `locked_out_user` | Negative | Automated (UI - Data Driven) | Done |
| TC03 | UI Auth | Login fails with invalid password | Negative | Automated (UI - Data Driven) | Done |
| TC04 | UI Auth | Login fails with empty username | Boundary | Automated (UI - Data Driven) | Done |
| TC05 | UI Exploratory | Verify product images and Add/Remove Cart buttons using `problem_user` | Exploratory | Manual | Done (Bug Found) |
| TC10 | API CRUD | Full Booking Lifecycle (`Auth` -> `Create` -> `Get` -> `Delete`) | Positive | Automated (API) | Done |
| TC11 | API Negative | `GET /booking/999999999` returns `404 Not Found` | Negative | Automated (API) | Done |