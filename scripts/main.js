(function() {
  "use strict";
  requirejs.config({
    baseUrl: "scripts/vendor",
    paths: {
      Utility:  "../utility",
      /* vendors */
      angular:      "angular.min",
      jquery:       "jquery-1.11.3.min",
      smoothScroll: "jquery.smooth-scroll.min",
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
      resumeController:     "../controllers/resume-controller"
    },
    shim: {
      angular: { exports: "angular" },
      jquery: { exports: "$" },
      smoothScroll: { deps: ["jquery"], exports: "smoothScroll" },
      jqueryColor: { deps: ["jquery"], exports: "jqueryColor" },
      underscore: { exports: "_" },
      snap: { exports: "snap" },
      bootstrap: { exports: "bootstrap", deps: ["jquery"] },
      uiBootstrap: { deps: ["angular", "jquery"] },
      perlin: { exports: "perlin" }
    }
  });

  require(["angular", "app", "bootstrap", "smoothScroll"], function(angular, app) {
    angular.bootstrap(document, [app.name]);
    
    $('.navbar-nav li').click(function(e) {
      $(".navbar-nav li.active").removeClass("active");
      $(".tab-content > div.active").removeClass("active");
      
      var $this = $(this);
      var link = $this.find("a").attr("href");
      
      if (!$this.hasClass("active"))
        $this.addClass("active");
      
      if (!$(link).hasClass("active"))
        $(link).addClass("active");
      
      //e.preventDefault();
    });
    
    $(document).ready(function() {
      var nav = $("#navigation");
      $("body").scroll(function() {
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