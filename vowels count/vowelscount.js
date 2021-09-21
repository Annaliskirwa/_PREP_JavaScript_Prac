$(document).ready(function(){
    $("form#vowels").submit(function(event){
        var sentenseinput = $("textarea#sentense-input").val();
        console.log(sentenseinput);
        event.preventDefault()
    })
})