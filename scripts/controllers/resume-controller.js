define(["angular", "underscore"], function(angular, _) {
  "use strict";
  function experiencesController($scope, mountainsService, treeSvc, seasonSvc) {
    $scope.resume = {};
    
    $scope.transitionSpring = function() {
      seasonSvc.progressThroughAllSeasons();
    }
    
    mountainsService.drawMountains();
  }

  return experiencesController;
});