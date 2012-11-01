/*
  error.js
  
  HTTP Server module: Standard http-error responses
  
  mandatory args: res - response-Object used by 'http'
  optional args: msg - optional error-message
  
*/

exports.http404 = function(res, msg){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Server-Error: 404 - file not found.');
    if(msg != undefined && typeof(msg) === "string")
        res.write('\n'+msg);
    res.end('\n');
}

exports.http500 = function(res, msg){
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write('Server-Error: 500 - internal server error');
    if(msg != undefined && typeof(msg) === "string")
        res.write('\n'+msg);
    res.end('\n');
}

exports.http501 = function(res, msg){
    res.writeHead(501, {'Content-Type': 'text/plain'});
    res.write('Server-Error: 501 - ' + req.method + ' method not implemented');
    if(msg != undefined && typeof(msg) === "string")
        res.write('\n'+msg);
    res.end('\n');
}
