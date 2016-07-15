/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require("http"), url = require("url"), fs = require("fs");
var port = 8888;

http.createServer(function (req, res) {
    var urlData = url.parse(req.url, true);
    var pathname = urlData.pathname;
    
    if(pathname == "/webRTC"){
        fs.readFile("./views/webRTC.html", function(err, data){
            if(err){
                console.log(err);
                res.end(err);
            }
            res.end(data);
        });
    }else if(pathname == "/rtc.js"){        
        fs.readFile("./public/js/rtc.js", function(err, data){
            res.end(data);
        });
    }else if(pathname == "/rtc.css"){
        fs.readFile("./public/style/rtc.css", function(err, data){
            res.end(data);
        });
    }
}).listen(port, function(){
    console.log("Server is running on port: ", port);
});




