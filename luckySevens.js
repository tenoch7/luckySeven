

function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1));
}

function validateItems() {
    var bet = document.forms["betting"]["startingBet"].value;
    if (bet == "" || bet == 0 || bet < 0 || isNaN(bet)){
        alert("Starting Bet can't be less or equal to 0.");
        document.forms["betting"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["betting"]["startingBet"].focus();
        return false;
    }
}



