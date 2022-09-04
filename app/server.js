var express = require("express");
var app = express();
var converter = require("./converter");

app.get("/rgbToHex",function(request,response){
    var red = parseInt(request.query.red,10);
    var green = parseInt(request.query.green,10);
    var blue = parseInt(request.query.blue,10);
    var hex = converter.rgbToHex(red,green,blue);
    response.send(hex);
});

app.get("/hexToRgb",function(request,response){
    var hex = request.query.hex;
    var rgb = converter.hexToRgb(hex);
    response.send(JSON.stringify(rgb));
});

app.listen(3000);
module.exports = app;