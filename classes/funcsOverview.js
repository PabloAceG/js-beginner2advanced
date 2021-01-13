// Modify CSS elements
var cssProperty = document.querySelector();
var cssPropertyAll = document.querySelectorAll(); // using the syntax '#tag > label' can access to
                                                  // the element containing the CSS tag "#tag", and 
                                                  // the children with using label "label" (p, 
                                                  // input, h1, span, a, etc.)
// Element by Id 
var elementById = document.getElementById();
// Element by Class
var elementsOfType = document.getElementsByClassName();
// Add/remove classes 
elementById.classList.add('big');
elementById.classList.remove('big');
// Get/Modify property
    // Inline Style
    // element.style.{inline-style-property}
elementById.style.width = '300px';
    // Css File
    // window.getComputedStyle(element).{style-property-name}
window.getComputedStyle(elementById).width = '300px';


// Repeat through period
var period = 1000; // In ms
setInterval(function() {}, period);


// Forms events
var username = document.getElementById('form-username');
    // element.addEventListener({event} , function)
username.addEventListener('input', function(event) {
    // event.target: HTML element that triggered this event
    console.log(event.target);
    console.log(event.target.value); // Value from form field
});


// Keyboard events
    // Key up
document.body.addEventListener('keyup', function(e) { var keyCode = e.keyCode; });
    // Key down
document.body.addEventListener('keydown', function(e) { var keyCode = e.key; });
    // Key press
document.body.addEventListener('keypress', function(e) { var keyCode = e.key; });


// Mouse Events
var btn = document.getElementById('top-btn')
    // Mouse Down
btn.addEventListener('mousedown', function(e) {  });
    // Mouse Up
btn.addEventListener('mouseup', function(e) {  });
    // Click
btn.addEventListener('click', function(e) {  });
    // Double Click
btn.addEventListener('dblclick', function(e) {  });
    // Mouse Over: repeats action while hovering over element
btn.addEventListener('mouseover', function(e) {  });
    // Mouse Enter: when getting INTO the element
btn.addEventListener('mouseenter', function(e) {  });
    // Mouse Move
btn.addEventListener('mousemove', function(e) {  });

// Create HTML Elements
var list = document.getElementById('list');

    // document.createElement({element})
var newListElement = document.createElement('li');
var textNode = document.createTextNode('Element ' + (list.childElementCount + 1));
newListElement.appendChild(textNode);
newListElement.id = "item-" + (list.childElementCount + 1);
list.appendChild(newListElement);

// Update HTML Elements
var firstElement = list.firstElementChild;
list.replaceChild(newListElement, firstElement);

// Remove HTML Elements
list.removeChild(firstElement);

// Browser Object Model
// Window contains:
window.innerWidth; // = innerWidth
window.setTimeout();
window.setInterval();
window.alert('Shows a message');
window.confirm('Confirmation pop-up'); // ok = true, cancel = false
window.prompt('Write a numer'); // ok = text writen
window.open('https://www.google.es'); // opens a new window with to the specified URL
window.close(); // closes current tab
    // document
window.document // = document
    // history - array of URLs visited by user 
window.history; // = history
    // location
    // screen - information about screen (pixels available, in use, etc.)
window.screen; // = screen
    // navigator - information about web browser
window.navigator; // = navigator
