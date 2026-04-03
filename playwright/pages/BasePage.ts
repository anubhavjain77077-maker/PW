import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }
  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async selectByLabel(locator: Locator, value: string): Promise<void> {
    await locator.selectOption({ label: value });
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }
  async getTitle(locator: Locator) {
    return await this.page.title();
  }
}
