const ExplorerController = require("../controllers/ExplorerController");

const mission = "node";
const explorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
console.log(explorersInMission)