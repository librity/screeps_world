module.exports.loop = function () {
    const creep = Game.creeps["Harvester1"]

    if (creep.store.getFreeCapacity() > 0)
        return harvestNearest(creep)
    if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE )
        creep.moveTo(Game.spawns['Spawn1']);
}

function harvestNearest (creep) {
    const sources = creep.room.find(FIND_SOURCES)

    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) 
        creep.moveTo(sources[0])
}
