var winston = require('winston');
var logger = require('./log.js');
describe("table display",function(){
	
	
	it("winston file output",function(){		
		browser.get("http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.$$");
		browser.manage().window().maximize();
		logger.log('error', 'info logging with level=info');	
		logger.log('info', 'info logging with level=info');	
		logger.remove(winston.transports.Console);
		logger.log('info', 'info logging with level=info---after removing console log trasport');	
	});
	
	
	});



