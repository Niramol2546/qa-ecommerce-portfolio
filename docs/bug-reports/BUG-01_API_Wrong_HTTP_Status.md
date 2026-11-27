# [BUG-01] POST /api/verifyLogin returns HTTP 200 OK instead of 400 Bad Request when required parameter is missing

## Metadata
- **Severity:** Medium
- **Priority:** Medium
- **Environment:** Production (`https://automationexercise.com/api/verifyLogin`)
- **Detected By:** Automated API Test (`tests/api/api.spec.ts` - TC11)

## Description
When sending a `POST` request to `/api/verifyLogin` without the required `email` parameter, the server returns an HTTP Status Code of `200 OK` instead of `400 Bad Request`, even though the JSON response body indicates an error (`responseCode: 400`).

## Steps to Reproduce
1. Send a `POST` request to `https://automationexercise.com/api/verifyLogin`.
2. Pass form-data with only `password=Password123!` (omit `email`).
3. Inspect the HTTP Response Status Code and Response Body.

## Expected Result
- HTTP Status Code should be `400 Bad Request`.
- Response body should contain an error message stating that the `email` parameter is missing.

## Actual Result
- HTTP Status Code is `200 OK`.
- Response body returns: `{"responseCode": 400, "message": "Bad request, email or password parameter is missing in POST request."}`

## Impact
Client applications, API gateways, and monitoring tools that rely on standard HTTP status codes for error handling will mistakenly treat failed requests as successful.