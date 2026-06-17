import {chromium, test} from "@playwright/test"

test("login",async()=>{

    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto("https://www.amazon.com/")
    // waitForTimeout(3000);
})


// multiple screenshots

// test.only("multi screenshots", async ({ page }) => {
//   await page.goto("https://www.amazon.in/");

//   const date = new Date().toISOString().replace(/[:.]/g, "-");

//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: `screenshots/amazon-1-${date}.png` });

//   await page.waitForTimeout(1000);
//   await page.screenshot({ path: `screenshots/amazon-2-${date}.png` });
// });



test.only("cookies",async({browser})=>{
    let context = await browser.newContext()
    let page = await context.newPage()
    console.log(await context.cookies())
    await page.goto("https://www.amazon.com/")
    await page.waitForTimeout(3000)
    console.log(await context.cookies());  
})