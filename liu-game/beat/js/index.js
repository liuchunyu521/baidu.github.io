//初始化出场动画



globleFn._init();
//初始化进度条
globleFn._onload();

elements.music.addEventListener('touchstart',function(e){
//	阻止冒泡
	e.stopPropagation();
//	按下之后,对音乐开关取反
	if(elements.musicOff==true){
		elements.musicOff = false;
	}
	else{
		elements.musicOff = true;
	}
	
	if(elements.musicOff ==false){
		elements.musicbox.pause();
		
		tool.removeClassName(elements.music,"play");
		tool.addClassName(elements.music,"stop");
		
	}
	else if(elements.musicOff ==true){
		elements.musicbox.play();
		
		tool.removeClassName(elements.music,"stop");
		tool.addClassName(elements.music,"play");
	}
});
elements.music.addEventListener('touchend',function(e){
		e.stopPropagation();
		
})


//获取页面1中的元素
var sections = document.getElementsByTagName("section");
//火箭
var rocket =document.getElementById("rocket");
//感恩
var thankyou = document.getElementById("thankyou");

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
var intry = document.querySelector("#intry");

document.addEventListener("touchmove",function(e){
	e.preventDefault();
})
document.addEventListener("touchstart",function(e){
	e.preventDefault();
	elements.starPosition = e.changedTouches[0].pageY;
})
document.addEventListener("touchend",function(e){
	e.preventDefault();
	elements.endPoistion = e.changedTouches[0].pageY;
	//	向上滑动->本屏出场，进入本屏的下一个页面
	console.log(elements.endPoistion - elements.starPosition)
	if(elements.endPoistion - elements.starPosition<-20){
			elements.page++;
			if(elements.page>=5){
				elements.page=4;
				return;
			}
			
//			如果是第一屏向上滑动,进入第二屏
		if(elements.page==2){
			wiperFn.wiper1Out();
			wiperFn.wiper2In();
		}
//		如果是第二屏向上滑动,进入第三屏
		if(elements.page==3){
			wiperFn.wiper2Out();
			wiperFn.wiper3In();
		}
//		如果是第三屏向上滑动,进入第四屏
		if(elements.page==4){
			wiperFn.wiper3Out();
			wiperFn.wiper4In();
		}
	}

	else if(elements.endPoistion - elements.starPosition>20){
//	向上滑动->本屏出场,进入本屏的上一个页面
		elements.page--;
		if(elements.page<=0){
			elements.page=1;
			return;
		}
//		如果是第2屏向下滑动,进入第1屏
		if(elements.page==1){
			wiperFn.wiper2Out();
			wiperFn.wiper1In();
		}
//		如果是第3屏向下滑动,进入第2屏
		if(elements.page==2){
			wiperFn.wiper3Out();
			wiperFn.wiper2In();
		}
//		如果是第4屏向下滑动,进入第3屏
		if(elements.page==3){
			wiperFn.wiper4Out();
			wiperFn.wiper3In();
		}
	}

	}
	
)


intry.addEventListener("touchend",function(e){
	e.stopPropagation();
	e.preventDefault();
	this.style.animation = "beginGame 0.5s";
	this.style.webkitAnimation = "beginGame 0.5s";
	
	
})
intry.addEventListener("animationend",function(e){
	e.stopPropagation();
	e.preventDefault();
	this.style.animation = "";
	window.location.href = "game/index.html";
})
//兼容处理
intry.addEventListener("webkitAnimationEnd",function(e){
	e.stopPropagation();
	e.preventDefault();
	this.style.animation = "";
	window.location.href = "game/index.html";
})