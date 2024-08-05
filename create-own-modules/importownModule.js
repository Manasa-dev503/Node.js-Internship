var http = require('http')
var dt = require("./myModule")

http.createServer(function(req,res){
    res.write("The current Date and Time is"+dt.dateTime())
    res.end()
    

}).listen(8080)