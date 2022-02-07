$(document).ready(function () {
    $(".toggle").siblings().hide();
    $(".toggle").click(function () {
        $(this).siblings().slideToggle();
    })

})
