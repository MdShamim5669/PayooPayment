// Show the cashOut button
document.getElementById('btn-Show-Cash-Out').addEventListener('click',function(event){
    
    document.getElementById('Show-cash-out-form').classList.remove('hidden');
    document.getElementById('Show-add-money-form').classList.add('hidden');
})

document.getElementById('btn-Show-add-money').addEventListener('click',function(event){

    document.getElementById('Show-add-money-form').classList.remove('hidden');
    document.getElementById('Show-cash-out-form').classList.add('hidden')
})