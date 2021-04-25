$().ready(function(){
 $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        
        for(var i=0; i<5;i++){
            $("section>article").eq(i).css({transform:"translateZ("+parseInt((-3000*i)+scroll)+"px)"});
            
        };
        
        for(var i=0;i<5;i++){
        if(scroll>=i*2550&&scroll<(i+1)*3000){
             $(".bg").css({backgroundImage:"url(images/bg"+(i+1)+".jpg)",transition:"1s all"});
        }
            if(scroll>=i*3000&&scroll<(i+1)*3000){
                
                $(".scrollNavi li").removeClass();
                $(".scrollNavi li").eq(i).addClass("on");
                $("article").removeClass();
                $("article").eq(i).fadeIn().addClass("on");
               
                
            };
        };
    });
    
    $(".scrollNavi li").on("click",function(){
        var a=$(this).index();
       
        if(a==1||a==4){
 $(".gnb").css({backgroundColor:"rgba(255,255,255,0.5)"});
            $(".gnb li a").hover(function(){
                $(this).css({color:"black"});
            },function(){
                $(this).css({color:"#555"});
            });
        }
       
         
        else{
            $(".gnb").css({backgroundColor:"transparent"});   
              $(".gnb li a").hover(function(){
                $(this).css({color:"white"});
            },function(){
                $(this).css({color:"#555"});
            });
        }
            
                                
       /* $(".bg").css({backgroundImage:"url(images/bg"+(a+1)+".jpg)",transition:"0.3s all"});
       */ $("body,html").stop().animate({"scrollTop":3000*a},1500,"swing");
      /*  $(".ob31").animate({opacity:0});*/
    }); 
    
   /* $("body").on("mousemove",function(e){
        var posX=e.pageX/100;
        var posY=e.pageY/150;
        
        $(".obj11").css({left:-100-posX,bottom:-1000-posY});
        $(".obj13").css({left:-100-posX,bottom:-130-posY});
        
        $(".obj21").css({left:-100-posX,bottom:-130-posY});
        $(".obj23").css({left:-100-posX,bottom:-130-posY});
        
        $(".obj31").css({left:-100-posX,bottom:-130-posY});
        $(".obj33").css({left:-100-posX,bottom:-130-posY});
        
        $(".obj41").css({left:-100-posX,bottom:-130-posY});
        $(".obj43").css({left:-100-posX,bottom:-130-posY});
        
        $(".obj51").css({left:-100-posX,bottom:-130-posY});
        $(".obj53").css({left:-100-posX,bottom:-130-posY});
        
    });*/
    $(window).trigger(scroll);
});