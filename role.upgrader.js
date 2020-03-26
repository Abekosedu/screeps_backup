
var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
	    if(creep.store[RESOURCE_ENERGY] != creep.store.getCapacity() && creep.store[RESOURCE_ENERGY] >= 1  ) {
            
            
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0],{visualizePathStyle: {stroke: 'red'}});
                creep.say('find source');
            }
        }
        else {
            if(creep.upgradeController(
                creep.room.controller) == ERR_NOT_IN_RANGE && 
                creep.store[RESOURCE_ENERGY] == creep.store.getCapacity())
                {
                creep.moveTo(creep.room.controller);
                
                creep.say('find upgrader');
            }
        }
	}
};

module.exports = roleUpgrader;
