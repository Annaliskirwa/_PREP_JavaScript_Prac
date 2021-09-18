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
    })
})