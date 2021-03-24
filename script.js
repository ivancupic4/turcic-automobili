$(document).ready(function() {

    $('.kontaktirajteNas').mouseover(function(){
        $('.kontaktirajteNas').height("300px");
    });

    $('#pocetna').show();
    $('#servis').hide();
    $('#onama').hide();
    $('#kontakt').hide();
    
    $(".pocetna").css("border-bottom-color", "rgb(0,188,255)");
    $(".pocetna").addClass("hovered");

    $(".pocetna").click(function(){
        $('#pocetna').show();
        $('#servis').hide();
        $('#onama').hide();
        $('#kontakt').hide();

        $(".pocetna").css("border-bottom-color", "rgb(0,188,255)");
        $(".servis").css("border-bottom-color", "rgb(1,61,126)");
        $(".onama").css("border-bottom-color", "rgb(1,61,126)");
        $(".kontakt").css("border-bottom-color", "rgb(1,61,126)");

        $(".pocetna").addClass("hovered");
        $(".servis").removeClass("hovered");
        $(".onama").removeClass("hovered");
        $(".kontakt").removeClass("hovered");

        $('.kontaktirajteNas').height("65px");
    });

    $(".servis").click(function(){
        $('#pocetna').hide();
        $('#servis').show();
        $('#onama').hide();
        $('#kontakt').hide();

        $(".pocetna").css("border-bottom-color", "rgb(1,61,126)");
        $(".servis").css("border-bottom-color", "rgb(0,188,255)");
        $(".onama").css("border-bottom-color", "rgb(1,61,126)");
        $(".kontakt").css("border-bottom-color", "rgb(1,61,126)");

        $(".pocetna").removeClass("hovered");
        $(".servis").addClass("hovered");
        $(".onama").removeClass("hovered");
        $(".kontakt").removeClass("hovered");

        $('.kontaktirajteNas').height("65px");
    });

    $(".onama").click(function(){
        $('#pocetna').hide();
        $('#servis').hide();
        $('#onama').show();
        $('#kontakt').hide();

        $(".pocetna").css("border-bottom-color", "rgb(1,61,126)");
        $(".servis").css("border-bottom-color", "rgb(1,61,126)");
        $(".onama").css("border-bottom-color", "rgb(0,188,255)");
        $(".kontakt").css("border-bottom-color", "rgb(1,61,126)");

        $(".pocetna").removeClass("hovered");
        $(".servis").removeClass("hovered");
        $(".onama").addClass("hovered");
        $(".kontakt").removeClass("hovered");

        $('.kontaktirajteNas').height("65px");
    });

    $(".kontakt").click(function(){
        $('#pocetna').hide();
        $('#servis').hide();
        $('#onama').hide();
        $('#kontakt').show();

        $(".pocetna").css("border-bottom-color", "rgb(1,61,126)");
        $(".servis").css("border-bottom-color", "rgb(1,61,126)");
        $(".onama").css("border-bottom-color", "rgb(1,61,126)");
        $(".kontakt").css("border-bottom-color", "rgb(0,188,255)");

        $(".pocetna").removeClass("hovered");
        $(".servis").removeClass("hovered");
        $(".onama").removeClass("hovered");
        $(".kontakt").addClass("hovered");
    });

    $('#fb').mouseover(function(){
        $('#fb').attr('src','images/fb-icon.png');
    });
    $('#yt').mouseover(function(){
        $('#yt').attr('src','images/yt-icon.png');
    });
    $('#fb').mouseout(function(){
        $('#fb').attr('src','images/fb-icon-bw.png');
    });
    $('#yt').mouseout(function(){
        $('#yt').attr('src','images/yt-icon-bw.png');
    });
});
