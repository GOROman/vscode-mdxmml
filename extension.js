// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const child_process = require('child_process');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	vscode.window.onDidCloseTerminal(() => {
//        codeManager.onDidCloseTerminal();
    });

    var outputChannel = vscode.window.createOutputChannel("MDX");
	outputChannel.appendLine("MDX!");

	let run = vscode.commands.registerCommand('mdxmml.run', function () {

		child_process.exec('mxp -d 120 bos14.mdx', (error, stdout, stderror) => {
			outputChannel.appendLine(stdout);
			console.log(stdout);
			console.log(stderror);
       });
		vscode.window.showInformationMessage('Play MDX');
	});

	let stop = vscode.commands.registerCommand('mdxmml.stop', function () {
		// The code you place here will be executed every time your command is executed

		child_process.exec('killall mxp', (error, stdout, stderror) => {
			outputChannel.appendLine(stdout);
			console.log(stdout);
			console.log(stderror);
       });
		// Display a message box to the user
		vscode.window.showInformationMessage('Stop MDX');
	});


	context.subscriptions.push(run);
	context.subscriptions.push(stop);
}	

// this method is called when your extension is deactivated
function deactivate() {
	vscode.window.showInformationMessage('Stop MDX');
	child_process.exec('killall mxp', (error, stdout, stderror) => {
//		outputChannel.appendLine(stdout);
//		outputChannel.appendLine(stderror);
	});
}

module.exports = {
	activate,
	deactivate
}
