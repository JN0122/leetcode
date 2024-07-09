function findTheWinner(n, k) {
    var friendsInCircle = new Array();
    for (var i = 1; i <= n; i++)
        friendsInCircle.push(i);
    var index = 0;
    while (friendsInCircle.length > 1) {
        index = (k - 1 + index) % friendsInCircle.length;
        friendsInCircle.splice(index, 1);
    }
    return friendsInCircle[0];
}
console.log(findTheWinner(6, 5));
console.log(findTheWinner(5, 2));
