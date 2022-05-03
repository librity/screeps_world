var roleHarvester = require("role.harvester");
const roleUpgrader = require("./role.upgrader");

module.exports.loop = function () {
  for (var name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role === "harvester") roleHarvester.run(creep);
    if (creep.memory.role === "upgrader") roleUpgrader.run(creep);
  }
};
