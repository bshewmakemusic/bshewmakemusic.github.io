define([
  "angular",
  "exeSpawnWinter",
  "exeSpawnSpring",
  "exeSpawnSummer",
  "exeSpawnAutumn"], function(
    angular,
    exeSpawnWinter,
    exeSpawnSpring,
    exeSpawnSummer,
    exeSpawnAutumn) {
  "use strict";
  return function($q, treeService) {
    var nextIndex = 0;
    var seasons = [
      exeSpawnWinter,
      exeSpawnSpring,
      exeSpawnSummer,
      exeSpawnAutumn
    ];
    
    this.progressThroughAllSeasons = function() {
      var promisedWinter = exeSpawnWinter($q, treeService)
      
      /* TODO: Refactor to use promises. */
      setTimeout(function() {
        exeSpawnSpring($q, treeService);
        
        setTimeout(function() {
          exeSpawnAutumn($q, treeService);
        }, 1000)
      }, 1000);
      
      return null;
    }
    
    this.spawnNextSeason = function() {
      if (nextIndex == seasons.length) nextIndex = 0;
      
      return $q.all([seasons[nextIndex++]($q, treeService)]);
    };
  };
});