$(document).ready(function(){
    $("form#vowels").submit(function(event){
        event.preventDefault()
        var sentenseinput = $("textarea#sentense-input").val();
        console.log(sentenseinput);
    })
})