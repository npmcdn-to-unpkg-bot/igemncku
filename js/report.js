$(function(){function i(){$(".wrapper").each(function(){var i=$(this),n=i.find(".nav-arrows a"),s=i.offset().left,t=i.width()+s-30;n.show(),n.css("top",i.offset().top+i.height()/2-50),i.find(".nav-arrows a:nth-child(1)").css("left",t),i.find(".nav-arrows a:nth-child(2)").css("left",s)})}var n=0;$.getJSON("/js/report_data.json",function(s){$.each(s,function(s,t){var a='<div class="title">'+t.title+'<div class="underline"></div></div>',e=t.link,r='<div class="wrapper" id="wrap'+s+'" style="visibility: visible;">',o='<div class="shadow"></div><div class="nav-arrows"><a href="#">Next</a><a href="#">Previous</a></div>',c=[];$.each(t.pages,function(i,n){var s=n.img,t="";n.subtitle&&(t+='<div class="sb-description"><h3>'+n.subtitle+"</h3></div>");var a='<a href="'+e+'" target="_blank"><img src="'+s+'" /></a>';c.push("<li>"+a+t+"</li>")}),$("#main").append(a+r);var d=$("#wrap"+s);$("<ul/>",{"class":"sb-slider",html:c.join("")}).appendTo(d),d.append(o);var l=function(){var n=d.find(".nav-arrows").hide(),s=d.find(".shadow").hide(),t=d.find(".sb-slider").slicebox({onReady:function(){n.show(),s.show(),setTimeout(function(){i()},200)},orientation:"r",cuboidsRandom:!0,disperseFactor:30}),a=function(){e()},e=function(){n.children(":first").on("click",function(){return t.next(),!1}),n.children(":last").on("click",function(){return t.previous(),!1}),$(document).keydown(function(i){39==i.which?t.next():37==i.which&&t.previous()})};return{init:a}}();l.init(),n+=1})}),$(window).resize(i)});