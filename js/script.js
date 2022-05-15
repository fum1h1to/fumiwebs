$(document).ready(function(){
    setTimeout(function(){
        $("body").removeClass("noScroll");
        $(".loading").removeClass("show");
    }, 1000);

    //scroll animetion
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $("header").addClass("sticky");
            $(".to-top").addClass("show");
        }else{
            $(".to-top").removeClass("show");
            if(this.scrollY === 0)
            $("header").removeClass("sticky");
        }

        if(this.scrollY > 1500){
            $(".homeImg").addClass("noShow");
        }else{
            $(".homeImg").removeClass("noShow");
        }
    });

    //humber
    
    $(".respAction").on("click", function(){
        if($(window).width() <= 800){
            $(".navbar").toggleClass("active");
            $("body").toggleClass("noScroll");
            $(".humber").toggleClass("active");
        }
    });

    //typed
    var typed = new Typed(".typed", {
        strings: ["Fumihito Sudo", "すどうふみひと", "須藤 文仁"],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 50,
        backDelay: 750,
        loop: true,
        cursorChar: "|",
        contentType: 'text'
    });

    //meter
    var num = document.querySelectorAll(".info .num");
    var bar = document.querySelectorAll(".meter .bar");
    for(var i = 0; i < num.length; i++){
        bar[i].style.width = num[i].innerHTML;
    }

    //to-top
    $(".to-top").on("click", function(){
        $('html').animate({scrollTop: 0}, 0);
    });
});