import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly pageHeading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly addressTextArea: Locator;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;
  readonly sundayCheckbox: Locator;
  readonly mondayCheckbox: Locator;
  readonly countryDropdown: Locator;
  readonly colorsDropdown: Locator;
  readonly sortedListDropdown: Locator;
  readonly submitButton: Locator;
  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole("heading", {
      name: /Automation Testing Practice/i,
    });
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.phoneInput = page.locator("#phone");
    this.addressTextArea = page.locator("#textarea");
    this.maleRadio = page.locator("#male");
    this.femaleRadio = page.locator("#female");
    this.sundayCheckbox = page.locator("#sunday");
    this.mondayCheckbox = page.locator("#monday");
    this.countryDropdown = page.locator("#country");
    this.colorsDropdown = page.locator("#colors");
    this.sortedListDropdown = page.locator("#animals");
    this.submitButton = page.locator(".submit-btn");
  }

  async openHomePage() {
    await this.goto("/");
  }

  async assertPageLoaded() {
    await expect(this.pageHeading).toBeVisible();
    await expect(this.page).toHaveTitle("Automation Testing Practice");
  }

  async fillBasicForm(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
  }) {
    await this.fill(this.nameInput, data.name);
    await this.fill(this.emailInput, data.email);
    await this.fill(this.phoneInput, data.phone);
    await this.fill(this.addressTextArea, data.address);
  }

  async selectGender(gender: "male" | "female") {
    if (gender === "male") {
      await this.check(this.maleRadio);
    } else {
      await this.check(this.femaleRadio);
    }
  }

  async selectDays(day: "Sunday" | "Monday") {
    if (day === "Sunday") {
      await this.check(this.sundayCheckbox);
    }
    if (day === "Monday") {
      await this.check(this.mondayCheckbox);
    }
  }

  async selectCountry(country: string): Promise<void> {
    await this.selectByLabel(this.countryDropdown, country);
  }

  async assertCountrySelected(country: string): Promise<void> {
    await expect(this.countryDropdown).toHaveValue(/./);
    await expect(this.countryDropdown.locator("option:checked")).toHaveText(
      country,
    );
  }
}