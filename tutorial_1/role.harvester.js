function hasStorageRoom(creep) {
  return creep.store.getFreeCapacity() > 0;
}

function inSpawnRange(creep) {
  const targetSpawn = Game.spawns["Spawn1"];

  return creep.transfer(targetSpawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE;
}

function harvestNearest(creep) {
  const sources = creep.room.find(FIND_SOURCES);

  if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) creep.moveTo(sources[0]);
}

function returnToSpawn(creep) {
  creep.moveTo(Game.spawns["Spawn1"]);
}

function handleCreep(creep) {
  if (hasStorageRoom(creep)) return harvestNearest(creep);
  if (inSpawnRange(creep)) return returnToSpawn(creep);
}

var roleHarvester = {
  /** @param {Creep} creep **/
  run: handleCreep,
};

module.exports = roleHarvester;
