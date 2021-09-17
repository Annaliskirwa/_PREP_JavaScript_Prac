//business logic
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }
Account.prototype.deposit = function(amount){
    if (this._isPositive(amount)){
        this.balance += amount;
        console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
        return true
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