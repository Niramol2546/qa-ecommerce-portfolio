# [BUG-01] All product images display the same placeholder dog image when logged in as `problem_user`

## Metadata
- **Severity:** High
- **Priority:** Medium
- **Environment:** Production (`https://www.saucedemo.com/inventory.html`)
- **Detected By:** Manual Exploratory Testing (TC05)

## Steps to Reproduce
1. Navigate to `https://www.saucedemo.com/`.
2. Enter username `problem_user` and password `secret_sauce`.
3. Click the **Login** button.
4. Observe the product images on the Inventory page.

## Expected Result
Each product should display its own unique, matching product image.

## Actual Result
All 6 products on the Inventory page display the exact same placeholder image (`/static/media/sl-404.168b1cce.jpg`).

## Impact
Customers cannot visually identify products before purchasing, severely degrading user experience and conversion rate.