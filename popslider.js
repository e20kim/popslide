/* JQUERY SLIDER FOR popslider written by Tiffany Tse and Esther Kim 
   Copyright under MIT License 2014-2015
   Open source 
*/
/* 
    VARAIABLES DEFINED: 
     -----Setting------
    width -- width of the slider 
    animinateSpeed --setter for animination 
    pauseonHover --- when mouse hovers over slider, stops animination and setInterval 

    JQUERY SElECTOR: 
    $()function -document ready function callback 
    
    
    JQUERY Functions:
    setInterval -- tell the browser how many milliseconds to show the next image 
    startSlider() ---start the slide show 
    stopSlider() ---stop slideslow 
    
    TODO FUNCTIONS:
    resize() --- resize all images 
    
*/


/*wrap all code with jQuery document ready to make sure the script runs only after all the DOM 
elements are loaded in the page */
$(document).ready(function(){
 
    //settings 
    var width = 700;
    var animinateSpeed = 1000; //1 second
    var pauseonHover = 3000; //3 seconds
    
    var currentSlide = 1; //current slide start at slide 1 
    
    //cache DOM
    var $slider = $('#slider'); //find slider object
    var $sliderContainer = $slider.find('.wrapper ul'); 
    var $slideImages = $sliderContainer.find('li'); 
    
    var interval; 
    
    //reize images varabiles 
 /*-----------------------------------------------*/   
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
    
    startSlider(); //start the function 
}) ; //end of  popslider 
