
module.exports = function() {
	
	
	Given('The calculator is open', function () {
        // Write code here that turns the phrase above into concrete actions
		console.log("hi inside given definition");
		
      });
	
	 When('I calculate {int} + {int}', function (int, int2) {
         // Write code here that turns the phrase above into concrete actions
		 console.log("hi inside when definition");
		
       });
	 Then('the result should equal {int}', function (int) {
         // Write code here that turns the phrase above into concrete actions
		 console.log("hi inside then definition");
		 
       });
	
}
         
     