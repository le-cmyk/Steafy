var db = require('../db');
var home = {
    getmatieres: function(callback)
    {
        return db.query('SELECT * from Moniteur', callback);
    },
    getClient: function(callback)
    {
        return db.query('SELECT * from client', callback);
    },
    getrdv: function(callback)
    {
        return db.query('SELECT * from rdv', callback);
    },

    postClient: function(req, callback)
    {
        return db.query('Insert Into Client (idClient,Nom,Prenom,Telephone,Email) Values(?,?,?,?,?)', [req.idclient, req.name,req.prenom,req.telephone,req.email],callback);
    },

    postrdv: function(req, callback)
    {
        console.log("test")
        return db.query('Insert Into rdv (idRDV,IdMoniteur,IdClient,DateRDV,HeureRDV,Prix) Values(?,?,?,?,?,?)', [req.idrdv, req.IdMoniteur,req.IdClient,req.DateRdv,req.hrdv,req.prix],callback);
    },

    updatematiere: function(req,callback)
    {
        console.log(req.Nom);
        console.log(req.score);
        return db.query("UPDATE Moniteur SET score = ? WHERE idMoniteur = ?", [req.score, req.idMoniteur], callback);
    },
}

module.exports = home;