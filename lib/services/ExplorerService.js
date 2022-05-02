const Reader = require("../utils/reader");

class ExplorerService{
	
	static filterByMission(explorers, mission){
		
		const values = Object.values(explorers);
		const filter = values.filter((explorer) => explorer.mission == mission);
		return filter;
	}
	static getAmountOfExplorersByMission(explorers, mission){
		
		const num = ExplorerService.filterByMission(explorers, mission);
		return {mission: mission, quantity: num.length};
	}
	static getExplorersUsernamesByMission(explorers, mission){
		const values = Object.values(explorers);
		const explorersToGetUsernames = values.filter((explorer) => explorer.mission == mission);
		const obj = explorersToGetUsernames.map((explorer) => explorer.githubUsername);
		return obj;
	}
}

module.exports = ExplorerService;
/*const aux1 = {};
const exp = ExplorerService.getExplorersUsernamesByMission(aux1, "node");
console.log(exp)*/
