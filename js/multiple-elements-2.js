//-------------------------------------------------
// Event listeners on multiple-elements
//  + using the evt object to capture
/// where an event happened
//-------------------------------------------------k

var collectionItemEls = document.querySelectorAll('.collection-item')

console.log(collectionItemEls)

// NOOOO Don't do this ever you cant 
// addButtonEls.addEventListener("click", function(){
// 	console.log('rats')
// })

forEach( collectionItemEls , function( domElement, index, theArray ){
	domElement.addEventListener('click', function(evt){
		console.log('event heard')

	   var domElementOfEvent = evt.target
		var currentTargetDOMEl = evt.currentTarget

		if(domElementOfEvent.className === 'adder' ){
			var itemNameEl = currentTargetDOMEl.querySelector('.item-name')
			var cartListContainerEl =  document.querySelector('.your-cart')
		
			cartListContainerEl.innerHTML +=  '<li>' + itemNameEl.textContent + '</li>'
		}
		
	
		

	})
})