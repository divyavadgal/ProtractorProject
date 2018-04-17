
exports.config = {
		//directConnect: true,
		framework: 'jasmine2',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		
		//both direconnect and seleniumAdress is not working in my case so using local server
		seleniumServerJar: 'C:/Users/Bachhi/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.0.0-beta4.jar',
		localSeleniumStandaloneOpts: { jvmArgs:
		 [//'-Dwebdriver.gecko.driver=C:/Users/Bachhi/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0.exe',
		  '-Dwebdriver.ie.driver=I:/upto june 2017/tools/selenium/IEDriverServer.exe'] },
		  
		  
		 
		 capabilities: {
		    'browserName': 'internet explorer',
		  },
		specs:['./specFiles/parallel/multiplicationTest.js'],
		
					
}
//edited on jan 26th 2018
/* run webdriver-manager update --ie then start selenium server manually and run the script using
 capabilities: {
		    'browserName': 'internet explorer',
		  },
seleniumAddress: 'http://localhost:4444/wd/hub'

*/