var winston = require('winston');
describe("table display",function(){
	it("contents row and column",function(){
		//by default levels=info warn error//add levels debug silly etc
		winston.level='debug';
		winston.level='silly';
		winston.log("info","hello winstone.log info level");
		//or winston.info("hello winston.info no level");
		winston.log("error","hello winstone.log error level");
		// or winston.error("hello winston.error no level");
		
		winston.log("other","hello winstone.log other level");//no level by other allowed//no output
		winston.log("warn","hello winstone.warn warn level");
		// or winston.warn("hello winston.warn no level");
		winston.log("debug","hello winstone.log silly level");
		// or winston.debug("hello winston.debug no level");
		winston.silly("hello winston.silly no level");
	
	});
	
});



