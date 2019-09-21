console.log('worked');

const purchaseAmount = 1000;
const availableBonuses = 400;
const maxBonuses = purchaseAmount * 0.5;
const appliedBonuses = maxBonuses <= availableBonuses ? maxBonuses : availableBonuses;
console.log(appliedBonuses);
const total = purchaseAmount - appliedBonuses;
console.log(total);