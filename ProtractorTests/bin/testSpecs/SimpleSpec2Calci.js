var tdata = require('../repository/testdata.json');


describe("signup by payment",function(){
	

		it("signup",function(){	
			browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
			 element(by.model("first")).sendKeys(4);
			   element(by.model("second")).sendKeys(6);
			   element.all(by.css('select option')).then(function(data){
				   data[3].click();
			   })
			   
			   element(by.buttonText("Go!")).click();
			   browser.sleep(4000);
			
		
		});
		
		
		
		 it('all table rows', function() {
			  browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
			  element(by.model("first")).clear().sendKeys(10);
			  element(by.model("second")).clear().sendKeys(50);
			  element.all(by.css("select option")).get(2).click();
			  element(by.buttonText("Go!")).click();
			  
			  element(by.model("first")).clear().sendKeys(10);
			  element(by.model("second")).clear().sendKeys(60);
			  element.all(by.css("select option")).get(0).click();
			  element(by.buttonText("Go!")).click();
			  
			  element(by.model("first")).clear().sendKeys(10);
			  element(by.model("second")).clear().sendKeys(200);
			  $$("select option").get(3).click();
			  element(by.buttonText("Go!")).click();
			  
			  element.all(by.repeater("result in memory")).then(function(ele){
				for(var i=0;i<ele.length;i++){
					ele[i].getText().then(function(data){
						console.log(data);
					});
					
				}
			  });
			 
		  
		  });
	
		
});



