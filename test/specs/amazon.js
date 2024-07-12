// // pom page which is created for the amazon  

class amazon{

get wlcm(){
    return browser.url("https://www.amazon.in/") 
}
get searchfield(){
    return browser.$('//input[@id="twotabsearchtextbox"]')


}
get dropdown(){
    return $$("//select[@id='searchDropdownBox']")
}
async welcomepageapp(){
    await this.searchfield.setValue("phone")
    await this.dropdown.map(ele=> console.log(ele.getText()));
}

}
export default  new amazon();