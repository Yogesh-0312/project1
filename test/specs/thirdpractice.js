// describe('perform',async()=>{
//     // it('the action',async()=>{

//     //  await browser.url("https://www.flipkart.com/");
//     //  await browser.pause(3000)
//     //  await browser.$("//input[@class='Pke_EE']").setValue("laptop");

//      it("action in youtube",async()=>{
//         await browser.url("https://www.youtube.com/");
//         await browser.pause(3000)
//         await browser.$("//input[@id='search']").setValue("songs");

//         await browser.$("//input[@id='search']").click();
//         await browser.$("//input[@placeholder='Search']").click();
//         await browser.pause(3000);


//      })
//     })

// --------------------------------------------------
describe('flipkart',async()=>{
    it('order the mobile',async()=>{

        await browser.url("https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
        await browser.pause(2000)
        await browser.$("(//span[@class='TSD49J'])[1]")
        await browser.$("(//select[@class='Gn+jFg'])[1]").click()
        await browser.pause(2000)
        await browser.$("(//select[@class='Gn+jFg'])[1]").selectByIndex(2)
        await browser.pause(2000)

       await browser.$("(//select[@class='Gn+jFg'])[2]").click()
        await browser.pause(2000)
        await browser.$("(//select[@class='Gn+jFg'])[2]").selectByIndex(1)

        await browser.pause(3000)
        




    })
})