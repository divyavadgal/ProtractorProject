exports.config = {
		directConnect: true,
		framework: 'jasmine2',
		specs:	['./specFiles/testSpecs/simpleSpecMultiIt.js'],
		capabilities: {
			browserName: 'chrome',
			chromeOptions: {
				     args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
						}
		},
		onPrepare:function(){
			browser.driver.manage().timeouts().implicitlyWait(60000);
		}
					
}	