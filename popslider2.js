/** 
FOR STUPID PEOPLE LIKE ME DOCUMENTATION: 

*/
(function($){
    $.fn.extend({
    popslider : function(options) { 
        //set default values for plugin options
        //aka the constructor 
        var default_settings = {
            interval: 5000, //5 secs 
            duration: 5000, //animation duration 
            lineHeight: 1, 
            height: 'auto',
            mousepause: false, 
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
            var page = $('.page li,' obj); 
            
            //set inital current sldie and next slide values 
            var current = 0; 
            var nextslide = current +1; 
            
            //get height and width of inital slide image and calcuate the size ratio
            var imgHeight = slides.eq(current).find('img').height(); 
            var imgWidth = slides.eq(current).find('img').width(); 
            var imgRatio = imgWidth/imgHeight; 
        
        }) //end of return function 
        
    }//end popslider function options 
    }); //end of extend function 
})(jQuery); //end of popslider 