var data = require('./repository/testdata.json');
describe("multiform",function(){
	
	//tdata.forEach(function(data){
		it("data driven",function(){		
			browser.get(data.basepage.url);
			
			element(by.model("formData.name")).sendKeys(data.userinfo.username);
			element(by.model("formData.email")).sendKeys(data.userinfo.pass);
			element(by.linkText("Next Section")).click();
			browser.sleep(6000);
			element.all(by.model("formData.type")).get(1).click();
			element(by.linkText("Next Section")).click();
			browser.sleep(6000);
			element(by.buttonText("Submit")).click();
			browser.sleep(3000);
			browser.switchTo().alert().accept();
			//browser.sleep(3000);
			
		
		});
	//});
	
});