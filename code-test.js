for (var i=1; i<=5; i++) {
  (function IFEE(i){  
    setTimeout(function(){
        console.log("i: " + i);
    },i * 1000);
  })(i)
}
