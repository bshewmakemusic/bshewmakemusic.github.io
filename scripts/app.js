define([
  "angular",
  "mountainsService",
  "treeService", 
  "seasonService", 
  "resumeController",
  'uiBootstrap'], 
  function(
    angular,
    mountainsService,
    treeService, 
    seasonService, 
    resumeController) {
  "use strict";
  return angular.module("app", ['ui.bootstrap'])
    .service("MountainsSvc", ["$q", mountainsService])
    .service("TreeSvc", ["$q", treeService])
    .service("SeasonSvc", ["$q", "TreeSvc", seasonService])
    .controller("ResumeCtrl", ["$scope", "MountainsSvc", "TreeSvc", "SeasonSvc", resumeController]);
});