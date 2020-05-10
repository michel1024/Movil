$(document).ready(function(){

    $('#menubar').click(function(){
        $('#menu').animate({"left": 0, "opacity": 1}, 700);

        $(".link1").animate({'opacity':'1', 'margin-left':'0'}, 500);
        $(".link2").animate({'opacity':'1', 'margin-left':'0'}, 700);
        $(".link3").animate({'opacity':'1', 'margin-left':'0'}, 900);
        $(".link4").animate({'opacity':'1', 'margin-left':'0'}, 1100);
        $(".link5").animate({'opacity':'1', 'margin-left':'0'}, 1300);
    });


    $('.close').click(function(){
        $('#menu').animate({"left": "-100%", "opacity": 0}, 700);

        $(".link1").animate({'opacity':'0', 'margin-left':'-100px'}, 500);
        $(".link2").animate({'opacity':'0', 'margin-left':'-100px'}, 700);
        $(".link3").animate({'opacity':'0', 'margin-left':'-100px'}, 900);
        $(".link4").animate({'opacity':'0', 'margin-left':'-100px'}, 1100);
        $(".link5").animate({'opacity':'0', 'margin-left':'-100px'}, 1300);
    });

    $(".g1").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria1.jpg");
    });

    $(".g2").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria2.jpg");
    });

    $(".g3").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria3.jpg");
    });

    $(".g4").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria4.jpg");
    });

    $(".g5").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria5.jpg");
    });

    $(".g6").click(function(){
        $(".lightbox").animate({"margin-top":0, "opacity":1}, 700);
        $(".lightbox-galeria").attr("src","img/galeria6.png");
    });

    $(".close-lightbox").click(function(){
        $(".lightbox").animate({"margin-top":"-200%", "opacity":0}, 700);
    });


    $(window).scroll(function(){
        var top = $(this).scrollTop();
        //$("title").text(top);
    
    
        if(top >= 200){
            $(".sub1").animate({'margin-left':'0',  'opacity':'1'}, 1000);
            $(".p1").animate({'margin-top':'0',  'opacity':'1'}, 700);
            $(".img1").animate({'margin-top':'0',  'opacity':'1'}, 700);
        }

        if(top >= 1389){
            $(".icon-footer .icon-facebook").animate({'opacity':'1'}, 1000);
            $(".icon-footer .icon-instagram").animate({'opacity':'1'}, 1500);
            $(".icon-footer .icon-youtube").animate({'opacity':'1'}, 2000);
            $(".icon-footer .icon-twitter").animate({'opacity':'1'}, 2500);
        }
    });

});