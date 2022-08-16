const depositeBtn = document.getElementById("deposite-btn");
const depositeValueElement = document.getElementById("deposite-value");
const depositeAmountElement = document.getElementById("deposite-amount");
const withdrawBtn = document.getElementById("withdraw-btn");
const withdrawValueElement = document.getElementById("withdraw-value");
const withdrawAmountElement = document.getElementById("withdraw-amount");
const initialAmountElement = document.getElementById("initial-amount");

depositeBtn.addEventListener("click",function(){
  const depositeValueString = depositeValueElement.value;
  const depositeValue = parseFloat(depositeValueString);
  depositeValueElement.value = "";
  if(isNaN(depositeValue)){
    alert("Please Enter a Number!");
    return;
  }
  const depositeAmountString = depositeAmountElement.innerText;
  const depositeAmount = parseFloat(depositeAmountString);

  const totalDepositeAmount = depositeAmount + depositeValue;
  depositeAmountElement.innerText = totalDepositeAmount;

  const initialAmountString = initialAmountElement.innerText;
  const initialAmount = parseFloat(initialAmountString);
 
  const totalAmount = initialAmount + depositeValue;
  initialAmountElement.innerText = totalAmount;
})

withdrawBtn.addEventListener("click", function(){
  const withdrawValueString = withdrawValueElement.value;
  const withdrawValue = parseFloat(withdrawValueString);
  withdrawValueElement.value = "";
  if(isNaN(withdrawValue)){
    alert("Provide a number, Please!");
    return;
  }
  const withdrawAmountString = withdrawAmountElement.innerText;
  const withdrawAmount = parseFloat(withdrawAmountString);

  const initialAmountString = initialAmountElement.innerText;
  const initialAmount = parseFloat(initialAmountString);
  
  if(withdrawValue > initialAmount){
    alert("Insuficiant Balane!");
    return;
  }
  const totalWithdrawAmount = withdrawAmount + withdrawValue;
  withdrawAmountElement.innerText = totalWithdrawAmount;

  const totalAmount = initialAmount - withdrawValue;
  initialAmountElement.innerText = totalAmount;
})