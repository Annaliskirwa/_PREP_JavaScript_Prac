//user interface logic
$(document).ready(function(){
    $("form#wordplay").submit(function(event){
        var sentenseInput = $("textarea#sentenseinput").val();
        var splitSentense = sentenseInput.split("");
        console.log(splitSentense);
        var rejoinedSentense = (splitSentense.length > 3).append();
        console.log(rejoinedSentense)
        event.preventDefault();
    });
});