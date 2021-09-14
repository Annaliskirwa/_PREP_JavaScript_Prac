//user interface logic
$(document).ready(function(){
    $("#add-groceries").click(function(){
        var html = '';
        html += '<div class="form-group">';
        html += '<label for = "another-item">Another item</label>';
        html += ' <input type = "text" class = "form-control" id = "new-another-item">';
        html += '</div>';
        html += '</div>';

        $('#new-groceries').append(html);
    })
    $("button").click(function(event){
        var item1 = $("#new-first-item").val();
        var item2 = $("#new-second-item").val();
        var item3 = $("#new-third-item").val();
        var itemanother = $("#new-another-item").val();
        $("#groceries1").text(item1)
        $("#groceries2").text(item2)
        $("#groceries3").text(item3)
        $("#groceries4").text(itemanother)
        $("#show-groceries").show();
        event.preventDefault();
    });
});