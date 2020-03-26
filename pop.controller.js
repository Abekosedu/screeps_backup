/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('more_subjects');
 * mod.thing == 'a thing'; // true
 */
//Game.spawns['Iotonga'].createCreep([WORK,CARRY,MOVE],undefined, {role:'harvester', working: false});

//Game.creeps['Worker1'].suicide();
var popController = {
    
    run: function(creep) {
        //var creepRole = "";
        //console.log(creep.store[RESOURCE_ENERGY]);

        
        function reviewNum(){
            console.log(canIMakeMore);
            console.log("upgraderQty: "+ numUpgraders);
            console.log("builderQty: "+ numBuilders);
            console.log("harvesterQty: "+ numHarvesters);
            console.log("--------------------------------------------");
            
        }
        var canIMakeMore = Game.spawns.Spawn1.room.energyAvailable;
        //console.log(canIMakeMore);
        
        var minNumHarvesters = 2;
        var minNumBuilders = 3;
        var minNumUpgraders = 4;
        var numHarvesters = _(Memory.creeps).filter({role:'harvester'}).size();
        var numBuilders = _(Memory.creeps).filter({role:'builder'}).size();
        var numUpgraders = _(Memory.creeps).filter({role:'upgrader'}).size();
        //reviewNum();
        
        
        if(canIMakeMore >= 300){
            if(numHarvesters < minNumHarvesters){
                Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE],undefined,{ role: 'harvester' , working: false});
                reviewNum();
            
                }
                else if (numBuilders < minNumBuilders){
                    Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE],undefined,{ role: 'builder' , working: false});
                    reviewNum();
                }
                else if (numUpgraders < minNumUpgraders){
                    Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE],undefined,{ role: 'upgrader' , working: false});
                    reviewNum();
                }
                else
                console.log(".");
                }
                
                
    
        
                
    }   
};
module.exports = popController;
