import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';

$(document).ready(function() {

  $('selector').click(function(event) {
    if(!event.detail || event.detail == 1){


    $('.ActiveMT').hover(function() {
      $('.GlowMT').fadeTo("slow", .8)();

    }, function() {
      // on mouseout, reset the background colour
      $('.GlowMT').fadeTo("slow", 0);
    });

    $('.ActiveN').hover(function() {
        $('.GlowN').fadeTo("slow", .8);
  
      }, function() {
        // on mouseout, reset the background colour
        $('.GlowN').fadeTo("slow", 0);
      });

      $('.ActiveCNHJ').hover(function() {
        $('.GlowCNHJ').fadeTo("slow", .8);
  
      }, function() {
        // on mouseout, reset the background colour
        $('.GlowCNHJ').fadeTo("slow", 0);
      });

    };
      
  });

});




$(".ActiveMT").hover(function() {
 $(".GlowMT").toggleClass("GlowMT");
 console.log("dayumm");
});




tippy(Gallery1, {
  // default
  placement: 'bottom',
});