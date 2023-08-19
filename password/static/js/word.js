function validate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
  var res=true;
    if (isNaN(num1)) {
      error1.innerHTML = "Please enter a number";
      return false; 
    }else if(num1<0){
      error1.innerHTML="Enter a number greater than 0";
      return false;
    } 
    else if(num1>11){
      error1.innerHTML="Enter a number that is less than 11";
      return false;
    }
    else {
      error1.innerHTML = ""; 
    }
    if (isNaN(num2)) {
      error2.innerHTML = "Please enter a number";
      return false; 
    }else if(num2<0){
      error2.innerHTML="Enter a number greater than 0";
      return false;
    } 
    else if(num2>11){
      error2.innerHTML="Enter a number that is less than 11";
      return false;
    }
    else {
      error2.innerHTML = ""; 
    }
    if (isNaN(num3)) {
      error3.innerHTML = "Please enter a number";
      return false; 
    }else if(num3<0){
      error1.innerHTML="Enter a number greater than 0";
      return false;
    } 
    else if(num3>11){
      error3.innerHTML="Enter a number that is less than 11";
      return false;
    }
    else {
      error3.innerHTML = ""; 
    }
    if (isNaN(num4)) {
      error4.innerHTML = "Please enter a number";
      return false; 
    }else if(num4<0){
      error4.innerHTML="Enter a number greater than 0";
      return false;
    } 
    else if(num4>11){
      error4.innerHTML="Enter a number that is less than 11";
      return false;
    }
    else {
      error4.innerHTML = "";  
    }
    return res;
  }