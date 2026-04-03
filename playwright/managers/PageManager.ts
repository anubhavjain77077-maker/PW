import { Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

export class PageManager {
    readonly homepage: HomePage;
    constructor(page: Page){
        this.homepage = new HomePage(page);
    }
    

}