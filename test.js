/* =============================================================================
                               Variables
============================================================================= */
//Note: json is actually a standard object literal (or Array).
//request() will serialize it. Do not JSON.stringify() it beforehand!


const url        = 'process.php';
const json       = { id: 123, first_name: 'Joe', last_name: 'Bazooka', is_cool: true };
const stringData = "id=123&first_name=Joe&last_name=Bazooka&is_cool=true";
const formData   = new FormData();


formData.append('id',         123);
formData.append('first_name', 'Joe');
formData.append('last_name',  'Bazooka');
formData.append('is_cool',     true);


/* =============================================================================
                         General Error/Warning Cases
============================================================================= */


//Indicates that a config object must be passed.
// request()
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//Sends a console.error message that the type property must be included.
// request({
//   //type:            'GET',
//   url:             'process.php?' + stringData,
//   async:           true,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//Sends a console.error message that the url property must be included.
// request({
//   type:            'GET',
//   //url:             'process.php?' + stringData,
//   async:           true,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//Logs that the request timed out.
// request({
//   type:            'GET',
//   url:             'process.php?' + stringData,
//   async:           true,
//   timeout:         2
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "A 'data' property and value (!null, !undefined, nor '') must be included with POST, PUT, and PATCH requests."
// request({
//   type:            'POST',
//   url:             'process.php',
//   async:           true,
//   //data:          null,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//Making a bad request (e.g., typo in URL) to the same origin will NOT trigger
//xhr.onerror. Instead, the browser seems intelligent enough to send it's
//own response with a 404. A 404 status will not trigger xhr.onerror() because,
//technically it's not an error; the 404 itself is a valid response.
// request({
//   type:            'POST',
//   url:             'not_found.php',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provided may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//Making a bad request (e.g., typo in URL) to an external origin WILL trigger xhr.onerror.
//"Their was an error with the request."
// request({
//   type:            'POST',
//   url:             'https://jsonplaceholder.typicode.co',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });


/* =============================================================================
                              GET Tests
============================================================================= */


//Gets data successfully :
// request({
//   type:            'GET',
//   url:             'process.php?' + stringData,
//   async:           true,
//   timeout:         1000 * 25
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });


/* =============================================================================
                              POST Tests
============================================================================= */


//"The POST request was received with JSON data."
// request({
//   type:            'POST',
//   url:             'process.php',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//"The POST request was received with FormData, or query string data)."
// request({
//   type:            'POST',
//   url:             'process.php',
//   async:           true,
//   data:            formData,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//"The POST request was received with FormData, or query string data)."
// request({
//   type:            'POST',
//   url:             'process.php',
//   async:           true,
//   data:            stringData,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });


/* =============================================================================
                              PUT Tests
============================================================================= */


//"The PUT request was received with JSON data."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//"The PUT request was received with FormData."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            formData,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




//"The PUT request was received with query string data)."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            stringData,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "A 'data' property and value (!null, !undefined, nor '') must be included with POST, PUT, and PATCH requests."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            undefined,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The request timed out."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            json,
//   timeout:         2,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });


/* =============================================================================
                              PATCH Tests
============================================================================= */


// "The PATCH request was received with JSON data."
// request({
//   type:            'PATCH',
//   url:             'process.php',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The PATCH request was received with FormData."
// request({
//   type:            'PATCH',
//   url:             'process.php',
//   async:           true,
//   data:            formData,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The PATCH request was received with query string data."
// request({
//   type:            'PATCH',
//   url:             'process.php',
//   async:           true,
//   data:            stringData,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "A 'data' property and value (!null, !undefined, nor '') must be included with POST, PUT, and PATCH requests."
// request({
//   type:            'PUT',
//   url:             'process.php',
//   async:           true,
//   data:            '',
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });


/* =============================================================================
                              DELETE Tests
============================================================================= */

// "The DELETE request was received without data."
// request({
//   type:            'DELETE',
//   url:             'process.php',
//   async:           true,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The DELETE request was received with JSON data."
// request({
//   type:            'DELETE',
//   url:             'process.php',
//   async:           true,
//   data:            json,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The DELETE request was received with FormData."
// request({
//   type:            'DELETE',
//   url:             'process.php',
//   async:           true,
//   data:            formData,
//   timeout:         1000 * 10,
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "The DELETE request was received with query string data."
// request({
//   type:            'DELETE',
//   url:             'process.php',
//   async:           true,
//   data:            stringData,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });




// "When including a 'data' property with a DELETE request, the value must not be null, undefined, or ''."
// request({
//   type:            'DELETE',
//   url:             'process.php',
//   async:           true,
//   data:            undefined,
//   timeout:         1000 * 10
// })
// .then(xhr => {
//   if (xhr.status >= 200 && xhr.status < 300){ //Or < 400
//     var data = JSON.parse(xhr.responseText);
//     return console.log(data);
//   }
//   if (xhr.status === 404){
//     return console.log("404 (Not Found). The URL provide may be incorrect.");
//   }
//   if (xhr.status >= 500){
//     return console.log("Server Error.");
//   }
//   //Handle other status codes...
// })
// .catch(err => {
//   if (err.hasOwnProperty('message')){ console.log(err.message); }
//   else { console.log(err); }
// });
