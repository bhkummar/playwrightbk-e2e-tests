import {test,expect} from'@playwright/test'
test("should go to home page",async({page})=> {
    
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
    await expect(page).toHaveTitle("CURA Healthcare Service")
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
    await page.getByRole('heading', { name: 'We Care About Your Health' }).click()
        });

     
