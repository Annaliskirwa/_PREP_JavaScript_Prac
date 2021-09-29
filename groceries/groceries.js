//user interface logic
$(document).ready(function(){
    //adding extra groceries form
    $("#add-groceries").click(function(){
        var html = '';
        html += '<div class="form-group">';
        html += '<label for = "another-item">Another item</label>';
        html += ' <input type = "text" class = "form-control" id = "new-another-item1">';
        html += '</div>';
        html += '</div>';
        html += '<div class="form-group">';
        html += '<label for = "another-item">Another item</label>';
        html += ' <input type = "text" class = "form-control" id = "new-another-item2">';
        html += '</div>';
        html += '</div>';
        
//adding groceries to list
        $('#new-groceries').append(html);
    })
    $("button#showgroceries").click(function(event){
        var item1 = $("#new-first-item").val();
        var item2 = $("#new-second-item").val();
        var item3 = $("#new-third-item").val();
        var itemanother1 = $("#new-another-item1").val();
        var itemanother2 = $("#new-another-item2").val();
        $("#groceries1").text(item1)
        $("#groceries2").text(item2)
        $("#groceries3").text(item3)
        $("#groceries4").text(itemanother1)
        $("#groceries5").text(itemanother2)
        $("#show-groceries").show();

         //removing groceries from list
        $("button#removeRow").click(function () {
            ('#groceries1').remove();
        });

        event.preventDefault();
    });
});