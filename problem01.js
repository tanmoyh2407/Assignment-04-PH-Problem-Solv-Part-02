function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return 'Invalid'
    }
    const serviceCharge = 30;
    return fare + (fare * (20 / 100) + serviceCharge);
}

const fare = totalFine(-200);
console.log(fare);