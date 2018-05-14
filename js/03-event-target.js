// C : evt.target to *dynamically select* and then modify
//     the element where the event happened
//-------------------------------------------------

var btn1DomEl = document.querySelector('.btn-1')
var otherBtnEl = document.querySelector('.other-btn')
var btnOptionEl = document.querySelector('.btn-option')


function putBtnDataInOutput(evtObj){
  console.log(evtObj)

  var btnWhereEvtHappenedEl = evtObj.currentTarget

  btnWhereEvtHappenedEl.classList.add('urgent')

  var msgEl = document.querySelector('.msg')
  msgEl.innerHTML = btnWhereEvtHappenedEl.textContent
}


btn1DomEl.addEventListener('click', putBtnDataInOutput)
otherBtnEl.addEventListener('click', putBtnDataInOutput)
btnOptionEl.addEventListener('click', putBtnDataInOutput)
