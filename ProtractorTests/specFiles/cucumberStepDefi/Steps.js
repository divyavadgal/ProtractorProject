
module.exports = function() {
	
	
	this.Given('The calculator is open', function () {
        // Write code here that turns the phrase above into concrete actions
		console.log("hi inside given definition");
		browser.get("http://www.google.com");
		
      });
	 Given('The calculator is open', function () {
         // Write code here that turns the phrase above into concrete actions
         return null;
       });
	
	 this.When('I calculate {int} + {int}', function (int, int2) {
         // Write code here that turns the phrase above into concrete actions
		 console.log("hi inside when definition");
		
       });
	 this.Then('the result should equal {int}', function (int) {
         // Write code here that turns the phrase above into concrete actions
		 console.log("hi inside then definition");
		 
       });
	
};
         
     