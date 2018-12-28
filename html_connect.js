var http=require('http');
var fs=require("fs");
var express=require('express');

var app=express();
var path=require("path");

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/form.html'));
});
// var server=http.createServer(function(req,res){
//     console.log("Request was made "+req.url);
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.createReadStream(__dirname+'/form.html');
// });
//http.open("GET","./chatbot.html",true);
app.listen(4000,'127.0.0.1');
console.log("Your server listens to port 4000");