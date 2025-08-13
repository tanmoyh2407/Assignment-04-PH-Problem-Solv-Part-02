// Problem No - 01

function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }
    const serviceCharge = 30;
    return fare + (fare * (20 / 100) + serviceCharge);
}

// Problem No - 02

function onlyCharacter(str) {
    if (typeof str !== 'string') {
        return 'Invalid';
    }
    return str.split(" ").join("").toUpperCase();
}

// Problem No - 03

function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid';
    }
    const player1Total = player1.foul + player1.cardY + player1.cardR;
    const player2Total = player2.foul + player2.cardY + player2.cardR;
    
    if(player1Total < player2Total) {
        return player1.name;
    }
    else if(player2Total < player1Total) {
        return player2.name;
    }
    else {
        return 'Tie';
    }
}

// Problem No - 04

function isSame(arr1, arr2) {
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false)
        return 'Invalid';
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

// Problem No - 5

