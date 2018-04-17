exports.config = {
		//directConnect: true, 
		'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//"https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
		capabilities: {
			    
			 'browserstack.user': 'divyashree1',
			    'browserstack.key': 'BDhM1vjeSudP3q4kWhUJ',
			   
			   /* 'browserName': 'chrome',*/ // working fine
			    
			    'os': 'Windows',
			    'os_version': '7',
			    'browserName': 'firefox',
			    'browser_version': '59',
			    'resolution': '800x600'
			    	
			    /* 'browserName': 'iPhone',
			        'platform': 'MAC',
			        'device': 'iPhone 5'*/
			  },
		
		framework: 'jasmine2',
		specs:	['./specFiles/testSpecs/Calculator.js'],
		
		jasmineNodeOpts: {
					    //defaultTimeoutInterval: 30000,
					    showColors: true
					  },
		onPrepare: function() {
			//browser.driver.manage().timeouts().implicitlyWait(10000);
		}

					  
					  
					  
					  
					  
					  
		
}