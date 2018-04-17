exports.config = {
		directConnect: true,
		framework: 'jasmine2',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//firefox will not work with directConnect=true
		//update on march 7 2018------->latest firefox 58.0.2 working with direct connect: true
		 capabilities: {
		    'browserName': 'firefox',
		   // 'firefox_binary':'C:/Program Files/Mozilla Firefox/firefox.exe'
		    /*'firefox_binary':'C:/Program Files/Mozilla Firefox/firefox',
		    'binary_':'C:/Program Files/Mozilla Firefox/firefox'*/
		  },
		specs:['../specFiles/testSpecs/simpleSpecMultiIt.js','./specFiles/testSpecs/multiplicationTest.js'],
		onPrepare: function() {
			browser.driver.manage().timeouts().implicitlyWait(60000);
		},					
}	

