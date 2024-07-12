class practice1{
get homepage(){
return browser.url('https://demoapps.qspiders.com/ui?scenario=1') 
}
get name(){
return $('//input[@name="name"]')
}
get webEle(){
return $('//section[@class="flex"]//descendant::p[text()="Already have an account ?"]')
}
get email(){
return $('//input[@name="email"]')
}
get dd(){
return $('//select[@id="options"]')    
}
get dd2(){
    return $$('options')
}
get page1(){
    return browser.url('https://demoapps.qspiders.com/code')
}
    //1st method
    async  clicktomethod(){
    await this.name.setValue('Yogesh mishra')
    const val = await this.webEle.getText();
    console.log(val);
    const isdisply = await this.email.isDisplayed();
    console.log(isdisply);
    }

    //2nd method  
    // In this method w r going to apply the both dropdown and all the values which is preent in the dropdown
    // and after that waitforDisplayed method also
    async clicktomethod2(){
    await this.dd.waitForDisplayed({timeout : 3000});
    await this.dd.selectByIndex(2);
    let val = await $('//select[@id="options"]')
    let opt= await val.$$('option')
    
    for(let val of opt){
        let ab=  val.getText();
        console.log(ab);
    }
    await browser.pause(3000)  
}
// 3rd method 
async clicktomethod3(){
        
}

}
export default new practice1();