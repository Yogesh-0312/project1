import practice1 from "./practice1.js";

describe('practice on elements',async()=>{
    it.skip('practice',async()=>{
        await practice1.homepage
        await browser.pause(3000);
        await practice1.clicktomethod();

    })

    it.skip('practice',async()=>{
    await practice1.homepage
    await practice1.clicktomethod2();
    })

    it.skip('practice',async()=>{
    await practice1.homepage

    })

    it('practice',async()=>{
     await practice1.page1
     await practice1.clicktomethod3();   
     await browser.pause(3000)
    })

})