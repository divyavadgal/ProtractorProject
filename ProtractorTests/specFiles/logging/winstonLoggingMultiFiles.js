var winston = require('winston');

var logger = new (winston.Logger)({
	  transports: [
	    new (winston.transports.File)({
	      name: 'info-file',
	      filename: 'filelog-info.log',
	      level: 'info'
	    }),
	    new (winston.transports.File)({
	      name: 'error-file',
	      filename: 'filelog-error.log',
	      level: 'error'
	    }),
	    new (winston.transports.Console)({
	    	 timestamp: true
		    })
	  ]
	});
describe("table display",function(){
	
	
	it("winston file output",function(){		
		browser.get("http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.$$");
		browser.manage().window().maximize();
		
		logger.log('info', 'info logging with level=info');
		logger.log('error', 'error logging with level=error');
	});
	
	
	});



