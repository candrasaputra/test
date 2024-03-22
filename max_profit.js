function maxProfit(arr) {
    let start = arr[0];
    let profit = 0;

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let tempProfit = current - start;

        if (current < start) {
            start = current;
        } else if (tempProfit > profit) {
            profit = current - start;
        }
    }

    return profit === 0 ? -1 : profit;
}

console.log(maxProfit([44,30,24,32,35,30,40,38,15]));