(function() {
  "use strict";
  requirejs.config({
    baseUrl: "scripts/vendor",
    paths: {
      Utility:  "../utility",
      /* vendors */
      angular:      "angular.min",
      jquery:       "jquery-1.11.3.min",
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
    
    var nav = $("#navigation");
    $(window).scroll(function() {
      var aboveNavHeight = $("#section-home").outerHeight(true);
      
      if($(this).scrollTop() > aboveNavHeight) {
        nav.addClass("stuck");
      } else {
        nav.removeClass("stuck");
      }
    });
  });
})();