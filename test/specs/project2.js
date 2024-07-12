class project2{
    get homepage(){
        return browser.url("http://49.249.28.218:8081/AppServer/Hospital_Management_System/index.html")
        }
    get patientlogin(){
        return $('//div[@class="button"]/descendant::a[contains(@href,"user-login")]')
    }
    get login(){
        return browser.$('//input[@class="form-control"]')
    }
    get password(){
        return browser.$('//input[@placeholder="Username"]')
    }
 
    async pagetoclick1(loginvalue,pwvalue){
        
    await this.patientlogin.click();
    //    await browser.pause(2000)
       await this.login.setValue(loginvalue);
       await this.password.setValue(pwvalue);
       

    }
}
export default new project2();