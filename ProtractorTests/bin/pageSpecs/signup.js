var tdata = require('../repository/testdata.json');


describe("signup by payment",function(){
	

		it("signupnew",function(){	
			var basepage=require('../pages/basePage.js');
			var profilepage=require('../pages/profilePage.js');
			
			basepage.gotoUrl(tdata.basepage.url);
			basepage.getpageTitle();
			profilepage.enterUsername(tdata.userinfo.username);
			profilepage.enterPassword(tdata.userinfo.pass);
			var interestpage=profilepage.clickProfileNextButton();
			
			
			
		
		});
	
		
		xit("signup2",function(){	
			var basepage=require('../pages/basePage.js');
			var profilepage=require('../pages/profilePage.js');
			
			basepage.gotoUrl(tdata.basepage.url);
			basepage.getpageTitle();
			profilepage.enterUsername("divya1");
			profilepage.enterPassword("ergt");
			var interestpage=profilepage.clickProfileNextButton();
			
			
			
		
		});
		it("signup3",function(){	
			var basepage=require('../pages/basePage.js');
			var profilepage=require('../pages/profilePage.js');
			
			basepage.gotoUrl(tdata.basepage.url);
			basepage.getpageTitle();
			profilepage.enterUsername("aaaaaa");
			profilepage.enterPassword("bbbbbbbb");
			var interestpage=profilepage.clickProfileNextButton();
			
			
			
		
		});
		it('multiplication', function() {

			browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
			element(by.model('first')).sendKeys(2);
			element(by.model('second')).sendKeys(4);

			element.all(by.css("select option")).then(function(data) {
				data[3].click();
			});
			element(by.partialButtonText("G")).click();

			element(by.binding("latest")).getText().then(function(text) {
				console.log("result===" + text);
				expect(text).toEqual('8');
			});

		});
	
});



