exports.config = {
		directConnect: true, //no need to start selenium standlone server
		
		/* capabilities: {
			    'browserName': 'firefox'
			  },*/
		
	/*	 jasmineNodeOpts: {
			    defaultTimeoutInterval: 30000
			  },*/

		
		framework: 'jasmine2',
		//seleniumAddress: 'http://localhost:4444/wd/hub',//mention when manually start server
		specs:	//['./functional/LoginToCustomer_spec.js'],
				//['./regression/NewCalculator.js'],
				//['./tekarch/spec11.js'],
				//['WeatherTest.js'],
				//['./ReadingData/xldata2.js'],
				//['spec.js'],
					//['./regression/TableData.js'],
				//['./regression/cal.js'],
			//['./ReadingData/xldata.js'],
			
			['./specFiles/spec.js'],
		
		jasmineNodeOpts: {
					    defaultTimeoutInterval: 30000,
					    showColors: true
					  },
		onPrepare: function() {
			
			//browser.ignoreSynchronization=true;

			// Override the timeout for webdriver.
			browser.driver.manage().timeouts().implicitlyWait(10000);

			
		},
		//    ./foldername/*.js  -->entire folder will be executed
		suites: {
			smoke: ['./specFiles/DataProviderSpec.js','./specFiles/forEachDataSpec.js'],
			functional: [''],
			regresion: [''],
			all: [''],        // [./!*!/!*.js]
			optional: ['','']
		}
			
			
			/*onPrepare: function() {
			    var AllureReporter = require('jasmine-allure-reporter');
			    jasmine.getEnv().addReporter(new AllureReporter({
			      resultsDir: 'allure-results'
			    }));
			    jasmine.getEnv().afterEach(function(done){
			    	browser.takeScreenshot().then(function(png){
			    		allure.createAttachment('Screenshot' , function(){
			    			return new Buffer(png,'base64')
			    		}, 'image/png')();
			    		done();
			    	});
			    });
			  },*/
			
			/*multiCapabilities: [
			{browserName : 'firefox'},
			{browserName: 'chrome'},
			{browserName: 'internet explorer'}
			],*/

			
			
}