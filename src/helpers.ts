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
  return [...currentText].reverse().join("");
}

export function findAllTextBeforeRightBracket(text: string, index: number) {
  const rightParens = ")";
  let currentText = "";
  let bracketFound = false;
  let currentIndex = index;
  while (!bracketFound) {
    const currentCharacter = text.charAt(currentIndex);
    if (rightParens.includes(currentCharacter)) {
      console.log("We found a left bracket");
      bracketFound = true;
      break;
    }
    currentText += currentCharacter;
    currentIndex++;
  }
  return currentText;
}

export function buildMethodSignature(text: string, index: number) {
  const allTextBetweenParens =
    findAllTextBeforeLeftBracket(text, index) +
    findAllTextBeforeRightBracket(text, index + 1);
  if (!allTextBetweenParens.includes(",")) {
    throw new Error("Invalid selection, no commas between parens");
  }
  return allTextBetweenParens;
}
