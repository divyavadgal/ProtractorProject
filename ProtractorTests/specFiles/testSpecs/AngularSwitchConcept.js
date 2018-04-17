describe("name of suite",function(){
	
	
		it("name of testscript",function(){		
			browser.get("https://docs.angularjs.org/guide/concepts");
			browser.sleep(6000);
			var myframe=element.all(by.xpath("//iframe")).get(0);
			browser.switchTo().frame(myframe);// use 0 as frame index
			element(by.model("qty")).clear().sendKeys("30");
			browser.sleep(3000);
			
			
		
		});
	
});

