module.exports = function (){
    return {
      add: function(num1, num2) { 
          var result = num1 + num2;
           console.log(result);
           return result;
      },
      multiply: function(num1, num2) {
           var result = num1 * num2;
           console.log(result);
           return result;
      },
      square: function(num) {
           var result = num * num
           console.log(result);
           return result; 
      },
      random: function(num1, num2) {
           result = Math.floor(Math.random()* num2)+num1;
           console.log(result)
      }
    }
  };