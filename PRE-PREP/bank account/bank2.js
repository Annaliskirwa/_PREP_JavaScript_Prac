//business logic
BankAccount = function(name, balance){
    this.name = name;
    this.balance = balance;
};

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

BankAccount.prototype.toString = function(){
    return "Name: " + this.name + " Balance: $"+ this.balance;
};
//user interface logic
$(document).ready(function(){
    $("form#new-account").submit(function(event){
        event.preventDefault();
        var name = $("input#account-name").val();
        var balance1 = $("input#initial-deposit").val();
        var balance = parseInt(balance1)
        var newAccount = new BankAccount(name, balance);
    $("#output-balance").text(newAccount);
    console.log(newAccount.toString())
    $("#confirm2").click(function(event){
        event.preventDefault();
        var amount = $("input#deposit-amount").val();
        //amount = parseInt(amount1);
        var dep1 = (parseInt(amount) + parseInt(balance));
        console.log(dep1) 
        $("#output-balance").text(`Name: ${newAccount.name} Amount: $${dep1}`);

        $("#confirm3").click(function(event){
            event.preventDefault();
            var amount = $("input#withdraw-amount").val();
            //amount = parseInt(amount1);
            var withdraw1 = (dep1- parseInt(amount));
            console.log(withdraw1) 
            $("#output-balance").text(`Name: ${newAccount.name} Amount: $${withdraw1}`);
        });
    });
    });
    
});