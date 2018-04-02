
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

function play() {
    validateItems();
        
    var bet = document.forms["betting"]["startingBet"].value;
    var startingBet = bet;
    var highestAmount = bet;
    var totalRolls = 0;
    var highestAmountRoll = 0;
    while (bet > 0){
        var dice1 = rollDice();
        var dice2 = rollDice();
        totalRolls++;
        if ( dice1 + dice2 == 7){
            bet = (bet + 4);
            if (bet > highestAmount){
                highestAmount = bet;
                highestAmountRoll = totalRolls;
            }
        }
        else {
            bet--;
        }
    }
    document.getElementById("resultTable").style.display = "block";
    document.getElementById("resultHeading").innerText = "Results";
    document.getElementById("resultStartingBet").innerText = "Starting Bet " + startingBet;
    document.getElementById("resultRollsBeforeBroke").innerText = "Total Rolls Before Broke " + totalRolls;
    document.getElementById("resultHighestWon").innerText = "Highest Amount Won " + highestAmount;
    document.getElementById("resultRollsHighestAmount").innerText = "Roll Count at Highest Amount Won " +highestAmountRoll ;
    
    return false;

} 



