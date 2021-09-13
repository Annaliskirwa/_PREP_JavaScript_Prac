$(document).ready(function(){
    $("form#wordpuzzle").submit(event){
        var stringinput = $("input#textinput").val();
        var inputletters = stringinput.split("");
        for(var index=0; index < inputletters.length; index+=1){
            if(inputletters[index]==="a" || inputletters[index]==="e" || inputletters[index]==="i" || inputletters[index]==="o" || inputletters[index]==="u") {
              inputletters[index]="-"
            }
        }
    }
})