// function count(expression) {
//     function getValues(expression) {
//       let values = expression.split('');
//       try {
//         if (values[2] === '0') {
//           throw new Error('Can not divide by 0');
//         }
//       } catch (error) {
//         return error.name + ': ' + error.message;
//         console.log(error)
            // values[0,'+',0]
        
//       }
//       return values;
//     }
  
//     let values = getValues(expression);
  
//     switch (values[1]) {
//       case '+':
//         return sum(values);
//       case '-':
//         return subtract(values);
//       case '*':
//         return multiply(values);
//       case '/':
//         return divide(values);
//     }
//   }
  
//   function sum(values) {
//     const nums = values.map(val => parseInt(val)).slice(0, 3);
//     return nums[0] + nums[2];
//   }
  
//   function subtract(values) {
//     return values[0] - values[2];
//   }
  
//   function multiply(values) {
//     return values[0] * values[2];
//   }
  
//   function divide(values) {
//     return values[0] / values[2];
//   }

// function count(expression) {
//          function getValues(expression) {
//            let values = [...expression];
//            return values;
//          }
      
//          let values;
//          try {
//             let data= Values;
//             data=values;
            
//             }
//            catch (error) {
//             console.log(error.name + ': ' + error.message)
//             values = [0,'+',0];
           
//           }
      
//          switch (values[1]) {
//            case '+':
//             return sum(values);
//            case '-':
//              return subtract(values);
//            case '*':
//              return multiply(values);
//            case '/':
//              return divide(values);
//          }
//         }
      
//        function sum(values) {
//         return + values[0]+ + values[2]
//       }
      
//       function subtract(values) {
//         return +values[0] -+ values[2];
//       }
      
//       function multiply(values) {
//         return +values[0] * +values[2];
//       }
      
//       function divide(values) {
//         return +values[0] / +values[2];
//       }

      function MakeUsers(name,age) {
        this.name=name,
        this.age=age;
      }
       let user = new MakeUsers('Mike');
       function showMovie (user){
        try{ 
            if (user.age === undefined){
             
             const age = parseInt(prompt('Please enter your age'))
              user.age=age
            }
            
            if(user.age>= 18){//undefined
             console.log('You can watch this movie');
         } else {
             console.log('Sorry, you are too young');
         }
        }
         catch(error){
            console.log(error);
            console.log(error.name);
            console.log(error.message);
        }
    }        
showMovie(user);
