/* JQUERY SLIDER FOR popslider written by Tiffany Tse and Esther Kim 
   Copyright under MIT License 2014-2015
   Open source 
*/
/* 
    VARAIABLES DEFINED: 
    width -- width of the slider 
    animinateSpeed --setter for animination 
    pauseonHover --- when mouse hovers over slider, stops animination and setInterval 

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
    var currentSlide = 1; //current slide start at slide 1 
    
    
    var $slider = $('#slider'); //find slider object
    var $sliderContainer = $slider.find('.wrapper ul'); 
    var $slideImages = $sliderContainer.find('li'); 
    
    var interval; 
    
    
    
    //set the image timer 
    function startSlider() {
   interval = setInterval(function(){
        $sliderContainer.animate({'margin-left': '-=' + width},animinateSpeed function()({
            currentSlide++; //increment slide 
            if (currentSlide === $slideImages.length){
                currentSlide = 1; 
                $sliderContainer.css('margin-left' ,0); 
            }
        });
        );}, pauseonHover);
   
   } 
   function stopSlider() { 
        clearInterval(interval);    
    }
        
    $slider.on('mouseenter', stopSlider).on('mouseleave',startSlider);
}); //end of window load 
