export function findAllTextBeforeLeftBracket(text: string, index: number) {
  const leftParens = "(";
  let currentText = "";
  let bracketFound = false;
  let currentIndex = index;
  while (!bracketFound) {
    const currentCharacter = text.charAt(currentIndex);
    if (leftParens.includes(currentCharacter)) {
      console.log("We found a left bracket");
      bracketFound = true;
      break;
    }
    currentText += currentCharacter;
    currentIndex--;
  }
  return {
    leftText: [...currentText].reverse().join(""),
    leftBracketIndex: currentIndex
  };
}

export function findAllTextBeforeRightBracket(text: string, index: number) {
  const rightParens = ")";
  let currentText = "";
  let bracketFound = false;
  let currentIndex = index;
  while (!bracketFound) {
    const currentCharacter = text.charAt(currentIndex);
    if (rightParens.includes(currentCharacter)) {
      console.log("We found a right bracket");
      bracketFound = true;
      break;
    }
    currentText += currentCharacter;
    currentIndex++;
  }
  return { rightText: currentText, rightBracketIndex: currentIndex };
}

export function swapParameters(text: string, index: number) {
  const { leftText, leftBracketIndex } = findAllTextBeforeLeftBracket(
    text,
    index
  );
  const { rightText, rightBracketIndex } = findAllTextBeforeRightBracket(
    text,
    index + 1
  );
  const allTextBetweenParens = leftText + rightText;

  if (countCommasInText(allTextBetweenParens) === 0) {
    throw new Error("Invalid selection, no commas between parens");
  } else if (countCommasInText(allTextBetweenParens) > 1) {
    throw new Error(
      "Invalid selection, more than one parameter present between parens"
    );
  }

  return {
    text: allTextBetweenParens,
    leftBracketIndex,
    rightBracketIndex
  };
}

export function countCommasInText(text: string) {
  let commaCount = 0;
  [...text].forEach(character => {
    if (character === ",") {
      commaCount++;
    }
  });
  return commaCount;
}
