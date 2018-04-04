module.exports = function (request, responce){
    return {
      index: function(request, response, fs) { 
          console.log(request.url);
          var url = request.url
          //responding with a stylesheet
            if(url.indexOf('css') > -1){
              var the_url = request.url;
                var responding = response.writeHead(200, {'Content-type': 'text/css'});
                fs.readFile('style'+ the_url , 'utf8', function (errors, contents) {
                response.write(contents); 
                response.end();
              
              console.log('hello')
              return responding;
            });
          }
          //responding with and image
          else if(url.indexOf('img') > -1){
              var the_url = request.url;
              var responding = response.writeHead(200, {'Content-type': 'image/jpg'});
                fs.readFile('images'+ the_url ,function (errors, contents) {
                response.write(contents); 
                response.end();
              
              console.log('hello')
              return responding;
            });
          }
          //if it's not a stylesheet or image respond with and html file
          else{
            var the_url = request.url;
              var responding = response.writeHead(200, {'Content-type': 'text/html'});
              fs.readFile('views'+ the_url +'.html', 'utf8', function (errors, contents) {
              response.write(contents); 
              response.end();
            
            console.log(responding)
            return responding;
          });
          }
          
          
      }
    }
  };