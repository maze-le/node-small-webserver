/*
  static.js
  
  Server module: Static file requests
  
*/

var fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    error = require('./error.js'),
    staticdir = "static/";

var cwd = process.cwd();

exports.fileOr404 = function(req, res, uri){
    var file = (uri[uri.length - 1] === '/') ? path.join(cwd, staticdir, uri, 'index.html') : path.join(cwd, staticdir, uri);
    
    fs.exists(file, function(exists){
        if(!exists){
            error.http404(res);
        }
        else{
            fs.readFile(file, function(err, data){
                if(err){
                    console.log("Server Error 500 " + req.method + " - " + req.url)
                    error.http500(res);
                }
                
                res.writeHead(200, {'Content-Type': mime.lookup(file)});
                res.write(data);
                res.end('\n');
            });
        }
    });
};
