function leave(){disappear=!0,$("#intro").remove(),$("#line").remove()}function getInfo(i){var e=$(i).attr("id"),s=e.substring(3),n=e.substring(0,3),a=$(i).offset().top+180,d=$(i).offset().left+90;if("mem"==n){var l=pl[s],t="<div class='area'><div class='title-2'>Name</div>"+l.Name+"</div>",v="<div class='area'><div class='title-2'>Department</div>"+l.Department+"</div>",o="<div class='area'><div class='title-2'>Profession</div>"+l.Profession+"</div>",r="";$.each(l.Experience,function(i,e){r+=e+"<br/>"});var c="<div class='area'><div class='title-2'>Experience</div>"+r+"</div>",p="<div class='area'><div class='title-2'>About</div><div style='text-align:justify'>"+l.About+"</div></div>",m="<div class='col-md-2'>"+t+v+o+"</div>",f="<div class='col-md-5'>"+c+"</div>",g="<div class='col-md-5'>"+p+"</div>",u="<i class='glyphicon glyphicon-remove' onClick='leave();'></i>";$(i).after('<div id="line" style="top:'+a+"px;left:"+d+'px;"></div><div class="intro" id="intro"><div id="inner" class="inner row"></div></div>'),$("#inner").html(u+m+f+g)}else{var l="ins"==n?ins[s]:spe[s],t="<div class='area'><div class='title-2'>Name</div>"+l.Name+"</div>",h="<div class='area'><div class='title-2'>現職</div>"+l["現職"]+"</div>",c="<div class='area'><div class='title-2'>學歷</div>"+l["學歷"]+"</div>",w="ins"==n?"10":"12",b="<div class='col-md-"+w+"'>"+t+h+c+"</div>";if("ins"==n){var u="<i class='glyphicon glyphicon-remove' onClick='leave();'></i>";$(i).after('<div id="line" style="top:'+a+"px;left:"+d+'px;"></div><div class="intro" id="intro"><div id="inner" class="inner row"></div></div>'),$("#inner").html(u+b),$("#intro").css({left:"25%",width:"50%"})}else $(i).append('<div class="intro"><div class="inner row">'+b+"</div></div>")}}var ins,pl,spe,disappear=!0;$.getJSON("/js/team_data.json",function(i){ins=i.instructor,pl=i.member,spe=i.specialThanks}).done(function(){$.each(ins,function(i,e){$("#instructor").append('<div class="img-div instructor" id="ins'+i+'"></div>'),$("#ins"+i).append("<img src='"+e.img+"' alt='"+e.Name+"' />")}),$.each(pl,function(i,e){e.img=e.img?e.img:"/images/unknown.png",$("#member").append('<div class="img-div member" id="mem'+i+'"></div>'),$("#mem"+i).append("<img src='"+e.img+"' alt='"+e.Name+"' />")}),$.each(spe,function(i){$("#special").append('<div class="special" id="spe'+i+'"></div>'),getInfo($("#spe"+i))}),$(".img-div").on("mouseenter",function(){disappear&&(getInfo($(this)),$("#intro").slideDown(),$("#line").slideDown())}).on("mouseleave",function(){disappear&&($("#intro").remove(),$("#line").remove())}).on("click",function(){disappear?disappear=!1:($("#intro").remove(),$("#line").remove(),getInfo($(this)),$("#intro").slideDown(),$("#line").slideDown())})});