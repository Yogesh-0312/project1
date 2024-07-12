import excel from "../genericutility/excel.js"
describe ("read file",async()=>{
    it("read data",async()=>{
        
    // await excel.readData("./test/TESTDATA/newexcel.xlsx","Sheet1",1,2);
    console.log(await excel.readData("./test/TESTDATA/newexcel.xlsx","Sheet1",1,2));
})
}) 