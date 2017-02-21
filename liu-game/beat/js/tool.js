//初始化
//获取页面1中的元素

var sections = document.getElementsByTagName("section");
//火箭
var rocket =document.getElementById("rocket");
//感恩
var thankyou = document.getElementById("thankyou");

var page1 =  document.getElementById("page1");

var elements = {
	music:document.getElementById("music"),
	musicbox:document.getElementById("musicbox"),
	musicOff:true,
	firstPageImgs:[
//			"img/musicplay.png",
//			"img/musicstop.png",
//			"img/rocket.png",
//			"img/stars.png",
//			"img/thankyou.png",
//			"img/up_ico.png",
			"img/bg2_balls.png",
			"img/bottom_dots.png",
			"img/girl1.png",
			"img/girl2.png",
			"img/gun_man.png",
			"img/man1.png",
			"img/man2.png",
			"img/miss_world.png",
			"img/mo_shang_hua_kai.png",
			"img/musicplay.png",
			"img/musicstop.png",
			"img/old_man1.png",
			"img/rocket_3_fly.png",
			"img/rocket_4.png",
			"img/rocket_bottom.png",
			"img/rocket_page2.png",
			"img/rocket.png",
			"img/snow.png",
			"img/stars.png",
			"img/thankyou_world.png",
			"img/thankyou.png",
			"img/thatyears.png",
			"img/tower.png",
			"img/up_ico.png"
	],
	firstPageEndNum:0,
	innerJindu:document.getElementById("inner_jindu"),
	jindu_box:document.getElementsByClassName("jindu_box")[0],
	//记录手指按下开始位置和
	starPosition:0,
	//手指离开的结束位置
	endPoistion:0,
	page:1
}
var globleFn = {
	_init:function init(){
		var rocket = document.getElementById("rocket");
		var thankyou = document.getElementById("thankyou");
		tool.addClassName(rocket,"rocketIn");
		tool.addClassName(thankyou,"thankyouIn");
		tool.addClassName(page1,"page1In");
	},
	_onload:function(){
		var n = 0;
		for (var i = 0; i < elements.firstPageImgs.length; i++) {
			var img = document.createElement("img");
			img.src = elements.firstPageImgs[i];
			img.onload = function(){
				elements.firstPageEndNum++;
				elements.innerJindu.style.width =(parseInt((elements.firstPageEndNum/elements.firstPageImgs.length)*100)) + "%";
				if(elements.firstPageEndNum==elements.firstPageImgs.length){
					elements.jindu_box.style.display = "none";
				}
//				console.log();
			}
		
		}
	}
}

var tool = {
//	新增的名字,传入名字的格式，元素名字，类名字例子：box，n1
	addClassName:function(element,addname){
		var oldClassName = element.className;
		var re = new RegExp(addname);
		
		if(oldClassName.search(re)!=-1){
			return;
		}else{
			var newClassName = oldClassName + " "+addname;
			element.className = newClassName;
		}
		
	},
//	删除的名字，传入名字的格式，元素名字，类名字例子：box，n1
	removeClassName:function(element,removename){
		var oldClassName = element.className;
		var arrClassName = oldClassName.split(" ");
		for (var i = 0; i < arrClassName.length; i++) {
			if(arrClassName[i]==removename){
				arrClassName.splice(i,1);
				i--;
			}
		}
		var newClassName = arrClassName.join(" ");
		element.className = newClassName;
		
	},
//	将element下所有的节点元素的opacity值设置为1;
	setOpacity:function(_element){
		var elements = _element.children;
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.opacity = 1;
		}
	},
	
}

