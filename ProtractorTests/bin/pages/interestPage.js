var interestPage=function(){
	
	var checkRadio=function(val){
		element.all(by.model("formData.type")).get(val).click();
		return this;
		
	}
	this.clickInterestNextButton=function(){
		element(by.linkText("Next Section")).click();
		return require('./paymentPage.js');
	}
}
module.exports=new interestPage();