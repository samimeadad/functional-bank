function getInputValue( inputId ) {
    //debugger;
    //Get the input field and its value
    const inputField = document.getElementById( inputId );
    const inputText = inputField.value;
    const inputAmount = parseFloat( inputText );

    //Clear the deposit input field after total deposit update
    inputField.value = '';

    //Return the input value to where function is called
    return inputAmount;
}

function updateTotalField( totalFieldId, inputAmount ) {
    // debugger;
    //Get the previous total amount from the total field
    const totalField = document.getElementById( totalFieldId );
    const previousTotalText = totalField.innerText;
    const previousTotalAmount = parseFloat( previousTotalText );

    //Calculate and update the total field
    const newTotalAmount = previousTotalAmount + inputAmount;
    totalField.innerText = newTotalAmount;
}

//Get Current Balance
function getPreviousBalance() {
    const totalBalance = document.getElementById( 'balance-total' );
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat( previousTotalBalanceText );
    return previousTotalBalance;
}

function updateBalance( inputAmount, isAdd ) {
    //Update the balance
    const totalBalance = document.getElementById( 'balance-total' );
    const previousTotalBalanceAmount = getPreviousBalance();

    if ( isAdd == true ) {
        totalBalance.innerText = previousTotalBalanceAmount + inputAmount;
    }
    else {
        totalBalance.innerText = previousTotalBalanceAmount - inputAmount;
    }
}


//Event handler for Deposit Button
document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    //Get the deposit ammount from the input field
    const depositInputAmount = getInputValue( 'deposit-input' );

    //Update Deposit Total and Balance and user input validation
    if ( depositInputAmount > 0 ) {
        updateTotalField( 'deposit-total', depositInputAmount );
        updateBalance( depositInputAmount, true );
    }
    else {
        alert( 'Please give a valid and positive amount' );
    }




} );

//Event handler for Withdraw Button
document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    //Get the withdraw ammount from the input field
    const withdrawInputAmount = getInputValue( 'withdraw-input' );
    const previousBalance = getPreviousBalance();

    //Withdraw amount validation, you cannot input a value greater than your balance
    if ( withdrawInputAmount > 0 && withdrawInputAmount < previousBalance ) {
        updateTotalField( 'withdraw-total', withdrawInputAmount );
        updateBalance( withdrawInputAmount, false );
    }
    else {
        alert( 'Please check your input!' );
    }

} );