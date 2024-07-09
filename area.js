var input = 
document.getElementById("rectW");
input.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

var input2 = 
document.getElementById("rectH");
input2.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn").click();
  }
});

var input3 = 
document.getElementById("circW");
input3.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn2").click();
  }
});

var input4 = 
document.getElementById("circD");
input4.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn2").click();
  }
});

var input5 = 
document.getElementById("triB");
input5.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn3").click();
  }
});

var input6 = 
document.getElementById("triH");
input6.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();

    document.getElementById("myBtn3").click();
  }
});


function Rectangle() {
    var width = 0;
    var height = 0;
    var theresult = 0;

    width = MarcellusForm.txRectWidth.value;
    height = MarcellusForm.txRectHeight.value;
    theresult = width * height;
    //alert(width);
    //alert(height);
    //alert(theresult);
    MarcellusForm.txRectArea.value = theresult;
  }

  function Circle() {
      var radius = 0;
      var result = 0;
      var diameter = 0;
    
    if (MarcellusForm.txCircDiameter.value.length == 0) {

      radius = MarcellusForm.txCircRadius.value;
      result = 3.14 * (radius * radius);
    } 
    else {
      diameter = MarcellusForm.txCircDiameter.value;
//          result = 3.14 * [(diameter / 2) ^ 2];
       result = 3.14 * Math.pow((diameter / 2), 2);

    } 
    MarcellusForm.txCircleArea.value = result;
  }
  function Triangle() {
    var base = 0;
    var height = 0;
    var Result = 0;

    base = MarcellusForm.txTriangleBase.value;
    height = MarcellusForm.txTraingleHeight.value;
    Result = (base * height) / 2;
    //alert(base);
    //alert(height);
    //alert(Result);
    MarcellusForm.txTriArea.value = Result;
  }