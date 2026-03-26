import { expect, Locator, Page } from "@playwright/test";

export class Home{

    readonly page:Page
    readonly searchTextField:Locator
    constructor(page:Page){
        this.page=page
        this.searchTextField=page.getByPlaceholder("Search Amazon.in")
    }

    async searchForProduct(productName:string){
        try {
            await this.searchTextField.waitFor({state:"visible"})
            await this.searchTextField.fill(productName)
            await this.searchTextField.press("Enter")
        } catch (error) {
              throw new Error("Search field locator not found!")
        }
    }
    async AssertProduct(productName:string){
        try {
            expect(this.page).toHaveTitle(new RegExp(`.*${productName}.*`,'i'))
        } catch (error) {
            throw new Error(`Product title verification failed for: ${productName}`)
        }
    }

}