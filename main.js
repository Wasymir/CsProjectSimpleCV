$(document).ready(function () {
    const toggles = $(".toggle");
    toggles.siblings().hide();
    toggles.click(function () {

        $(this).siblings().slideToggle();

    })
    const year = new Date().getFullYear();
    $("#Age").text(year - 2006)

})
