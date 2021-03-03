$(document).ready(function(){
    var total = $(".btns li").length;
    $(".control div span").text(total);
    //숫자가 길이에 따라 자동으로 바뀜

    $("#gallery .btns li a").on("click", function(e){
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        var txt = $(this).text();
        var i = $(this).parent().index() +1;
        
        $(".showBox").css({
            backgroundImage: "url("+imgSrc+")"
        });
        $("#gallery h1").text(txt);
        $(".control div strong").text(i);
        
        $("#gallery .btns li a").css({color: "#888"});
        $(this).css({color: "#fff"})
        });
    })
