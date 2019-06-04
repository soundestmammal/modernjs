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

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'GET');
