function izpis() {

    var besedilo = "odstavek 1"
    document.getElementById("prvi_odstavek").innerHTML = besedilo;
    
    var besedilo2 = "odstavek 2"
    document.getElementById("drugi_odstavek").innerHTML = besedilo2;
    var besedilo3 = "odstavek 3"
    document.getElementById("tretji_odstavek").innerHTML = besedilo3;


    // clock//

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("ura").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ura").innerHTML = "EXPIRED";
  }
}, 1000);

}
