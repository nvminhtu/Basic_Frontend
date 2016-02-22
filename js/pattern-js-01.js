;(function($, win){
  "use strict";

  var Share = $.index = (function() {

    var $win,
        winWidth = 0,
        $navButton = null,
        $navContent = null;


    function init() {
      // example data
      $win = $(win);
      $navButton = $("#header .btn_navi_sp");
      $navContent = $("#header .global_navi");
      
      // function call here
      $win.on("load", function() {
        winWidth = $win.width();
        if (winWidth < 768) {
          navigation();
        }
      });
    }

    /**
     * navigation
     * description: navigation menu
     **/
    function navigation() {
    }

    return {
      init: init
    };

  })();

  $(Share.init);

})(jQuery, window);