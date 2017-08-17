
         /*CAROUSEL */

$(document).ready(function(){

  $(".carousel").carousel();	
  $('#one').on('click', function(event) {
  	window.location.href = 'slovenia.html';
  });

  $('#two').on("click", function(event) {
  	window.location.href = "slovenia.html";

  });

  $("#three").on("click", function(event) {
  	window.location.href = "slovenia..html";

  });

  $("four").on("click", function(event) {
  	window.location.href = "slovenia.html";
  })

  $("five").on("click",function(event){
  	window.location.href = "slovenia.html";
  	  })


});


       /*  PARALLAX  */

$(document).ready(function(){
      $('.parallax').parallax();
});


