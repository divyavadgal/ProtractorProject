describe("signup by payment",function(){
	it("signup",function(){	
		browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile");
		browser.getTitle().then(function(text){
			console.log(text);
		});
		element(by.model("formData.name")).sendKeys(name);
		element(by.model("formData.email")).sendKeys(password);
		element(by.linkText("Next Section")).click();
		
		element.all(by.model("formData.type")).get(val).click();
		element(by.linkText("Next Section")).click();
		
		element(by.buttonText("Submit")).click();
		browser.sleep(3000);
		browser.switchTo().alert().accept();
		browser.sleep(3000);
	});
});
