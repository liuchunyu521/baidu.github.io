
//获取页面1中的元素
var sections = document.getElementsByTagName("section");
//火箭
var rocket =document.getElementById("rocket");
//感恩
var thankyou = document.getElementById("thankyou");
//页面一
var page1 = document.getElementById("page1");

//获取页面二中的元素
var tower = document.querySelector("#tower");
var rocket_2 = document.querySelector("#rocket_2");
var miss_world = document.querySelector("#miss_world");
var thankyou_world = document.querySelector("#thankyou_world");
var gunman = document.querySelector("#gunman");
var rocket_2 = document.querySelector("#rocket_2");
var snow = document.querySelector("#snow");
var page2 = document.querySelector("#page2");
var page1 = document.querySelector("#page1");
var bg2_balls = document.querySelector("#bg2_balls");
//页面三中的元素
var page3 = document.querySelector("#page3");
var na_xie_nian = document.querySelector("#na_xie_nian");
var mo_shang_hua_kai = document.querySelector("#mo_shang_hua_kai");
var snow_3 = document.querySelector("#snow_3");
var girl1 = document.querySelector("#girl1");
var snow_3 = document.querySelector("#snow_3");
var oldman = document.querySelector("#oldman");
var man1 = document.querySelector("#man1");
var girl2 = document.querySelector("#girl2");
var man2 = document.querySelector("#man2");
var rocket_3 = document.querySelector("#rocket_3");
var rotket_bottom = document.querySelector("#rotket_bottom");
var bottom_dots = document.querySelector("#bottom_dots");

//页面四的元素
var page4 = document.querySelector("#page4");



