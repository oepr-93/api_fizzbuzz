const ExplorerController = require("../controllers/ExplorerController");

const mission = "node";
const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
console.log(typeof(explorersInMission))