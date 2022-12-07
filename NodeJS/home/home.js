var db = require('../db');
var home = {
    getmatieres: function(callback)
    {
        return db.query('SELECT * from Moniteur', callback);
    },

    updatematiere: function(req,callback)
    {
        console.log(req.Nom);
        console.log(req.score);
        return db.query("UPDATE Moniteur SET score = ? WHERE idMoniteur = ?", [req.score, req.idMoniteur], callback);
    },
}

module.exports = home;