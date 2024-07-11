function reverseParentheses(s: string): string {
  let findDeepestElement = /\(([a-z]*?)\)/;
  let match: RegExpMatchArray | null;
  let textToReplace: string;

  while (true) {
    match = s.match(findDeepestElement);
    if (!match) break;
    textToReplace = match[1].split("").reverse().join("");
    s = s.replace(findDeepestElement, textToReplace);
  }

  return s;
}
console.log(reverseParentheses("(abcd)")); // dcba
console.log(reverseParentheses("(u(love)i)")); // iloveu
console.log(reverseParentheses("(ed(et(oc))el)")); // leetcode
