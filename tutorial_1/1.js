module.exports.loop = function () {
    const creep = Game.creeps["Harvester1"]
    const sources = creep.room.find(FIND_SOURCES)
    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) 
        creep.moveTo(sources[0])
}