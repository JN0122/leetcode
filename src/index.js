function averageWaitingTime(customers) {
    var prepTime = [];
    var chefFreeAt = 0;
    var additionalWaitTime;
    for (var i = 0; i < customers.length; i++) {
        additionalWaitTime = 0;
        if (chefFreeAt <= customers[i][0]) {
            chefFreeAt = customers[i][0] + customers[i][1];
        }
        else {
            additionalWaitTime = chefFreeAt - customers[i][0];
            chefFreeAt += customers[i][1];
        }
        prepTime.push(customers[i][1] + additionalWaitTime);
    }
    return (prepTime.reduce(function (totalTime, waitTime) { return waitTime + totalTime; }, 0) /
        customers.length);
}
console.log(averageWaitingTime([
    [1, 2],
    [2, 5],
    [4, 3],
])); // 5
console.log(averageWaitingTime([
    [5, 2],
    [5, 4],
    [10, 3],
    [20, 1],
])); // 3.25
