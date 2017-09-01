// B : using the event-handler function to modify another element
//--------------------------------------------
var writeBtn = document.querySelector('.write-btn')
var writeSomething = function(){
   // it all happens here...
   var el = document.querySelector('.top.right')
   el.innerHTML = '<h3>This appeared from clicking <code>button.write-btn</code> elsewhere</h3>'
}
writeBtn.addEventListener('click', writeSomething)
