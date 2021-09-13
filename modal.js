//Criando divs
const divWin = document.createElement('div');
const divWinMsg = document.createElement('div');

// Criando const Body
const body = document.querySelector('body');

// Add div Pattern
body.append(divWin);

//Add div Child
divWin.append(divWinMsg);

// Add classe na div Pattern
divWin.setAttribute('class', 'modal-wrapper invisible fixed bg-gray-500 w-screen h-screen flex items-center justify-center');

//Add classe na div Child
divWinMsg.setAttribute('class', 'p-8 bg-white text-center rounded');

// Add texto na div Child
divWinMsg.innerText = "Tecle ESC para fechar"