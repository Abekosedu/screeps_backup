var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var popController = require('pop.controller');
var roleClown = require('role.clown');


module.exports.loop = function () {

    for(var name in Game.creeps) {
        
        var creep = Game.creeps[name];
        
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'clown'){
            roleclown.run(creep);
        }
        popController.run(creep);
        
    }
            //Iterate over Memory.creeps to find dead ones
        for(var i in Memory.creeps){
            if(!Game.creeps[i]) {
                delete Memory.creeps[i];
            }
        }
        
        
//    var theLastHarv = _(Memory.creeps).filter({role:'harvester'}).size();
        
/*    if(theLastHarv == 0 || theLastHarv == "undefined"){
                Game.spawns['Spawn1'].createCreep([WORK,CARRY,CARRY,MOVE,MOVE,MOVE],undefined,{ role: 'harvester' , working: false});
        
            } console.log(poop);
*/

};

