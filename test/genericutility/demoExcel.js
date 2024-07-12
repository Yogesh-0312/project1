
import excel from "exceljs";
// for creating the xl sheet
// // const book = new excel.workbook()
// // book.xlsx.readfile("./test/TESTDATA/newexcel.xlsx")
// // const sheet = book.getworksheet("Sheet1")
// // let data = sheet.getRow(1).toString()

class exceluti{
    async readdata(filepath,sheetnmame,rowno,cellno){
        const book = new excel.Workbook()
        await book.xlsx.readFile(filepath)
        const sheet = book.getWorksheet(sheetnmame)
        let row = await sheet.getRow(rowno)
        let data = row.getCell(cellno).toString()
        return data;
    }

}
export default new exceluti();