var wiperFn = {
	//		设置page1出场
	wiper1Out:function(){

		tool.removeClassName(page1,"page1In");
		tool.removeClassName(rocket,"rocketIn");
		
		thankyou.style.opacity = 1;
		tool.removeClassName(thankyou,"thankyouIn");
		
		tool.addClassName(page1,"page1Out");
		tool.addClassName(rocket,"rocketOut");
		tool.addClassName(thankyou,"thankyouOut");
		
		tool.removeClassName(page2,"page2Out");
		tool.addClassName(page2,"page2In");
		
		tool.removeClassName(snow,"snowOut");
		tool.addClassName(snow,"snowIn");
		
		tool.removeClassName(thankyou_world,"thankyou_worldOut");
		tool.addClassName(thankyou_world,"thankyou_worldIn");
		
		tool.removeClassName(tower,"towerOut");
		tool.addClassName(tower,"towerIn");
		
		tool.removeClassName(rocket_2,"rocket_2Out");
		tool.addClassName(rocket_2,"rocket_2In");
		
		tool.removeClassName(gunman,"gunmanOut");
		tool.addClassName(gunman,"gunmanIn");
		
		tool.removeClassName(miss_world,"miss_worldOut");
		tool.addClassName(miss_world,"miss_worldIn");
		
		tool.removeClassName(bg2_balls,"bg2_ballsOut");
		tool.addClassName(bg2_balls,"miss_worldIn");
		
		
},
//		page2出场设置
	wiper2Out:function(){
		tool.removeClassName(page2,"page2In");
		tool.addClassName(page2,"page2Out")
		
		tool.removeClassName(bg2_balls,"bg2_ballsIn");
		tool.removeClassName(bg2_balls,"bg2_ballsOut");
		
		
		tool.setOpacity(page2);
		tool.removeClassName(page2,"page2In");
		tool.addClassName(page2,"page2Out");
		
		tool.removeClassName(snow,"snowIn");
		tool.addClassName(snow,"snowOut");
		
		tool.removeClassName(thankyou_world,"thankyou_worldIn");
		tool.addClassName(thankyou_world,"thankyou_worldOut");
		
		tool.removeClassName(tower,"towerIn");
		tool.addClassName(tower,"towerOut");
		
		tool.removeClassName(rocket_2,"rocket_2In");
		tool.addClassName(rocket_2,"rocket_2Out");
		
		
		tool.removeClassName(gunman,"gunmanIn");
		tool.addClassName(gunman,"gunmanOut");
		
	},
//	设置page3出场
	wiper3Out:function(){
		tool.removeClassName(page3,"page3In");
		tool.addClassName(page3,"page3Out");
		
		tool.removeClassName(na_xie_nian,"na_xie_nianIn");
		tool.addClassName(na_xie_nian,"na_xie_nianOut");
		
		tool.removeClassName(mo_shang_hua_kai,"mo_shang_hua_kaiIn");
		tool.addClassName(mo_shang_hua_kai,"mo_shang_hua_kaiOut");
		
		tool.removeClassName(snow_3,"snow_3In");
		tool.addClassName(snow_3,"snow_3Out");
		
		tool.removeClassName(girl1,"girl1In");
		tool.addClassName(girl1,"girl1Out");
		
		tool.removeClassName(oldman,"oldmanIn");
		tool.addClassName(oldman,"oldmanOut");
		
		tool.removeClassName(man1,"man1In");
		tool.addClassName(man1,"man1Out");
		
		tool.removeClassName(girl2,"girl2In");
		tool.addClassName(girl2,"girl2Out");
		
		tool.removeClassName(man2,"man2In");
		tool.addClassName(man2,"man2Out");
		
		tool.removeClassName(rocket_3,"rocket_3In");
		tool.addClassName(rocket_3,"rocket_3Out");
		
		tool.removeClassName(rotket_bottom,"rotket_bottomIn");
		tool.addClassName(rotket_bottom,"rotket_bottomOut");
		
		
	},
//	设置page4出场
		wiper4Out:function(){
			tool.removeClassName(page4,"page4In");
			tool.addClassName(page4,"page4Out");
		},
//	设置page1入场
	wiper1In:function(){
		
		tool.removeClassName(page1,"page1Out");
		tool.addClassName(page1,"page1In");
		
		tool.removeClassName(rocket,"rocketOut");
		tool.addClassName(rocket,"rocketIn");
		
		thankyou.style.opacity = 0;
		tool.removeClassName(thankyou,"thankyouOut");
		tool.addClassName(thankyou,"thankyouIn");
		
	},
//	设置page2入场
	wiper2In:function(){
		tool.removeClassName(page2,"page2Out");
		tool.addClassName(page2,"page2In");
		
		tool.removeClassName(snow,"snowOut");
		tool.addClassName(snow,"snowIn");
		
		tool.removeClassName(thankyou_world,"thankyou_worldOut");
		tool.addClassName(thankyou_world,"thankyou_worldIn");
		
		tool.removeClassName(tower,"towerOut");
		tool.addClassName(tower,"towerIn");
		
		tool.removeClassName(rocket_2,"rocket_2Out");
		tool.addClassName(rocket_2,"rocket_2In");
		
		tool.removeClassName(gunman,"gunmanOut");
		tool.addClassName(gunman,"gunmanIn");
		
		tool.removeClassName(miss_world,"miss_worldOut");
		tool.addClassName(miss_world,"miss_worldIn");
		
		tool.removeClassName(bg2_balls,"bg2_ballsOut");
		tool.addClassName(bg2_balls,"miss_worldIn");
		
		
	},
//	page3入场
	wiper3In:function(){
		
		
//		第三屏入场设置
		tool.removeClassName(page3,"page3Out");
		tool.addClassName(page3,"page3In");
		
		tool.removeClassName(na_xie_nian,"na_xie_nianOut");
		tool.addClassName(na_xie_nian,"na_xie_nianIn");
		
		tool.removeClassName(mo_shang_hua_kai,"mo_shang_hua_kaiOut");
		tool.addClassName(mo_shang_hua_kai,"mo_shang_hua_kaiIn");
		
		tool.removeClassName(snow_3,"snow_3Out");
		tool.addClassName(snow_3,"snow_3In");
		
		tool.removeClassName(girl1,"girl1Out");
		tool.addClassName(girl1,"girl1In");
		
		tool.removeClassName(oldman,"oldmanOut");
		tool.addClassName(oldman,"oldmanIn");
		
		tool.removeClassName(man1,"man1Out");
		tool.addClassName(man1,"man1In");
		
		tool.removeClassName(girl2,"girl2Out");
		tool.addClassName(girl2,"girl2In");
		
		tool.removeClassName(man2,"man2Out");
		tool.addClassName(man2,"man2In");
		
		tool.removeClassName(rocket_3,"rocket_3Out");
		tool.addClassName(rocket_3,"rocket_3In");
		
		tool.removeClassName(rotket_bottom,"rotket_bottomOut");
		tool.addClassName(rotket_bottom,"rotket_bottomIn");
	},
//		设置page4入场
	wiper4In:function(){


		tool.removeClassName(page4,"page4Out");
		tool.addClassName(page4,"page4In");
	},
}

		