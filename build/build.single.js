{
  baseUrl: "../scripts/vendor",
  name: "../main",
  out: "../scripts/main-built.js",
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
    natureController:     "../controllers/nature-controller"
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
 }