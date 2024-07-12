import project2 from "./project2.js"
import fs from "fs";

let data = fs.readFileSync("./test/TESTDATA/adddata.json")
let cred = JSON.parse(data)
describe ("patient",()=>{

    let lid = cred.loginvalue;
    let pw1 = cred.pwvalue; 

    it("patientms",async()=>{
        await project2.homepage
        await browser.pause(2000)
        await project2.pagetoclick1(lid,pw1);

    })
    })
