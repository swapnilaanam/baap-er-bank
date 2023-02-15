document.getElementById('btn-deposit').addEventListener('click', function() {
    // get the deposit amount from the deposit input field
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if(isInValidInput(newDepositAmount) === true) {
        return;
    }
    
    // get the previous deposit total 
    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    // calculate the new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set the new deposit total to the deposit total element
    setTextElementValueById('deposit-total', newDepositTotal);

    // get the previous balance total
    const previousBalanceTotal = getTextElementValueById('balance-total');
    
    // calculate the new balance total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set the new balance total to the balance total element
    setTextElementValueById('balance-total', newBalanceTotal);

})