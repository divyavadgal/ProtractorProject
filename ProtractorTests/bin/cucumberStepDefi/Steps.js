
module.exports = function() {
	
	this.Given('The calculator is open', function (callback) {
        console.log("hi inside definition");
        return callback;
      });
 
     this.When('I calculate {int} + {int}', function (int, int2) {
        // Write code here that turns the phrase above into concrete actions
        return callback;
      });
   
      this.Then('the result should equal {int}', function (int) {
        // Write code here that turns the phrase above into concrete actions
        return callback;
      });
	
}
         
     