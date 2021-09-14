//user interface logic
$(document).ready(function(){
    $("form#wordplay").submit(function(event){
        var sentenseInput = $("textarea#sentenseinput").val();
        var splitSentense = sentenseInput.split("");
        console.log(splitSentense);
        var reverseSentense = splitSentense.reverse().join("")
        console.log(reverseSentense);
        event.preventDefault();
    });
});