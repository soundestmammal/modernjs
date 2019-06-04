/*
Default Function Arguments:

Purpose:

Example: Suppose that we are making an ajax request.
*/

/* Kind of Requests
1. Get, 
2. Post, 
3. Put, 
4. Delete
*/
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
    // logic to make the request
}

// REFACTOR for ES6
function makeAjaxRequest(url, method = 'GET') {
    return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');
