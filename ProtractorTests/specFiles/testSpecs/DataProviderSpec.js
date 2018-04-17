

//  using([{username:"divya",password:123},{username:"kavya",password:345}],function(data){
//using([{ , },{ , },{ , }],function(data))
var using=require('jasmine-data-provider');

describe("protractor demo app",function(){
	

	using([{name:"divyashree",sem:4},{name:"kavya",sem:4}],function(data){
	it("should have a title",function(){
		browser.get("https://angularjs.org/");
		element(by.model("yourName")).sendKeys(data.name+data.sem);
		element(by.binding("yourName")).getText().then(function(text){
			console.log(text);
			browser.sleep(6000);
			//expect(text).toBe("Hello divya!");
			});
		
		});
	
	});
	
});




