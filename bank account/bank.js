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