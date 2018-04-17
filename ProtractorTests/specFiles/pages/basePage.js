var basePageinfo=function(){
	this.gotoUrl=function(url){
		browser.get(url);
		return this;
	}
	this.getpageTitle=function(){
		browser.getTitle().then(function(text){
			console.log(text);
		});
		return this;
	}
	
}
module.exports=new basePageinfo();