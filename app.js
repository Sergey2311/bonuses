console.log('worked');

const purchaseAmount = 1000;
const AvailableBonuses = 9700;
const maxBonusesSpend = purchaseAmount * 0.5;
let BonusesForSpend;
if (maxBonusesSpend <= AvailableBonuses) {
    BonusesForSpend = maxBonusesSpend;
} else {
    BonusesForSpend = AvailableBonuses;
}
console.log(BonusesForSpend);
const total = purchaseAmount - BonusesForSpend;
console.log(total);