/*
1. Add withdraw button event handler
2. Get the new withdraw amount using getInputFieldValueById function
3. Get the previous withdraw total using getTextElementValueById function
4. Calculate the new withdraw total 
4-5. Set the new withdraw total to withdraw total element using setTextElementValueById function
5. Get the previous balance total using getTextElementValueById function
6. Calculate the new balance total
7. Set the new balance total to balance total element using setTextElementValueById function
*/

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if(isInValidInput(newWithdrawAmount) === true) {
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if(newWithdrawAmount > previousBalanceTotal) {
        alert('Baaper Bank E Eto Taka Nai!!!');
        return;
    }

    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})