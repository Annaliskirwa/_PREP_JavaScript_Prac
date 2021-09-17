//business logic
BankAccount = function(name, balance){
    this.name = name;
    this.balance = balance;
};

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.toString = function(){
    return "Name: " + this.name + " Balance: $"+ this.balance;
};