//business logic
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }
Account.prototype.deposit = function(amount){
    if (this._isPositive(amount)){
        this.balance += amount;
        console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
        return amount
    }
    return false
}
Account.prototype.withdraw = function(amount){
    if (this._isAllowed(amount)){
        this.balance -= amount;
        console.log(`Withdraw: ${this.name} new balance is ${this.balance}`);
        return true
    }
    return false
}
Account.prototype._isPositive = function(amount){
    const isPositive = amount > 0;
    if (!isPositive){
        console.log("Amount must be positive");
        return false
    }
    return true
}
Account.prototype._isAllowed = function(amount){
    if (!this._isPositive(amount)) return false;

    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed){
        console.log("You have insufficient funds");
        return false
    }
    return true
}
function resetFields(){
    $("input#deposit-amount").val("");
    $("input#withdraw-amount").val("");
}
//user interface logic
$(document).ready(function(){
    $("form#new-account").submit(function(event){
        event.preventDefault();
        var name = $("input#account-name").val();
        var balance1 = $("input#initial-deposit").val();
        var balance = parseInt(balance1)
        var newAccount = new Account(name, balance);
    $("#output-balance").text(`Name: ${newAccount.name} Amount: ${newAccount.balance}`);
    console.log(newAccount.balance)
    })
    $("#confirm2").click(function(){
        var amount1 = $("input#deposit-amount").val();
        var amount = parseInt(amount1)
        console.log(amount)
    })
})