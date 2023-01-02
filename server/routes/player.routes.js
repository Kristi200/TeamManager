const PlayerSchema = require('../controller/player.controller');

module.exports = (app) =>{
    app.get('/api/players',PlayerSchema.Players)
    app.post('/api/players',PlayerSchema.AddPlayer)
    app.put('/api/players/:id',PlayerSchema.UpdatePlayer)
    app.delete('/api/players/:id',PlayerSchema.DeletePlayer)
}