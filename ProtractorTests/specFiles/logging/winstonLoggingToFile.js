var winston = require('winston');
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, { timestamp: true });
//winston.add(winston.transports.File, { filename: 'winston-basic.log' });

describe("table display",function(){
	
	
	it("winston file output",function(){		
		browser.get("http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.$$");
		browser.manage().window().maximize();
		
		winston.log('info', 'info logging with level=info');
		winston.log('warn', 'warn logging with level=warn');
		winston.log('debug','debug logging with level=debug');//no output
		winston.log('error', 'error logging with levle=error');
		winston.level='debug';
		winston.log('debug','debug logging after adding winston level=debug');	
			
	});
	
	
	});



