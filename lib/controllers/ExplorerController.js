const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const reader = require('../utils/Reader');

class ExplorerController{
	static getExplorersByMission(mission){
		const explorers = reader.readJsonFile("../../app/assets/Explorers.json");
		return ExplorerService.filterByMission(explorers, mission);
	}
	static getExplorersUsernamesByMission(mission){
		const explorers = reader.readJsonFile("../app/assets/");
		return ExplorerService.filterByMission(explorers, mission);
	}
	static getExplorersAmonutByMission(mission){
		const explorers = reader.readJsonFile("../app/assets/");
		return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
	}
	static applyValidationInNumber(number){
		return FizzbuzzService.applyValidationInNumber(number);
	}
}

module.exports = ExplorerController;

const exp = ExplorerController.getExplorersUsernamesByMission("node");
console.log(exp)