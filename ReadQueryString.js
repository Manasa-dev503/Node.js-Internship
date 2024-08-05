var http = require('http')
http.createServer(function(req,res){
    //console.log(typeof(req.url))
    //res.write("Hello")
    res.write(req.url)
    res.end()

}).listen(8080)