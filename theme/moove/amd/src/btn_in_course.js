define(['jquery'], function($) {

  return {
    init: function() { 
      var $menu = $('#page-header .dropdown-item a').clone();
      $('#personalize-buttons').html($menu[1]);
    }
  }
});