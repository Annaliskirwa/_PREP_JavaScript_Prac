var currentAccount = "";

$(function(){
  //$("#input-date").val(Date().toISOString());
  $("#new-account").submit(function(event){
    event.preventDefault();

    var userName = $("#account-name").val();
    var balance = parseFloat($("#initial-deposit").val());
    if(isNaN(balance))
    {
      balance = 0;
    }
    var newAccount = new BankAccount(userName,balance);
    currentAccount = newAccount;
    newAccount.output();
  });

  $("#new-account").submit(function(event){
    event.preventDefault();
    if(currentAccount != "")
    {
      var deposit = parseFloat($("#deposit-amount").val());
      var withdraw = parseFloat($("#withdraw-amount").val());
      if(isNaN(deposit))
      {
        deposit = 0;
      }
      if(isNaN(withdraw))
      {
        withdraw = 0;
      }
      var temp = deposit-withdraw;
      //console.log(formatUSD(temp));
      currentAccount.changeBalance(temp);
      currentAccount.output();
    }
  });

});

//Create a constructor for object Task
function BankAccount(inputUserName,inputBalance){
  this.name = inputUserName;
  this.balance = inputBalance;
}

BankAccount.prototype.output = function ()
{
  $("#output-balance").text(formatUSD(this.balance));
};

BankAccount.prototype.changeBalance = function (amount)
{
  this.balance += amount;
}

function clear(temp)
{
  $(temp).val("");
}

function formatUSD(tempString)
{
  return tempString.toLocaleString('en-US',{style: 'currency', currency: 'USD'});
}
