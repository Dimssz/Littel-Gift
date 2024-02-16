var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x.length) {myIndex2 = 1}    
  x[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 2000); // Change image every 2 seconds
}

var myIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x.length) {myIndex3 = 1}    
  x[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}

var myIndex4 = 0;
carousel4();

function carousel4() {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex4++;
  if (myIndex4 > x.length) {myIndex4 = 1}    
  x[myIndex4-1].style.display = "block";  
  setTimeout(carousel4, 2000); // Change image every 2 seconds
}

var myIndex5 = 0;
carousel5();

function carousel5() {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex5++;
  if (myIndex5 > x.length) {myIndex5 = 1}    
  x[myIndex5-1].style.display = "block";  
  setTimeout(carousel5, 2000); // Change image every 2 seconds
}

var myIndex6 = 0;
carousel6();

function carousel6() {
  var i;
  var x = document.getElementsByClassName("mySlides6");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex6++;
  if (myIndex6 > x.length) {myIndex6 = 1}    
  x[myIndex6-1].style.display = "block";  
  setTimeout(carousel6, 900); // Change image every 2 seconds
}