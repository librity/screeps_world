module.exports.loop = function () {
  for (let creepName in Game.creeps) {
    const creep = Game.creeps[creepName];
    handleCreep(creep);
  }
};

function handleCreep(creep) {
  if (creep.store.getFreeCapacity() > 0) return harvestNearest(creep);
  if (
    creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE
  )
    creep.moveTo(Game.spawns["Spawn1"]);
}

function harvestNearest(creep) {
  const sources = creep.room.find(FIND_SOURCES);

  if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) creep.moveTo(sources[0]);
}
