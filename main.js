// I hate js and I think he hates me too

$(document).ready(function () {
    const toggles = $(".toggle");
    toggles.siblings().hide();
    toggles.siblings().find("ul").find("li").hide();
    toggles.append("<i style='margin-left: 0.5em' class=\"bi bi-chevron-double-down\"></i>");

    toggles.click(function () {
        if ($(this).siblings().filter(".collapse").is(":visible")) {
            $(this).find("i").attr("class", "bi bi-chevron-double-down");
        } else {
            $(this).find("i").attr("class", "bi bi-chevron-double-up");
        }

        $(this).siblings().slideToggle(complete = function () {
            const lis = $(this).find("ul").find("li");
            if (lis.length) {
                if ($(this).is(":visible" )) {
                    lis.each(function (i) {
                        console.log(this);
                        $(this).delay(300 * i).slideDown(500);
                    });
                } else {
                    lis.hide();
                }
            }
        });

    })

    const year = new Date().getFullYear();
    $("#Age").text(year - 2006);

})
