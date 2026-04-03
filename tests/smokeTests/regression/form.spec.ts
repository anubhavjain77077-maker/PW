import { test, expect } from '../../../playwright/fixtures/test.fixture';

test ("user can fill the basic practice form", async ({PM}) =>{

    //const PM = new PageManager(page);

    await PM.homepage.openHomePage();
    await PM.homepage.assertPageLoaded();

    await PM.homepage.fillBasicForm({
        name: 'Anubhav Jain',
        email: 'abc@gmail.com',
        phone: '999999',
        address: '28 Hobson Loop'
    });
    await PM.homepage.selectGender('male');
    await PM.homepage.selectDays('Sunday');
    await PM.homepage.selectCountry('Australia');

    await expect(PM.homepage.nameInput).toHaveValue('Anubhav Jain');
    await expect(PM.homepage.emailInput).toHaveValue('abc@gmail.com');
    await expect(PM.homepage.phoneInput).toHaveValue('999999');
    await expect(PM.homepage.addressTextArea).toHaveValue('28 Hobson Loop');
    await expect(PM.homepage.maleRadio).toBeChecked();
    await expect(PM.homepage.sundayCheckbox).toBeChecked();
    //await expect(homepage.mondayCheckbox).toBeChecked();

    await PM.homepage.assertCountrySelected('Australia');
});