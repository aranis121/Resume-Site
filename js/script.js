$('html').smoothScroll(3000);

$(document).ready(function(){
    
    $(".top").click(function(){
        
        $("html,body").animate({scrollTop:0});
    });
});