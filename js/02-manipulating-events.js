// B : using the event-handler function to modify another element
//--------------------------------------------

var btnDomEl = document.querySelector('.write-btn')

function writeMsgToDiv(){
  var msgDomEl = document.querySelector('.msg')
  msgDomEl.textContent = 'The button was clicked'
}

btnDomEl.addEventListener('click', writeMsgToDiv )
