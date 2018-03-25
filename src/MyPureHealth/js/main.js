/**
 * Created by luke on 30/04/16.
 */
$(document).ready(function() {
    $(".navbar [href^=#]").click(function(a) {
        a.preventDefault();
        var b = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(b).position().top
        }, "slow")
    })
});