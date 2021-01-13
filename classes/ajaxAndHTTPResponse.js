function getTODOListBackend() {
    var http = new XMLHttpRequest();
    var url = 'http://myurl.com/todos';

    // HTTP response
    // Gives access to readyState: 
    //      UNSENT, OPENED, HEADERS RECEIVED, LOADING, DONE
    //      0       1       2                 3        4
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 200) {
                // Work with HTTP Response Data
                var response = JSON.parse(this.responseText);
                
                for(var i = 0; i < response.length; i++) {
                    console(response[i].id, response[i].title);
                }
            } else {
                console.log('Call Failed');
            }
            
        }
    }

    // AJAX call
    // Asynchronous JavaScript And XML
    //        Method, url, async
    http.open('GET',  url, true);
    http.send();
}

function createTODOItemAtBackend() {
    var http = new XMLHttpRequest();
    var url  = 'http://myurl.com/todos';
    var data = {
        "userId": 1,
        "title": "delectus aut autem", 
        "completed": false
    } 

    http.open('POST', url, true);
    http.send(data);
}

getTODOListBackend();
