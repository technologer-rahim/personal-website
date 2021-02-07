$(document).ready(function(){

   $(".js--education-section").waypoint(function(direction){
       if (direction == "down"){
           $("nav").addClass("sticky");

       } else {
           $("nav").removeClass("sticky");
       }

   });

   //active link
   $("nav a img.logo").click(function(){
       $("nav ul li a").removeClass("active");
       $("nav ul li:first-child a").addClass("active");
   });

   //mixitup

    var mixer = mixitup('.container');
});
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function CloseNav(){
    document.getElementById("myNav").style.width = "0%";
}

