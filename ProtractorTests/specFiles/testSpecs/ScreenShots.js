    var fs = require('fs');
    describe('Headless chrome', () => {
        it('Take screenshot', () => {
            browser.get('http://angularjs.org');
            browser.takeScreenshot().then(function (png) {
                var stream = fs.createWriteStream('./screenshot.png');
                stream.write(new Buffer(png, 'base64'));
                stream.end();
            })
        })
    })