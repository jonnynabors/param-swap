import * as vscode from "vscode";
import {
  findAllTextBeforeLeftBracket,
  findAllTextBeforeRightBracket
} from "./helpers";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "param-swap" is now active!');

  let disposable = vscode.commands.registerCommand(
    "extension.paramSwap",
    () => {
      // The code you place here will be executed every time your command is executed
      const editor = vscode.window.activeTextEditor;

      const offset = editor?.document.offsetAt(editor.selection.active);
      const text = editor?.document.getText();
      if (!text || !offset) {
        return;
      }

      const leftText = findAllTextBeforeLeftBracket(text, offset);
      const rightText = findAllTextBeforeRightBracket(text, offset + 1);
      console.log(leftText + rightText);

      vscode.window.showInformationMessage("Hello World!");
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
