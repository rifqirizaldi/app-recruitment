import loginPage from "../pageobjects/login.page.js";
import { $ } from '@wdio/globals'


describe("Testing login", function(){
    it("Login dengan email dan pass valid", async function(){
        await loginPage.open()
        await loginPage.inputData("dummy@prosigmaka.com","dummypsm")
        await loginPage.checkPass()
        browser.pause(2000)
        await loginPage.clickBtnLogin()

        // const titlePage = await $("h2[contains(text(),'Selamat datang di PSM App')")
        // await expect(titlePage).toHaveText("Selamat datang di PSM App")
    })
})
