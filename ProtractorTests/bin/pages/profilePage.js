var profilePage=function(){
	this.enterUsername=function(name){
		element(by.model("formData.name")).sendKeys(name);
		return this;
	}
	this.enterPassword=function(password){
		element(by.model("formData.email")).sendKeys(password);
		return this;
	}
	this.clickProfileNextButton=function(){
		element(by.linkText("Next Section")).click();
		return require('./interestPage.js');
	}
	
}
module.exports=new profilePage();