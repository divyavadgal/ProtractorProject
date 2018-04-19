var tdata = require('../repository/testdata.json');


describe("signup by payment",function(){
	

		it("signup",function(){	
			var basepage=require('../pages/basePage.js');
			var profilepage=require('../pages/profilePage.js');
			
			basepage.gotoUrl(tdata.basepage.url);
			basepage.getpageTitle();
			profilepage.enterUsername(tdata.userinfo.username);
			profilepage.enterPassword(tdata.userinfo.pass);
			//adding debugging option 
			//browser.pause();
			
			var interestpage=profilepage.clickProfileNextButton();
			

		});
	
});



