define(['jquery'], function($) {

  return {
    init: function() { 
      $("#modal-video").on('hidden.bs.modal', function (e) {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));
      });
    }
  }
});