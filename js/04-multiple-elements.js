//-------------------------------------------------
// Event listeners on multiple-elements
//  + using the evt object to capture
/// where an event happened
//-------------------------------------------------k

var collectionItemNodeList = document.querySelectorAll('.collection-item')
var collectionItemElsArray = [ ...collectionItemNodeList ]


function handlePlusBtnClick(evtObj){

  var divClickedDomEl = evtObj.currentTarget
  var exactClickedDomEl = evtObj.target

  console.log(exactClickedDomEl)

  if(exactClickedDomEl.tagName.toUpperCase() === 'BUTTON'){
    var cartListDomEl = document.querySelector('.your-cart')
    var itemNameDomEl = divClickedDomEl.querySelector('.item-name')
    console.log(itemNameDomEl)
    cartListDomEl.innerHTML += `<li>${itemNameDomEl.textContent}</li>`
  }

  console.log('---')

}

// NO!, we cannot put .addEventListener(...) on an array
// collectionItemElsArray.addEventListener("click", ...)


// (1)
collectionItemElsArray.forEach(function putEventListenerOnCollItemEl(collItemDomEl, i){
  collItemDomEl.addEventListener('click', handlePlusBtnClick )
})
