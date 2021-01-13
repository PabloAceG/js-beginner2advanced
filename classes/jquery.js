// JQuery is a JS Library
// $ is used to access JQuery

// Import JQuery
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

var list  = document.getElementById('todo-list');
var list2 = $('#todo-list');
// Select using attributes
var inputText = $('intput[type=text]');

// Use <name> to select a tag
var elemByTag = $('p');
// Use #<name> to select an id
var elemById = $('#btn-add');
// Use .<name> to select a class
var elemByClass = $('.smart-watch');

// Can also interact with the JS DOM
$(document).ready(function() {
    console.log('I\'m ready');
});

// Access InnerHTML
var li = $('#li').html();

// Acess CSS
// $('selector').css('property')
var css = $('#todo-item').css('font-size');
$('#todo-item').css({    // Update class
    'font-size': '24px',
    'color': 'red'
});
$('.item-list').addClass('dark-card'); // Add class
$('.item-list').removeClass('dark-card'); // Remove class

// Handle events
// $('selector').event-name(function() { })
var btnAdd = $('btn-add');
btnAdd.click(function() {
    console.log('Element created');
});
inputBox.on({ // Event Listener
    'input': function(e) {
        console.log('New element');
    }, 
    'keyup': function(e) {
        console.log('Key lifted');
    }
});

// AJAX calls
// $.get(url, callback)
$.get('http://myurl.com/get', function(data, status) {
    var response = data;
});
// $.post(url, object, callback) 
$.post('http://myurl.com/post', {'name': 'pablo'}, function(data, status) {
    var response = data;
});
