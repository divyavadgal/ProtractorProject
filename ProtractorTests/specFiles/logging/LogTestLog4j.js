var tdata = require('../repository/testdata.json');
var log4js=require('log4js');
var logger=log4js.getLogger();
/*{
	"appenders":[{
		"type":"file",
		"filename":"./log-result/logresult.log",
		"category":"relative-logger"
	}
  ]}*/

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
			logger.info('info logging');
			logger.debug('debug logging');

		});
	
});



