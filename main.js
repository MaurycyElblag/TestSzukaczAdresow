
const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');
var bodyParser = require("body-parser");
var google = require('./google.js');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log('1');
app.get('/file/*', function(  req,res){
    var filename = "." + req.url;
        fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        })
});
console.log('2');
app.get('/temp', function (req,res){
   ejs.renderFile('./Views/template.ejs',{}, function(err,data){
   res.send(data);
  });
});
console.log('3');
app.post('/handle_google',function(request,response){
   var street = request.body.street;
   var numberst = request.body.numberst;
   var city = request.body.city;
   var province = request.body.province;
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end( google.findAdress(street,numberst,city,province));
   });

   console.log('4');
 var server = app.listen(8001, function () {
        
    console.log("Example app listening ");
 });

 console.log('5');