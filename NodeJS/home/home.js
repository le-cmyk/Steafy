var db = require('../db');
var home = {
    getmatieres: function(callback)
    {
        return db.query('SELECT * from Moniteur', callback);
    },
}

module.exports = home;