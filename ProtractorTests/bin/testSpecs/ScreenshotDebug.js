var fs = require('fs');

function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream("./screenshots/"+filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
describe("protractor demo app",function(){
	it("should have a title",function(){
		browser.get("https://angularjs.org/");
		browser.takeScreenshot().then(function (png) {
		    writeScreenShot(png, 'homepage.png');
		});
	
	});
	
});




