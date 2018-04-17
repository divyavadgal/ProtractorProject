var Jasmine2HtmlReporter=require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect: true,
		framework: 'jasmine2',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs:	//['./specFiles/forEachDataSpec.js'],
				//['./specFiles/pageSpecs/signup.js','./specFiles/pageSpecs/multiplicationTest.js'],
			//['./specFiles/testSpecs/ScreenshotDebug.js'],
			['./specFiles/testSpecs/simpleSpec.js'],
		onPrepare: function() {
			browser.driver.manage().timeouts().implicitlyWait(60000);
		},
		
		
		/*suites: {
			smoke: ['./specFiles/forEachDataSpec.js','./specFiles/DataProviderSpec.js'],
			functional: [''],
			regresion: [''],
			all: [''],        // [./!*!/!*.js]
			optional: ['','']
		},*/
		
		
		onPrepare:function(){
			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
				
				savePath:'./test/reports/',
				consolidateAll:true,
				takeScreenshotOnlyOnFailures:false,
				screenshotFolder:'images'
			})
			);
			
		}
					
}	