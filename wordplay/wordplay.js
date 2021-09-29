//user interface logic
$(document).ready(function(){
    $("form#wordplay").submit(function(event){
        var sentenseInput = $("textarea#sentenseinput").val();
        var splitSentense = sentenseInput.split("");
        console.log(splitSentense);
        var reverseSentense = splitSentense.reverse().join("")
        console.log(reverseSentense);
        $(".outputstring1").text(reverseSentense)
        event.preventDefault();
    });
    $("form#wordplay").submit(function(event){
        function reverseWords(string){
            var string = $("textarea#sentenseinput").val();
            var reversedStrArr = [];
            stringArr = string.split(' ');
            
            stringArr.forEach( word => {
              var charWordArr = word.split('');
              var reversedWord = '';
              for(i = charWordArr.length-1; i >= 0 ; i--){
                reversedWord += charWordArr[i];
              }
              reversedStrArr.push(reversedWord);
            });
            return reversedStrArr.join(' ');
          }
          console.log(reverseWords())
          $(".outputstring2").text(reverseWords)
          event.preventDefault();
    });
});