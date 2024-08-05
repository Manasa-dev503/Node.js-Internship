var http = require('http')
var url = require('url')
http.createServer(function(req,res){
    var reqroute = url.parse(req.url)
    console.log(reqroute.pathname)
    res.write(reqroute.pathname)
    res.end()
    

}).listen(8080)