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
// get current total balance
function currentExistingBalance() {
    const currentTotalBalanceFind = document.getElementById("current-total-balance");
    const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceText);
    return currentTotalBalance;

}
// get total balance
function totalBalance(getTotalBalanceText, depositeValue, isAdd) {
    const currentTotalBalanceFind = document.getElementById(getTotalBalanceText);
    const currentTotalBalance = currentExistingBalance();
    if (isAdd == true) {
        currentTotalBalanceFind.innerText = currentTotalBalance + depositeValue;
    } else {
        currentTotalBalanceFind.innerText = currentTotalBalance - depositeValue;
    }
}

// deposite calculation
const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click', function() {

    const depositeValue = getInput('deposite-input-field');
    if (depositeValue > 0) {
        getBalance("current-deposite-balance", depositeValue);
        totalBalance("current-total-balance", depositeValue, true);
    } else {
        alert('Please give valid value');
    }
});

// withdraw calculation
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function() {

    const withdrawValue = getInput('withdraw-input-field');
    const currentTotalBalance = currentExistingBalance();
    if (withdrawValue > 0 && withdrawValue < currentTotalBalance) {
        getBalance('current-withdraw-balance', withdrawValue);
        totalBalance("current-total-balance", withdrawValue, false);
    } else {
        alert('Please give valid value');
    }
})