//user interface logic
$(document).ready(function(){
    $("#add-groceries").click(function(){
        var html = '';
        html += '<div class="form-group">';
        html += '<label for = "first-item">Another item</label>';
        html += ' <input type = "text" class = "form-control" id = "new-first-item">';
        html += '</div>';
        html += '</div>';

        $('#new-groceries').append(html);
    })
});