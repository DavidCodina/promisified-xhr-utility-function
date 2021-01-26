/* =============================================================================
                             request()
============================================================================= */
//Works with the following data formats: JSON, FormData and querystrings (e.g., "title=blablabla&completed=false").
//Works with GET, POST, PUT, PATCH, and DELETE requests.


function request(config){
  return new Promise((resolve, reject) => {
    /* ========================
       Return early if...
    ======================== */


    if (config === null || typeof config === 'undefined'){
      return reject({ message: "A config object must be passed to request()." });
    }

    else if (!config.hasOwnProperty('type')){
      return reject({ message: "A config object must be given a 'type' property." });
    }

    else if (!config.hasOwnProperty('url')){
      return reject({ message: "A config object must be given a 'url' property." });
    }

    else if (
      (config.type.toUpperCase() === 'POST' || config.type.toUpperCase() === 'PUT' || config.type.toUpperCase() === 'PATCH') &&
      (!config.hasOwnProperty('data')       || config.data === null                || config.data === undefined || config.data === '')   ){
      return reject({ message: "A 'data' property and value (!null, !undefined, nor '') must be included with POST, PUT, and PATCH requests." });
    }

    else if (
      (config.type.toUpperCase() === 'DELETE' && config.hasOwnProperty('data')) &&
      (config.data === null || config.data === undefined || config.data === '')){
      return reject({ message: "When including a 'data' property with a DELETE request, the value must not be null, undefined, or ''." });
    }


    /* ========================
        Set async and type
    ======================== */


    if (!config.hasOwnProperty('async')){ config.async = true; }
    config.type = config.type.toUpperCase();


    /* ========================
       xhr & setRequestHeader
    ======================== */


    const xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, config.async);


    if (config.hasOwnProperty('data')){
      if (typeof config.data === 'object' && !(config.data instanceof FormData)){
        xhr.setRequestHeader("Content-type", "application/json");
        config.data = JSON.stringify(config.data);
      } else if (typeof config.data === 'string'){
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      //else if (config.data instanceof FormData){ } //Automatically set by FormData to "multipart/form-data"
    }


    /* ========================
             timeout
    ======================== */


    if (config.hasOwnProperty('timeout')){
      //Timeouts cannot be set for synchronous requests made from a document.
      if (config.async === true){ xhr.timeout = config.timeout; }
    }


    /* ========================
             onload
    ======================== */


    xhr.onload = function(){
      if (this.status !== 0){ return resolve(xhr); }
    };


    /* ========================
            onerror
    ======================== */
    ////////////////////////////////////////////////////////////////////////////
    //
    //  If the Promise is rejected, send back { message: "..." } as has been
    //  done previously. There's no point in sending back the xhr instance because
    //  it won't tell us anything useful:
    //
    //    response: "",
    //    responseText: "",
    //    responseType: "",
    //    status: 0,
    //    statusText: ""
    //
    ////////////////////////////////////////////////////////////////////////////


    xhr.onerror = function(e){
      return reject({ message: "Their was an error with the request." });
    };


    /* ========================
            ontimeout
    ======================== */


    xhr.ontimeout = function(){
      return reject({ message: "The request timed out." });
    };


    /* ========================
              send
    ======================== */


    if (config.type === 'GET'){
      xhr.send();
    } else if (config.type === 'POST' || config.type === 'PUT' || config.type === 'PATCH'){
      xhr.send(config.data);
    } else if (config.type ==="DELETE"){
      if (config.hasOwnProperty('data')){
        xhr.send(config.data);
      } else {
        xhr.send();
      }
    }

  }); //End of: return new Promise((resolve, reject) => { ... });
}
