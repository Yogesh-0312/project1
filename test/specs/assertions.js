describe("assertion",async()=>{
    it("assert",async()=>{
    //    await browser.url("https://demowebshop.tricentis.com/")
    //   //  await expect(browser).toHaveUrl("https://demowebshop.tricentis.com/")
    //    await expect(browser).toHaveUrlContaining("tricentis")
    //    await expect(browser).toHaveTitle("Demo Web Shop");
    //    await expect(browser).toHaveValueContaining("Search store")
    // //    await expect(browser).tohav

    //   const x =  await browser.$("//input[@id='small-searchterms']")
    //                await expect(x).toBeDisplayed()
    //                browser.pause(2000);
    //                   await expect(x).toBeEnabled()
    //                   browser.pause(2000);
    //                   await expect(x).toBeExisting()
    //                   browser.pause(2000);
    //                 //   await expect(x).toBeDisabled()
    //                     // browser.pause(2000);

    //   const y = await browser.$("//input[@id='newsletter-email']")                
    //             await expect(y).toHaveAttr('name')
    //   const z = await browser.$("//input[@value='Vote']")
    //             await expect(z).toBeClickable();     
    //          await browser.pause(2000);
// --------------------------------------------------------------
// if we are using dropdowns then its working like this 
            await browser.$("(//a[contains(text(),'Books')])[3]").click();
     const ele =await browser.$("(//a[contains(text(),'Books')])[3]")
                await ele.waitForClickable({ timeout: 3000 });

   await browser.$("//select[@id='products-orderby']").click()
   const ele1 =  await browser.$("//select[@id='products-orderby']")
             await ele1.selectByVisibleText('Created on')
            //  await ele1.selectByIndex(2);
             await ele1.waitForClickable({ timeout: 3000 })
            //  console.log(ele1);
             browser.pause(3000)
            
await browser.scroll(0,500)
await browser.pause(2000);
await browser.$("(//input[@type='button'])[4]").click();
await browser.pause(4000);

await browser.scroll(500,0)
await browser.pause(1000)
await browser.$("(//span[@class='cart-label'])[1]").click()
await browser.pause(2000)

await browser



    })
})