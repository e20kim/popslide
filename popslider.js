/* JQUERY SLIDER FOR popslider written by Tiffany Tse and Esther Kim 
   Copyright under MIT License 2014-2015
   Open source 
*/
/* 
    VARAIABLES DEFINED: 
    width -- width of the slider 


    JQUERY SElECTOR: 
    $()function -document ready function callback 
    
    
    JQUERY Functions:
    setInterval -- tell the browser how many milliseconds to show the next image 
*/


//when the window is loaded 
$(function(){
   // var theImage = $('#slider .wrapper ul li img');
    //setInterval 
    
    var width = 700;
    var animinateSpeed = 1000; //1 second
    var pauseonHover = 3000; //3 seconds
    
    var $slider = $('#slider'); //find slider object
    
    //set the image timer 
    setInterval(function(){
        $slider.animate({'margin-left': '-=' + width},animinateSpeed)
    }, pauseonHover);
    //animate margin-left 
    //if it's last slide, go to position 1(0px);
    //listen for mouseeenter and pause
    //resume on mouseleave 
}); //end of window load 
