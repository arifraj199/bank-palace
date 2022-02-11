// deposite calculation
const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click', function() {
    // get input deposite value
    const depositeInputField = document.getElementById('deposite-input-field');
    const depositeInputValue = depositeInputField.value;
    const depositeValue = parseFloat(depositeInputValue);

    // get current deposite balance
    const currentDepositeFind = document.getElementById("current-deposite-balance");
    const currentDepositeBalanceText = currentDepositeFind.innerText;
    const currentDepositeBalance = parseFloat(currentDepositeBalanceText);

    // get total deposite balance
    currentDepositeFind.innerText = currentDepositeBalance + depositeValue;
    depositeInputField.value = '';

    // get total balance
    const currentTotalBalanceFind = document.getElementById("current-total-balance");
    const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceText);

    // get total balance count
    currentTotalBalanceFind.innerText = currentTotalBalance + depositeValue;

});

// withdraw calculation
const withdrawButton = document.getElementById('withdraw-button');
withdrawButton.addEventListener('click', function() {
    // get input withdraw value
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const withdrawInputValue = withdrawInputField.value;
    const withdrawValue = parseFloat(withdrawInputValue);

    // get current withdraw balance
    const currentWithdrawFind = document.getElementById('current-withdraw-balance');
    const currentWithdrawText = currentWithdrawFind.innerText;
    const currentWithdrawBalance = parseFloat(currentWithdrawText);

    // get total withdraw balance
    currentWithdrawFind.innerText = currentWithdrawBalance + withdrawValue;
    withdrawInputField.value = '';

    // get total balance
    const currentTotalBalanceFind = document.getElementById("current-total-balance");
    const currentTotalBalanceText = currentTotalBalanceFind.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceText);

    // get total balance count
    currentTotalBalanceFind.innerText = currentTotalBalance - withdrawValue;

})