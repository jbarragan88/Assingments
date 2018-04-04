module.exports = function (request, responce){
    return {
      index: function(request, response, fs) { 
          var responding = response.writeHead(200, {'Content-type': 'text/html'});
            fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.write(contents); 
            response.end();
            return responding;
          });    
      }
    }
  };