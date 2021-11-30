var static = require('node-static');

var PORT = 8000;

var file = new static.Server('./public');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response, function(e, res) {
          if (e && e.status === 404) {
            file.serveFile('/error.html', 404, {}, request, response);
          }
        });
    }).resume();
}).listen(PORT, function() {
  console.log(`Server is on port ${PORT}`);
});

//cmd: node server
//that's for starting the server and nothing else

//cmd: live-server
//that's for the same thing lol