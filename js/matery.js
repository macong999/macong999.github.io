"use strict";$(function(){var t;t="animated pulse",$("article .article").hover(function(){$(this).addClass(t)},function(){$(this).removeClass(t)}),$(".sidenav").sidenav();function e(t,e){var n,i=$("#"+t);0!==i.length&&(n=i.width(),n+=450<=n?21:350<=n&&n<450?18:300<=n&&n<350?16:14,$("#"+e).width(n))}function n(){e("navContainer"),e("artDetail","prenext-posts"),$(".content").css("min-height",window.innerHeight-165)}n(),$(window).resize(function(){n()}),$("#articles").masonry({itemSelector:".article"}),AOS.init({easing:"ease-in-out-sine",duration:700,delay:100});!function(){$("#articleContent a").attr("target","_blank"),$("#articleContent img").each(function(){var t=$(this).attr("src");$(this).wrap('<div class="img-item" data-src="'+t+'" data-sub-html=".caption"></div>'),$(this).addClass("img-shadow img-margin");var e,n,i=$(this).attr("alt"),a=$(this).attr("title"),s="";void 0===i||""===i?void 0!==a&&""!==a&&(s=a):s=i,""!==s&&((e=document.createElement("div")).className="caption",(n=document.createElement("b")).className="center-caption",n.innerText=s,e.appendChild(n),this.insertAdjacentElement("afterend",e))}),$("#articleContent, #myGallery").lightGallery({selector:".img-item",subHtmlSelectorRelative:!0});var n=window.document.querySelector(".progress-bar");n&&new ScrollProgress(function(t,e){n.style.width=100*e+"%"})}(),$(".modal").modal(),$("#backTop").click(function(){return $("body,html").animate({scrollTop:0},400),!1});var i=$("#headNav"),a=$(".top-scroll");function s(t){t<100?(i.addClass("nav-transparent"),a.slideUp(300)):(i.removeClass("nav-transparent"),a.slideDown(300))}s($(window).scrollTop()),$(window).scroll(function(){s($(window).scrollTop())}),$(".nav-menu>li").hover(function(){$(this).children("ul").stop(!0,!0).show(),$(this).addClass("nav-show").siblings("li").removeClass("nav-show")},function(){$(this).children("ul").stop(!0,!0).hide(),$(".nav-item.nav-show").removeClass("nav-show")}),$(".m-nav-item>a").on("click",function(){"none"==$(this).next("ul").css("display")?($(".m-nav-item").children("ul").slideUp(300),$(this).next("ul").slideDown(100),$(this).parent("li").addClass("m-nav-show").siblings("li").removeClass("m-nav-show")):($(this).next("ul").slideUp(100),$(".m-nav-item.m-nav-show").removeClass("m-nav-show"))})});