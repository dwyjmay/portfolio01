$().ready(function(){
 
    $(".suzytitle").addClass("active");
    /*첫번째 메뉴 hover 시 동작*/
    $("#menu li:nth-child(1)").hover(function(){
         $("dl").stop().slideDown();
    },function(){
        $("dl").stop().slideUp();
    });
    /*옷 세부정보*/
    $(".info").hover(function(){
        var ind=$(this).index();
        var ind2=$(this).parent().index();
         $("section:eq("+ind2+") .help:eq("+ind+")").fadeIn();
    },function(){
         var ind=$(this).index();
        var ind2=$(this).parent().index();
         $("section:eq("+ind2+") .help:eq("+ind+")").fadeOut();
    });
    

    var ht=$(window).height();
    $("section").height(ht);    
 
 
    
    $(window).on("resize",function(){
   var ht=$(window).height();
    $("section").height(ht);    
 
    });
    
    /* 마우스 위치에 따라 배경이 움직임*/
    $("section").on("mousemove",function(e){
        var posX=e.pageX;
        var posY=e.pageY;
        
       $(".p11").animate({scale:(posX/30/30)},100);
        $(".p11").css({right:20-(posX/30), bottom:20-(posY/30)});
    })
    
    
    /*메뉴의 서브메뉴 클릭 시 */
    $(" dl dd, dl dt").on("click",function(e){
        e.preventDefault; //메뉴 클릭 시 링크를 막아줌.
        var i=$(this).index()+1;
        console.log(i);
        var nowTop=i*ht;
        $("html,body").stop().animate({scrollTop:nowTop},1400,"easeOutBack");
    });
    
    /*두번째 메뉴 클릭시 이동값*/
    $("#menu li:eq(1)").on("click",function(e){
        e.preventDefault; //메뉴 클릭 시 링크를 막아줌.
        var i=$(this).index()+4;    
        var nowTop=i*ht;
        $("html,body").stop().animate({scrollTop:nowTop},1400,"easeOutBack");
    });
    
    $(window).on("scroll",function(){
        var ht=$(window).height();
        console.log(ht);
        var scroll=$(window).scrollTop();
        for(var i=0;i<5;i++){
            if(scroll>=ht*0 && scroll<ht*5){
                $("#menu li").removeClass("on");
                $("#menu li").eq(0).addClass("on");
            }
            if(scroll>=ht*5 && scroll<ht*6)
                {
                   $("#menu li").removeClass("on");
                $("#menu li").eq(1).addClass("on");  
                }
            else if(scroll>=ht){
                $(".suzytitle").removeClass("active");
            }
            else if(scroll<ht){
                $(".suzytitle").addClass("active");
            }
        }
   
        
        
    

        
        
        $("section").on("mousewheel",function(event,delta){
            
            if(delta > 0){
                var prev=$(this).prev().offset().top;
                $("html,body").stop().animate({scrollTop:prev},1400,"easeOutBack");
            }
            else if(delta<0){
              var next=$(this).next().offset().top;
            
                 $("html,body").stop().animate({scrollTop:next},1400,"easeOutBack");
            }
                
            
        });
    });/*scroll */
    
});





/*
https://wallpaperscraft.com/catalog/fantasy

*/