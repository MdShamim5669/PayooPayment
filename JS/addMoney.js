document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const addMoneyPin = document.getElementById('add-pin-input').value;

    if(addMoneyPin == '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const NewBalance = addMoneyNumber + balanceNumber ;
        console.log(NewBalance);

        document.getElementById('account-balance').innerText = NewBalance;
    }
    else{
        alert("Wrong Pin Number!!")
    }
})