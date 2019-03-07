
function stopBubble(e) {
	// 如果传入了事件对象，那么就是非ie浏览器  
	if (e && e.stopPropagation) {
		//因此它支持W3C的stopPropagation()方法  
		e.stopPropagation();
	} else {
		//否则我们使用ie的方法来取消事件冒泡  
		window.event.cancelBubble = true;
	}
}


//实现滚动条无法滚动
	var mo=function(e){e.preventDefault();};

/***禁止滑动***/
	function stop(){
        document.body.style.overflow='hidden';       
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
	}

/***取消滑动限制***/
	function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);       
	} 


//左侧导航开关闭
	$(".nav-btn img").click(function(){
		 $(".wrap").animate({left:"-100%"},200);
		 $(".search-box").fadeOut(200);
		 $(".nav-box").animate({right:"0"},200);
		 $(".search .img1").fadeIn(200);
		 $(".search .img2").fadeOut(200);
		 move();
	})

	$(".nav-top .closes img").click(function(){
		 $(".wrap").animate({left:"0"},200);
		 $(".search-box").animate({left:"0"},200);
		 $(".nav-box").animate({right:"-100%"},200);
		 $(this).parents(".nav-top").siblings().find("ul").stop(true,true).slideUp();
		 $(this).parents(".nav-top").siblings().find("a").removeClass("on");
		 $(this).parents(".nav-top").siblings().find("em").removeClass("on");
	})

	$(".lv1").click(function(){
		$(this).siblings(".nav-lv2").slideToggle();
		$(this).toggleClass("on");
		$(this).parent().siblings().find(".lv1").removeClass("on");
		$(this).parent().siblings().find(".nav-lv2").stop(true,true).slideUp();
		$(this).parent().siblings().find(".nav-lv3").stop(true,true).slideUp();
		$(this).parent().siblings().find(".nav-lv4").stop(true,true).slideUp();
		$(this).parent().siblings().find(".nav-lv5").stop(true,true).slideUp();
		$(this).parent().find(".nav-lv3").slideUp();
		$(this).parent().find(".dian").removeClass("on");
		$(this).parent().find(".dian1").removeClass("on");
		$(this).parent().siblings().find(".dian").removeClass("on");
		$(this).parent().siblings().find(".dian1").removeClass("on");

		if($(this).hasClass("on")){
			$(this).siblings(".nav-lv2").find(".nav-lv4").stop(true,true).slideUp();
		}else{
			
		}
	})


	$(".dian").click(function(){
		$(this).parent().siblings(".nav-lv3").slideToggle();
		$(this).toggleClass("on");
		$(this).parent().parent().siblings().find(".dian").removeClass("on");
		$(this).parent().parent().siblings().find(".nav-lv3").stop(true,true).slideUp();
		$(this).parent().parent().siblings().find(".nav-lv4").stop(true,true).slideUp();

		if($(this).hasClass("on")){
			$(this).parent().siblings().find(".lv3").removeClass("on");
			$(this).parent().siblings().find(".nav-lv3").stop(true,true).slideUp();
			$(this).parent().siblings().find(".nav-lv4").stop(true,true).slideUp();
			$(this).parent().siblings().find(".nav-lv5").stop(true,true).slideUp();
		}else{
			$(this).parent().siblings().find(".nav-lv4").stop(true,true).slideUp();
			$(this).parent().siblings().find(".nav-lv5").stop(true,true).slideUp();
		}
	})

	$(".dian1").click(function(){
		$(this).parent().siblings(".nav-lv5").slideToggle();
		$(this).toggleClass("on");
		$(this).parent().parent().siblings().find(".dian1").removeClass("on");
		$(this).parent().parent().siblings().find(".nav-lv5").stop(true,true).slideUp();
	})



	$(".lv3").click(function(){
		$(this).siblings(".nav-lv4").slideToggle();
		$(this).toggleClass("on");
		$(this).parent().siblings().find(".lv3").removeClass("on");
		$(this).parent().siblings().find(".nav-lv4").stop(true,true).slideUp();
		$(this).parent().siblings().find(".nav-lv5").stop(true,true).slideUp();

		if($(this).hasClass("on")){
			$(this).siblings().find(".nav-lv5").stop(true,true).slideUp();
			$(this).siblings().find(".dian1").removeClass("on");
		}else{
			$(this).siblings().find(".nav-lv5").stop(true,true).slideUp();
		}

	})

//返回顶部
	$(window).scroll(function () {
	    if ($(window).scrollTop() >50) {
	        $('.back-top').fadeIn(800);//当滑动栏向下滑动时，按钮渐现的时间
	    } else {
	        $('.back-top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
	    }
	});

	$('.back-top').click(function () {
	    $('html,body').animate({ scrollTop: 0 }, 200);
	});


//搜索开关闭
	$(".search img").click(function(e){
		var sb = $(".search-box");
	 	if(sb.is(":visible")){
			sb.fadeOut();
			$(".search .img2").hide();
			$(".search .img1").show();
			$(".input-box").find("input").val("");
			move();
		}else{
			sb.fadeIn();
			$(".search .img1").hide();
			$(".search .img2").show();
			stop();
		}
		stopBubble(e);
	})

//友情链接开关闭
	//点击事件定义
	var tap;
	var clickActive = function(){     //// 判断设备是否具有touch事件
		var g;
		var t = "ontouchstart" in document ? true : false;
		////alert(t)
		if(t){
			g = 'tap';	
		}else{
			g = 'click';
		}
		
		tap = g;
		return tap;
	}()

	$(".link-left").on("touchstart",function(e){
		var lp = $(".link-pop");
	 	if(lp.is(":visible")){
			lp.stop(true,true).slideUp();
		}else{
			lp.stop(true,true).slideDown();
		}
		stopBubble(e)
	})

	// 点击其他地方收缩
	$(document).on("touchstart",function(){
		var lp = $(".link-pop");
	 	if(lp.is(":visible")){
			lp.stop(true,true).slideUp();
		}else{
		}
	})

	$(".link-pop").on("touchstart",function(e){
		stopBubble(e)
	})


//当前位置判断
   var index = $(".second-nav .swiper-wrapper .swiper-slide.on").index();
	if(index > 3){
	  var index1 = index-3;
	  }else{
	  }

   var len = parseInt($(".second-nav .swiper-wrapper").width())/4;
   var left = -index1*len;
   $(".second-nav .swiper-wrapper").css("transform","translate3d("+left+"px, 0px, 0px)");	
