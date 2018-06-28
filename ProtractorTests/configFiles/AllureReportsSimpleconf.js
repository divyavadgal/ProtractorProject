var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
		directConnect: true,
		framework: 'jasmine2',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs:	['../specFiles/testSpecs/CalculatorSpec.js'],
		
		 onPrepare: function() {
			 
			 /*jasmine.getEnv().addReporter(
		      new Jasmine2HtmlReporter({
		        savePath: 'target/screenshots',
		        takeScreenshots: true,
		       // takeScreenshotsOnlyOnFailures: true
		      })
		    );*/
			   
			    jasmine.getEnv().addReporter(new AllureReporter({
			      resultsDir: '../node_modules/jasmine-allure-reporter/allure-results1'//where pom.xml is there
			    }));
			    jasmine.getEnv().afterEach(function(done){
				      browser.takeScreenshot().then(function (png) {
				        allure.createAttachment('Screenshot', function () {
				          return new Buffer(png, 'base64')
				        }, 'image/png')();
				        done();
				      })
				    }); 
			  }


}	


//I:/project codes/protractor projects/ProtractorTests/node_modules/jasmine-allure-reporter/allure-results