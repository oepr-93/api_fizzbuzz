const ExplorerController = require("../controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request,response) => {
    var mission = request.params.mission;
    var explorersInMission = ExplorerController.getExplorersByMission(mission);
    explorersInMission = JSON.stringify(explorersInMission);
    response.json(explorersInMission);
})

app.get("/v1/explorers/amount/:mission", (request,response) => {
    var mission = request.params.mission;
    var explorersAmount = ExplorerController.getExplorersAmonutByMission(mission);
    explorersAmount2 = JSON.stringify(explorersAmount);
    response.json(explorersAmount2);
})

app.get("/v1/explorers/username/:mission", (request,response) => {
    var mission = request.params.mission;
    var explorersUsername = ExplorerController.getExplorersUsernamesByMission(mission);
    explorersUsername= JSON.stringify(explorersUsername);
    response.json(explorersUsername);
})