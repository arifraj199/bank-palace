// get input value
function getInput(getValue) {
    const inputField = document.getElementById(getValue);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = '';
    return value;
}
// get current balance
function getBalance(getText, depositeValue) {
    const currentBalanceFind = document.getElementById(getText);
    const currentBalanceText = currentBalanceFind.innerText;
    const currentBalance = parseFloat(currentBalanceText);
    currentBalanceFind.innerText = currentBalance + depositeValue;
}
// get total balance
function totalBalance(getTotalBalanceText, depositeValue) {
    const currentTotalBalanceFind = document.getElementById(getTotalBalanceText);
    const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceText);
    currentTotalBalanceFind.innerText = currentTotalBalance + depositeValue;
}

// deposite calculation
const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click', function() {
    // get input deposite value
    // const depositeInputField = document.getElementById('deposite-input-field');
    // const depositeInputValue = depositeInputField.value;
    // const depositeValue = parseFloat(depositeInputValue);
    const depositeValue = getInput('deposite-input-field');

    // get current deposite balance
    // const currentDepositeFind = document.getElementById("current-deposite-balance");
    // const currentDepositeBalanceText = currentDepositeFind.innerText;
    // const currentDepositeBalance = parseFloat(currentDepositeBalanceText);

    // get total deposite balance
    // currentDepositeFind.innerText = currentDepositeBalance + depositeValue;
    // depositeInputField.value = '';
    getBalance("current-deposite-balance", depositeValue);

    // get total balance
    // const currentTotalBalanceFind = document.getElementById("current-total-balance");
    // const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    // const currentTotalBalance = parseFloat(currentTotalBalanceText);

    // get total balance count
    // currentTotalBalanceFind.innerText = currentTotalBalance + depositeValue;
    totalBalance("current-total-balance", depositeValue);


});

// withdraw calculation
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function() {
    // get input withdraw value
    // const withdrawInputField = document.getElementById('withdraw-input-field');
    // const withdrawInputValue = withdrawInputField.value;
    // const withdrawValue = parseFloat(withdrawInputValue);
    const withdrawValue = getInput('withdraw-input-field');

    // get current withdraw balance
    // const currentWithdrawFind = document.getElementById('current-withdraw-balance');
    // const currentWithdrawText = currentWithdrawFind.innerText;
    // const currentWithdrawBalance = parseFloat(currentWithdrawText);

    // get total withdraw balance
    // currentWithdrawFind.innerText = currentWithdrawBalance + withdrawValue;
    // withdrawInputField.value = '';
    getBalance('current-withdraw-balance', withdrawValue);

    // get total balance
    // const currentTotalBalanceFind = document.getElementById("current-total-balance");
    // const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    // const currentTotalBalance = parseFloat(currentTotalBalanceText);

    // get total balance count
    // currentTotalBalanceFind.innerText = currentTotalBalance - withdrawValue;
    totalBalance("current-total-balance", withdrawValue);
})