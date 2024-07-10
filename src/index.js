function minOperations(logs) {
    var dirLevel = 0;
    for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
        var log = logs_1[_i];
        switch (log) {
            case "../":
                if (dirLevel > 0)
                    dirLevel--;
                break;
            case "./":
                break;
            default:
                dirLevel++;
        }
    }
    return dirLevel;
}
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(minOperations(["d1/", "../", "../", "../"])); // 0
