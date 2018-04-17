function calculate(Avalue, Bvalue, index) {
	element(by.model('first')).sendKeys(Avalue);
	element.all(by.options('value for (key, value) in operators')).then(function(text) {
				text[index].click();
			});
	element(by.model('second')).sendKeys(Bvalue);

	element(by.partialButtonText('Go')).click();
}

describe('calculator test scripts',function() {
			beforeEach(function() {
				browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
				browser.manage().window().maximize();
			});
			/*
			 * afterEach(function() { console.log("test script completed"); });
			 */

			it('Addition', function() {

				calculate(10, 20, 0);
				/*
				 * element(by.model('first')).sendKeys(10);
				 * element(by.model('second')).sendKeys(20);
				 * element(by.buttonText('Go!')).click();
				 */
				var sum = element(by.binding('latest'));
				expect(sum.getText()).toBe('40');

			});

			xit('division', function() {
				calculate(20, 2, 1);
				/*
				 * element(by.model('first')).sendKeys(20);
				 * element.all(by.options('value for (key, value) in
				 * operators')).then(function(text) { text[1].click(); });
				 * element(by.model('second')).sendKeys(2);
				 * 
				 * element(by.partialButtonText('Go')).click();
				 */
				// browser.sleep(4000);
				var sum = element(by.binding('latest'));
				expect(sum.getText()).toBe('10');

			});

			xit('multiplication', function() {
				calculate(200, 2, 3);
				/*
				 * element(by.model('first')).sendKeys(200); $$('select
				 * option').then(function(text) { text[3].click(); });
				 * element(by.model('second')).sendKeys(2);
				 * 
				 * element(by.partialButtonText('Go')).click();
				 */
				browser.sleep(4000);
				var sum = element(by.binding('latest'));
				expect(sum.getText()).toBe('400');

			});

			xit('display web table contents', function() {
				calculate(200, 2, 3);
				calculate(200, 2, 0);
				calculate(200, 2, 1);
				element.all(by.repeater('result in memory')).then(
						function(text) {
							for (i = 0; i < text.length; i++) {
								text[i].getText().then(function(data) {
									console.log(data);

								});
							}
						})

			});

			xit('display specific row of contents', function() {
				calculate(200, 2, 3);
				calculate(200, 2, 0);
				calculate(200, 2, 1);
				element(by.repeater('result in memory').row(1)).getText().then(
						function(text) {
							console.log(text);

						});
				browser.sleep(6000);
			});
			it('display specific column of contents', function() {
				calculate(200, 2, 3);
				calculate(200, 2, 0);
				calculate(200, 2, 1);
				element.all(
						by.repeater('result in memory').column('result.value'))
						.getText().then(function(text) {
							console.log(text);

						});
				browser.sleep(6000);
			});

		});
