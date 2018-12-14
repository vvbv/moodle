define(['jquery'], function($) {

  return {
    init: function() {       
      $( document ).ready(function() {
        $(function() {(
          //Observer function
          function($) {
              var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          
              $.fn.attrchange = function(callback) {
                  if (MutationObserver) {
                      var options = {
                          subtree: false,
                          attributes: true
                      };
          
                      var observer = new MutationObserver(function(mutations) {
                          mutations.forEach(function(e) {
                              callback.call(e.target, e.attributeName);
                          });
                      });
          
                      return this.each(function() {
                          observer.observe(this, options);
                      });
          
                  }
              }
          })(jQuery);

          //Now you need to append event listener to nav-drawer
          $('#nav-drawer').attrchange(function(attrName) {
            //If this is expanded
            if(attrName=='aria-hidden'){
              //If other menu is expanded
              if($('#sidepreopen-control').attr('aria-expanded') == 'true' ){
                if($( document ).width() >= 750 && $( document ).width() <= 1200){
                  $('#sidepreopen-control').click();
                }
              }
            }
          });
          
          //Now you need to append event listener to sedepre-blocks
          $('#sidepre-blocks').attrchange(function(attrName) {
              //If this is expanded
              if(attrName=='aria-hidden'){
                //If other menu is expanded
                if($('nav').find('button').attr('aria-expanded') == 'true' ){
                  if($( document ).width() >= 750 && $( document ).width() <= 1200){
                    $('nav').find('button').click();
                  }
                }
              }
          });

        });
      });
    }
  }
});
