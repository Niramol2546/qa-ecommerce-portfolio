import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // บล็อกโดเมนโฆษณาเพื่อป้องกัน Flaky Test
  async blockAds() {
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (
        url.includes('googlesyndication') ||
        url.includes('doubleclick') ||
        url.includes('adservice')
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });
  }
}