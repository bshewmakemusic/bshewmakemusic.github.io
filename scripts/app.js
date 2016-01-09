define([
  "angular",
  "mountainsService",
  "treeService", 
  "seasonService", 
  "natureController",
  'uiBootstrap'], 
  function(
    angular,
    mountainsService,
    treeService, 
    seasonService, 
    natureController) {
  "use strict";
  return angular.module("app", ['ui.bootstrap'])
    .service("MountainsSvc", ["$q", mountainsService])
    .service("TreeSvc", ["$q", treeService])
    .service("SeasonSvc", ["$q", "TreeSvc", seasonService])
    .controller("NatureCtrl", ["$scope", "MountainsSvc", "TreeSvc", "SeasonSvc", natureController]);
});