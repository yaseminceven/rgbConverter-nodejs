var expect = require("chai").expect;
var request = require("request");

describe("Color Code Converter API Test", function() {

    var baseUrl = "http://localhost:3000";

    describe("RGB to Hex conversion", function() {
        var url = baseUrl+"/rgbToHex?red=255&green=255&blue=255";

        before("Execution log test",function(done){
            console.log("Executing RGB To Hex tests....");
            setTimeout(done,100);
        });

        it("returns status 200", function(done) {
            request(url,function(error,response,body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        });

        it("returns the color in hex", function(done) {
            request(url,function(error,response,body){
                expect(body).to.equal("ffffff");
                done();
            })
        });
    });
  
    describe("Hex to RGB conversion", function() {
        var url = baseUrl+"/hexToRgb?hex=00ff00";

        before("Execution log test",function(done){
            console.log("Executing Hex To RGB tests....");
            setTimeout(done,100);
        });

        it("returns status 200", function(done) {
            request(url,function(error,response,body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        });

        it("returns the color in RGB", function(done) {
            request(url,function(error,response,body){
                expect(body).to.equal("[0,255,0]");
                done();
            })
        });
    });
  
  });