var tdata = require('../repository/testdata.json');


describe("multiplication",function(){
	

		
		it('multiplication', function() {

			browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
			element(by.model('first')).sendKeys(2);
			element(by.model('second')).sendKeys(4);

			element.all(by.css("select option")).then(function(data) {
				data[3].click();
			});
			element(by.partialButtonText("G")).click();

			element(by.binding("latest")).getText().then(function(text) {
				console.log("result===" + text);
				expect(text).toEqual('8');
			});

		});
	
});



