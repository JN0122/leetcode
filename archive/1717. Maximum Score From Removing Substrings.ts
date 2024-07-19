type StringAndSearchOccurrence = {
  newText: string;
  occurrence: number;
};

function maximumGain(s: string, x: number, y: number): number {
  const searchValues = [/ab/, /ba/];
  const searchPoints = [x, y];

  if (y > x) {
    searchValues.reverse();
    searchPoints.reverse();
  }

  let points = 0;
  let result: StringAndSearchOccurrence;

  for (let i = 0; i < searchValues.length; i++) {
    result = removeRegexFromText(s, searchValues[i]);
    points += result.occurrence * searchPoints[i];
    s = result.newText;
  }
  return points;
}

function removeRegexFromText(
  text: string,
  searchRegexp: RegExp
): StringAndSearchOccurrence {
  const globalSearchRegexp = new RegExp(searchRegexp, "g");

  let allMatches = text.match(globalSearchRegexp);
  text = text.replace(globalSearchRegexp, "");
  if (allMatches == null) return { newText: text, occurrence: 0 };

  let occurrence = allMatches.length;

  allMatches = text.match(globalSearchRegexp);
  if (allMatches == null) return { newText: text, occurrence };

  let match: RegExpMatchArray;
  let startIndex: number;
  let endIndex: number;
  occurrence += allMatches.length;

  for (let i = 0; i < allMatches.length; i++) {
    match = text.match(searchRegexp);
    startIndex = match.index;
    endIndex = startIndex + 1;
    while (startIndex > 0 && endIndex <= text.length) {
      if (
        text[startIndex - 1] !== searchRegexp.source[0] ||
        text[endIndex + 1] !== searchRegexp.source[1]
      )
        break;
      startIndex--;
      endIndex++;
      occurrence++;
    }
    text = text.slice(0, startIndex) + text.slice(endIndex + 1);
  }

  return { newText: text, occurrence };
}

console.log(maximumGain("cdbcbbaaabab", 4, 5)); // 19
console.log(maximumGain("aabbaaxybbaabb", 5, 4)); // 20

// In this problem stack should be used. We iterate throught all the chars in string and we add them to the stack. When we encouter etc. stack:['x', 'a'], new char: 'b', pattern: "ab" we remove last item from stack.
