(function() {
  "use strict";
  requirejs.config({
    baseUrl: "scripts/vendor",
    paths: {
      Utility:  "../utility",
      /* vendors */
      angular:      "angular.min",
      jquery:       "jquery-2.2.0.min",
      jqueryColor:  "jquery.color",
      underscore:   "underscore-min",
      snap:         "snap.svg-min",
      uiBootstrap:  "ui-bootstrap-tpls-0.13.3.min",
      bootstrap:    "bootstrap.min",
      perlin:       "perlin",
      /* commands */
      exeDrawTree:      "../commands/exe-draw-tree",
      exeDrawMountains: "../commands/exe-draw-mountains",
      exeSpawnWinter:   "../commands/exe-spawn-winter",
      exeSpawnSpring:   "../commands/exe-spawn-spring",
      exeSpawnSummer:   "../commands/exe-spawn-summer",
      exeSpawnAutumn:   "../commands/exe-spawn-autumn",
      /* AngularJS */
      app:                  "../app",
      mountainsService:     "../services/mountains-service",
      treeService:          "../services/tree-service",
      seasonService:        "../services/season-service",
      natureController:     "../controllers/nature-controller"
    },
    shim: {
      angular: { exports: "angular" },
      jquery: { exports: "$" },
      jqueryColor: { deps: ["jquery"], exports: "jqueryColor" },
      underscore: { exports: "_" },
      snap: { exports: "snap" },
      bootstrap: { exports: "bootstrap", deps: ["jquery"] },
      uiBootstrap: { deps: ["angular", "jquery"] },
      perlin: { exports: "perlin" }
    }
  });

  require(["angular", "app", "bootstrap"], function(angular, app) {
    angular.bootstrap(document, [app.name]);
    
    $(document).ready(function() {
      $('.nav-link').on('click touchend', function(e) {
        e.preventDefault();
        
        var $this = $(this);
        var link = $this.attr("href");
        var target = $(link);
        
        $(".navbar-nav li.active").removeClass("active");
        if (!$this.parent().hasClass("active"))
          $this.parent().addClass("active");
        
        var targetOffset = target.offset().top;
        var docOffset = $(".main").scrollTop();
        var totalOffset = targetOffset - docOffset;
        
        $('html,body').stop().animate({
          scrollTop: targetOffset - 50 // Account for fixed nav.
        }, 500);
        
        $(".navbar-collapse").collapse('hide');
        
        return false;
      });
      
      var nav = $("#navigation");
      $(window).scroll(function() {
        var aboveNavHeight = $("#section-home").outerHeight(true);
        
        if($(this).scrollTop() >= aboveNavHeight) {
          nav.addClass("stuck");
        } else {
          nav.removeClass("stuck");
        }
      });
    });
  });
})();