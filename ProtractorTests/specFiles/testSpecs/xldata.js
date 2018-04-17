var XLSX=require('xlsx');
describe("protractor demo app",function(){
	
	xit("should have a title",function(){	
		var workbook=XLSX.readFile('./src/functional/test.xlsx');
		var sheet=workbook.SheetNames[0];
		var worksheet=workbook.Sheets[sheet];
		var cell=worksheet['B1'];
		var res=cell.v;
		worksheet['A1'].v="hello tekarch";
		console.log("b1 cell value ="+res)
		//console.log("b1 cell value(alternative way)= "+worksheet.B1.v);
		 XLSX.writeFile(workbook, './src/functional/testNew.xlsx');
	
	});
it("reading all data",function(){
		
		var workbook = XLSX.readFile('./src/functional/test.xlsx');	
		var sheet_name_list = workbook.SheetNames;
		console.log("sheets list="+sheet_name_list);
	sheet_name_list.forEach(function(y) { /* iterate through sheets */
	  var worksheet = workbook.Sheets[y];//worksheet is one sheet cells
	 // console.log("worksheet type="+typeof worksheet);
	  for (z in worksheet) {
		 //console.log("z contains="+z)
	    /* all keys that do not begin with "!" correspond to cell addresses */
	    if(z[0] === '!') continue;
	    console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
	  }
	});
});
	
});