// describe('flipkart',()=>{
//     it("Launch  the url",()=>{
//           browser.url("https://www.flipkart.com/")
//         //  browser.pause(3000);

//     })
// })

// describe('flipkart'),()=>{
//     it('launch the youtube',()=>{
//         browser,url("")
//     })
// }
// ------------------------------------------------------------------------------

// describe('system',async()=>{
//     it('launch',async()=>{
//        await browser.url("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=7204487863666728766&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062011&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1")
//         await browser.pause(2000);
//         let a = browser.$$("//a[contains(text(),'mobiles')]").click()
//         await browser.pause(2000)
//         for( const i in a){
//             if(i==2){
//                 console.log(await a[i].click());

//             }
//         }
//         await browser.pause(20000);

//     })
// })
// -------------------------------------------------------------------------------
// describe('system',async()=>{
//     it('launch',async()=>{
//        await browser.url("https://demowebshop.tricentis.com/")
//         await browser.pause(2000);
//         let a = browser.$$("(//a[contains(text(),'Computers')])[1]");
//         await browser.pause(2000)

//         for( const i=0; i<a.length; i ++){
//         // for(const i in a)
//             if(i==2){
                
//                 console.log(await a[i].getText());

//             }
//         }
//         await browser.pause(2000);

//     })
// })

// -----------------------------------------------------


// NOTE: ::  CHAI ASSERTIONS
//  chai assertions are not in the wdio but it is an external library 
// which  is used to make extraa impact on the script..
// it is flexible and in this we can go to the beyond methods