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
//	传入两个数,取这两个数之间的随机数
	getRandom:function(Min,Max){
		{   
			var Range = Max - Min;   
			var Rand = Math.random();   
			return(Min + Math.round(Rand * Range));   
		}   
	}
	
}
