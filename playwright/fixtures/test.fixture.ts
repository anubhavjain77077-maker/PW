import{ test as base, expect} from "@playwright/test";
import { PageManager } from "../managers/PageManager";

type CustomFixtures = {
  PM: PageManager;
};

export const test = base.extend<CustomFixtures>({
  PM: async ({ page }, use) => {
    const PM = new PageManager(page);
    await use(PM);
  }
});

export { expect };