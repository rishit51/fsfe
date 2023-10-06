const http=require('http');
http.createServer(function(req,res){

res.write('On th way to become a fullstack engineer!');
res.end();

}
).listen(3000);

console.log('Server started on port 3000');


