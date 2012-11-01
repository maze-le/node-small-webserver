/*
  server.js
  
  A small, non-caching, static HTTP-Server.
  
  Dispatches req.method and serves corresponding http-responses.
*/

var url = require('url'),
    http = require('http'),
    static = require('./static.js'),
    error = require('./error.js');

var host = "127.0.0.1",
    port = 1337;

var parseURI = function(req){
    return url.parse(req.url).pathname.toLowerCase();    
};

var get = function(req, res, uri){
    static.fileOr404(req, res, uri);
};

var post = function(req, res, uri){
    error.http501(req, res, "No POST-method available.");
};

var put = function(req, res, uri){
    error.http501(req, res, "No PUT-method available.");
};

http.createServer(function(req, res){
    var uri = parseURI(req);
    switch(req.method){
    case 'GET': 
        get(req, res, uri);
        break;
    case 'POST': 
        post(req, res, uri);
        break;
    case 'PUT': 
        put(req, res, uri);
        break;
    default:
        error.http501(req, res);
        break;
    }
}).listen(port, host);
