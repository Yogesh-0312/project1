import project from "./project.js"
import fs from "fs"
// import project2 from "./project2.js"


let data = fs.readFileSync("./test/TESTDATA/adddata.json")
let cred = JSON.parse(data)
describe("hospital managment system",()=>{
    let uid=cred.loginUNval;
    let pw= cred.passval;
   

    it("hospital management system",async()=>{
    await project.homepage
    await browser.pause(3000)
    await project.pagetoclick(uid,pw)
    await browser.pause(3000)

    })
})