alert("CONNECTINO ESTABLISHED");

function myForEach(arr, func) {
   //loop thorugh array
   for(var i=0; i<arr.length; i++) {
      // call func for each item in array
      func();
   }
}
