

// A - anatomy of event listener (pop alert)
//-------------------------------------------

//(1) select dom element that receives event (the listening element
var alerBtnDomEl = document.querySelector('.pop-alert')

//(2) declare what will happen (the event-handler function)
function popAlertBox(){
  alert('BUTTON WAS PUSHED')
}

//(3) add the event listener to the element that will receive the event,
//     « elemenet ».addEventListener( «evt-type» , « event-handler function »


alerBtnDomEl.addEventListener('click', popAlertBox )
