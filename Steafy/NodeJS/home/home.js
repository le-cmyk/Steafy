var db = require('../db');
var home = {
    getmatieres: function(callback)
    {
        return db.query('SELECT * from moniteur', callback);
    },
}

module.exports = home;