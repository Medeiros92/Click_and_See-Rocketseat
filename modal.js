//Criando divs
const divWin = document.createElement('div');
const divWinMsg = document.createElement('div');

// Criando const Body
const body = document.querySelector('body');

// Add div Pattern
body.append(divWin);

//Add div Child
divWin.append(divWinMsg);