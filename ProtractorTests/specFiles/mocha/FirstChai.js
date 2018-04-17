
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe("signup by payment",function() {
			it("signup",function() {
						
						browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
						element(by.model("first")).sendKeys(4);
						
						var val1=element(by.model("first"));
						expect(val1.getText().to.eventually.equal('4'));//chai
						
						element(by.model("second")).sendKeys(6);
						element.all(by.css('select option')).then(
								function(data) {
									data[3].click();
								})

						element(by.buttonText("Go!")).click();
						browser.sleep(4000);

					});

		});
