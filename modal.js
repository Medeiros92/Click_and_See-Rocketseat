
//criando const bt
const bt = document.querySelector('#openModal')

//Criando evento do botão
bt.addEventListener('click', function(){

    //Criando divs
const divWin = document.createElement('div');
const divWinMsg = document.createElement('div');

// Criando const Body
const body = document.querySelector('body');

// Add div Pattern
body.insertBefore(divWin,bt.nextElementSibling);

//Add div Child
divWin.append(divWinMsg);

// Add classe na div Pattern
divWin.setAttribute('class', 'modal-wrapper fixed bg-gray-500 w-screen h-screen flex items-center justify-center');

//Add classe na div Child
divWinMsg.setAttribute('class', 'p-8 bg-white text-center rounded');

// Add texto na div Child
divWinMsg.innerText = "Tecle ESC para fechar";
})

const body = document.querySelector('body');

//Função apaga Divs ao apertar tecla esc
document.addEventListener('keydown', (event) => {
    
    // Se tecla difitada for esc
    if(event.key === 'Escape') {

        //divp recebe elemento irmao de botao(divs)
        const divp = bt.nextElementSibling

        //remove divis
        body.removeChild(divp);
    }
})