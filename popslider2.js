/** 
FOR STUPID PEOPLE LIKE ME DOCUMENTATION: 
this image slider is under MIT license. It is open source and we do not make profits off of it. 
Image slider written by Esther Kim and Tiffany Tse 
It is a image slider that was purposely designed for personal use and it is a personal project. 
* 
*/
'use strict';
(function ($) {
    $.fn.extend({
      popslider : function(options) { 
        //set default values for plugin options
        //aka the constructor 
         var default_settings = {
            interval: 5000, //5 secs 
            duration: 5000, //animation duration 
            lineHeight: 1, //line height 
            height: 'auto',
            mousepause:false, 
            page: true, 
            nav: true, //dont change this. 
            keyboardnav: true // keyboard nav using the arrows 
            
        }
        var options = $.extend(default_settings, options); 
        
        //start the configuration of the slider 
         return this.each(function() {
            var settings = options; 
            var obj = $(this); //make object
            
            //store the slide and page 
            var slides = $('.slides li', obj);
            var page = $('.page li', obj); 
            
            //set inital current sldie and next slide values 
            var current = 0; 
            var nextslide = current + 1; 
            
            //get height and width of inital slide image and calcuate the size ratio
            var imgHeight = slides.eq(current).find('img').height(); 
            var imgWidth = slides.eq(current).find('img').width(); 
            var imgRatio = imgWidth / imgHeight; 
            
            //variables for setimagesize function 
            var sliderWidth = 0; 
            var cropHeight =0; 
            
            //hide all slides, and use fade in method from jQuery  add active to slide 
            slides.hide().eq(current).fadeIn(settings.duration).addClass('active'); 
            
            //build page containing slides if it does not exist and if enabled 
            if (page.length) {
                //make current slide ul > li active 
                page.eq(current).addClass('active'); 
            }
            else if (settings.page){
                obj.append('<ul class = "page"></ul>');
                slides.each(function(index) {
                  $('.page', obj).append('<li><a href="#"><span>' + index +   '</span></a></li>');
                    
               });//end of slides.each function 
               page = $('.page li',obj); 
               page.eq(current).addClass('active');
            }
            //click to rotate to the next slide 
            if (page) {  
               $('a' , page).click(function((){
                  clearTimeout(obj.play);
                  next = $(this).parent().index(); 
                  rotateSlides();
                  return false; 
               });
            } //end of 2nd if statement 
            
            /**
            * FUNCTION: rotateSLIDES
            * PURPOSE: change slides  --- the primary function 
            */
               var rotateSlides = function () { 
 slides.eq(current).fadeOut(settings.duration).removeClass('active').end().eq(next).fadeIn(o.duration).addClass('active').queue(function(){
                  //add rotateTimer function to end of animation queue
                  //this prevents animation buildup caused by requestAnimationFrame
                  //rotateTimer starts a timer for the next rotate
                  rotateTimer();
                  $(this).dequeue()
                  });
                  //update page 
                  if(page) {
                     page.eq(current).removeClass('active').end().eq(next).addClass('active');
                  }
                  current =nextslide; 
                  nextslide = current >= slides.length-1 ? 0 : current +1;  
               };
            /**
            * FUNCTION: rotateTimer 
               PURPOSE: set the time to chance the slides. the real action happens here for timing 
            */
            var rotateTimer = function (){
                  //if mouse overs over slider STOP
                  obj.play = setTimeout(function(){ 
                              rotate();
                              },settings.interval);
                  };
            //start the timer for the first time
               rotateTimer();
          
        }); //end of return function 
        
      }//end popslider function options 
   }); //end of extend function 
})(jQuery); //end of popslider 