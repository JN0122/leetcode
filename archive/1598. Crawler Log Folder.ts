function minOperations(logs: string[]): number {
  let dirLevel = 0;
  for (const log of logs) {
    switch (log) {
      case "../":
        if (dirLevel > 0) dirLevel--;
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
