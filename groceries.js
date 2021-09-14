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