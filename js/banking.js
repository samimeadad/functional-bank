//Event handler for Deposit Button
document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    //1. Get the deposit ammount from the input field
    const depositInputField = document.getElementById( 'deposit-input' );
    const depositInputText = depositInputField.value;
    const depositInputAmount = parseFloat( depositInputText );

    //2. Get the previous total deposit amount from the total deposit field
    const totalDepositField = document.getElementById( 'deposit-total' );
    const previousTotalDepositText = totalDepositField.innerText;
    const previousTotalDepositAmount = parseFloat( previousTotalDepositText );

    //3. Calculate and update the total deposit
    const newTotalDepositAmount = previousTotalDepositAmount + depositInputAmount;
    totalDepositField.innerText = newTotalDepositAmount;

    //4. Update the balance
    const totalBalance = document.getElementById( 'balance-total' );
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat( previousTotalBalanceText );
    const newTotalBalanceAmount = previousTotalBalanceAmount + depositInputAmount;
    totalBalance.innerText = newTotalBalanceAmount;

    //5. Clear the deposit input field after total deposit update
    depositInputField.value = '';
} );

//Event handler for Withdraw Button
document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    //1. Get the withdraw ammount from the input field
    const withdrawInputField = document.getElementById( 'withdraw-input' );
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat( withdrawInputText );

    //2. Get the previous total withdraw amount from the total deposit field
    const totalWithdrawField = document.getElementById( 'withdraw-total' );
    const previousTotalWithdrawText = totalWithdrawField.innerText;
    const previousTotalWithdrawAmount = parseFloat( previousTotalWithdrawText );

    //3. Calculate and update the total withdraw
    const newTotalWithdrawAmount = previousTotalWithdrawAmount + withdrawInputAmount;
    totalWithdrawField.innerText = newTotalWithdrawAmount;

    //4. Update the balance
    const totalBalance = document.getElementById( 'balance-total' );
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat( previousTotalBalanceText );
    const newTotalBalanceAmount = previousTotalBalanceAmount - withdrawInputAmount;
    totalBalance.innerText = newTotalBalanceAmount;

    //5. Clear the withdraw input field after total withdraw update
    withdrawInputField.value = '';
} );