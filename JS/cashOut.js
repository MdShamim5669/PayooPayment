document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const CashoutBalance = document.getElementById('cashout-money-input').value;
    const CashoutNumber = parseFloat(CashoutBalance);
    const CashoutPin = document.getElementById('cashout-pin-input').value;

    if(CashoutPin === '1234'){

        const Balance = document.getElementById('account-balance').innerText;
        const BalanceNumber = parseFloat(Balance);
        
        const UpdatedBalance = BalanceNumber - CashoutNumber;

        document.getElementById('account-balance').innerText = UpdatedBalance;
    }
    else{
        alert("Wrong Pin.")
    }
})