$(document).ready(function () {
    var isWebkit = 'WebkitAppearance' in document.documentElement.style;
    if (!isWebkit) {
        alert("For more awesome effects try another browser (: ");
        window.location.href = 'HtmlPage.html';
    }
    $("#flipCardBack").click(function () {       
        $('.card-container').addClass('flip');
        $('.card-container.static').addClass('flip');
    });
    $("#flipCardFront").click(function () {    
        $('.card-container').removeClass('flip');
        $('.card-container.static').removeClass('flip');
    });
    var img1 = $("<img />").attr('src', 'Picture/beawesome-wallpaper-3840x2160.jpg').load(function () {
        $("#img1").append(img1);
    });
    $('body').css({
        "background": "url(Picture/times_square_new_york-wide.jpg) no-repeat center center fixed",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover",
        "background-size": "cover"
    });
    
});
