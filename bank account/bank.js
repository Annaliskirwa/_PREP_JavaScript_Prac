//business logic
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }
Account.prototype.deposit = function(amount){
    if (this._isPositive(amount)){
        this.balance =+ amount;
        console.log(`Deposit: ${this.name} new balance is ${this.balance}`);
        return true
    }
    return false
}