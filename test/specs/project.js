class project{

    get homepage(){
        return browser.url("http://49.249.28.218:8081/AppServer/Hospital_Management_System/index.html")
        }
    get doctorlogin(){
        return browser.$("(//a[contains(text(),'Click Here')])[2]")
        }
    get loginUN(){
        return browser.$('//input[@class="form-control"]')
     }

    get password(){
        return browser.$('//input[@placeholder="Password"]')
     }
    get login(){
        return browser.$('//button[@name="submit"]')
    } 
    get appointment(){
        return browser.$('//p[@class="cl-effect-1"]')
    }
    get dashboard(){
        return $('(//div[@class="item-media"])[4]')
    }
    get textfield(){
        return $('//input[@id="searchdata"]')
    }
    get searchbtn(){
         return $('//button[@name="search"]')
    }
    get Action(){
        return $('(//i[@class="fa fa-edit"])[1]')
    }
    get namefield(){
        return $('(//input[@class="form-control"])[1]')
   
    }
    get contactno(){
        return $('(//input[@class="form-control"])[2]')
    }
    get adress(){
        return $('//textarea[@name="pataddress"]')
    }
    get age(){
        return $('(//input[@class="form-control"])[4]')
    }
    get medhistory(){
        return $('//textarea[@name="medhis"]')
    }
    get update(){
        return $('//button[@id="submit"]')
    }
    get logout(){
        return $('//span[@class="username"]')
    }
    get logout1(){
        return $('//ul[contains(@class,"dropdown")]/descendant::a[contains(text(),"Log")]')
    }
    
    
    async pagetoclick(loginUNval,passval){
        //  await homepage.click();                  
        (await this.doctorlogin).click()
        await this.loginUN.setValue(loginUNval)
        await this.password.setValue(passval)
        await this.login.click();
        await browser.pause(2000)
        await this.appointment.click();
        await browser.pause(2000)
        await this.dashboard.click();
        await browser.pause(2000)
        await this.textfield.click();
        await browser.pause(3000)
        await this.textfield.setValue('Mouneesh')
        await browser.pause(2000)
        await this.searchbtn.click();
        await this.Action.click();
        // await  browser.scroll(0,300)
        await browser.pause(2000)
        await this.namefield.click();
        await this.namefield.setValue('Mouneesh')
        await this.contactno.setValue('7697613476')
        // const ele = await $('(//input[@class="form-control"])[3]')
        // await ele.waitForDisplayed();
        // await ele.waitForEnabled();
        // await ele.scrollIntoView();
        // // await  ele.click();
        // await ele.setValue("ykmishra659@gmail.com")
        // await browser.pause(2000)
        // await ele.email.waitforEna
        // await this.email.setValue('ykmishra659@gmail.com')
        // await browser.pause(2000)
        //  await this.gender.click();
        await this.adress.setValue('btm 2nd stage banglore')
        await this.age.setValue('36');  
        await this.medhistory.setValue('Kidney dylaysis')
        await this.update.click(); 
      
        await this.logout.click();

        // await this.logout1.waitUntil({timeout : 2000})
        await browser.pause(1000)
        await this.logout1.click();
        await browser.pause(5000);
    
         

            }
}
export default new project();

// this was a 1st end to end senario of health care management system ...npx 