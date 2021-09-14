$(document).ready(function(){
    $("form#wordpuzzle").submit(function(event) {
        var stringinput=$("input#textinput").val();
        var inputletters=stringinput.split("");
        console.log(inputletters);
        for(var index=0; index < inputletters.length; index+=1){
            if(inputletters[index]==="a" || inputletters[index]==="e" || inputletters[index]==="i" || inputletters[index]==="o" || inputletters[index]==="u") {
              inputletters[index]="-"
            }
        }
        var puzzlestring = inputletters.join("");
        console.log(puzzlestring)
        $(".outputstring").text(puzzlestring)
        $("#wordinput").toggle();
        $("#wordoutput").toggle();
        event.preventDefault();
      });
});