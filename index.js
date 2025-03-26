const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Given array of battery batches

const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries);

