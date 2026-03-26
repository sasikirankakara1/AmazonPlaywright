import { test as Base,expect } from "@playwright/test";
import { Home } from "../pages/Home";

type myFixtures = {

    home:Home
}

export const test = Base.extend<myFixtures>({

    home:async({page},use)=>{
        use(new Home(page))
    }
})


export {expect} from "@playwright/test"
