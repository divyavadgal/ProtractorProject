//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	directConnect: true,
	framework : 'jasmine2',
	//seleniumAddress : 'http://localhost:4444/wd/hub',
	// running multiple specs on multiple instance of browser parallel(from line 8 to 12)
	capabilities : {
		browserName : 'chrome',
		shardTestFiles : true,
		maxInstances : 2,
	},
	specs : [ './specFiles/debugging/signupWithDebug.js',
			'./specFiles/pageSpecs/signup.js' ],
	onPrepare : function() {
		browser.driver.manage().timeouts().implicitlyWait(60000);
	},
	
//running all specs on different browsers parallel( line num 20 to 25)	
	multiCapabilities: [
	                    {
	                      'browserName': 'chrome',
	                    }, {
	                      'browserName': 'firefox',
	                    }],
}


/*


//running specific specs on specific browser parallel( line num 20 to 25)	
multiCapabilities: [
                    {
                      'browserName': 'chrome',
                      'specs':['./specFiles/parallel/signupWithDebug.js']
                      
                    }, {
                      'browserName': 'firefox',
                      spec:['./specFiles/parallel/multiplicationTest.js']
                    }]
*/