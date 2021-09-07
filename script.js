$(document).ready(function(){
    $("#show").on('keypress',function(e) {
        if(e.which == 13) {
            $("body").addId("#hide");
        }
    });
})