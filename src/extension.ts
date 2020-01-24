import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "param-swap" is now active!');

  let disposable = vscode.commands.registerCommand(
    "extension.paramSwap",
    () => {
      const rightBrackets = "})]";
      // The code you place here will be executed every time your command is executed
      const editor = vscode.window.activeTextEditor;

      const offset = editor?.document.offsetAt(editor.selection.active);
      const text = editor?.document.getText();
      if (!text || !offset) {
        return;
      }
      // const textArray = [...text!] as string[];
      // [...text!].forEach(character => console.log(character));

      findAllTextBeforeLeftBracket(text, offset);
      debugger;
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World!");
    }
  );

  context.subscriptions.push(disposable);
}

export function findAllTextBeforeLeftBracket(text: string, index: number) {
  const leftBrackets = "{([";
  let currentText = "";
  let bracketFound = false;
  let currentIndex = index;

  while (!bracketFound) {
    const currentCharacter = text.charAt(currentIndex);
    if (leftBrackets.includes(currentCharacter)) {
      console.log("We found a left bracket");
      bracketFound = true;
    }
    currentText += currentCharacter;
    currentIndex--;
  }
  return currentText;
}

// this method is called when your extension is deactivated
export function deactivate() {}
