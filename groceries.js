//business logic
function Groceries(first, second, third){
    this.firstItem = first;
    this.secondItem = second;
    this.thirdtem = third;
    this.items = [];
}
function resetFields(){
    $("input#new-first-item").val("");
    $("input#new-second-item").val("");
    $("input#new-third-item").val("");
}
//user interface logic
$(document).ready(function(){
    $("#add-groceries").click(function(){
        $("#new-groceriesitems").append(
            '<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="forth-item">Forth item</label>' +
                                   '<input type="text" class="form-control forth-item">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="fifth-item">Fifth item</label>' +
                                   '<input type="text" class="form-control fifth-item">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="sixth-item">Sixth item</label>' +
                                   '<input type="text" class="form-control sixth-item">' +
                                 '</div>' +
                               '</div>'
        );
    });
    
})