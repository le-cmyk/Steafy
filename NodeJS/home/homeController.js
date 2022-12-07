var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var home = require('./home');

//router.put("/:id", (req, res) => {
  //  console.log('PUT request received...');
    //getConnection().query("UPDATE Moniteur SET Score = ? WHERE ID = ?", [req.body.Score, req.body.id],     
    //(err, result) => {
      //  if(err){
        //    console.log(err.message);
          //  throw err;
        //}
        //res.send(201, req.body); 
    //});
//});

router.get('/', function (req, res) {
    home.getmatieres(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/rdv', function (req, res) {
    home.getrdv(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.get('/client', function (req, res) {
    home.getClient(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/client/client.json', function (req, res) {
    home.postClient(req.body,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.post('/rdv/rdv.json', function (req, res) {
    home.postrdv(req.body,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.put("/:id", (req, res) => {
    console.log('PUT request received...');
    home.updatematiere(req.body,function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});




//router.post('/', function (req, res) {
  //  Matiere.creatematiere(req.body,function(err,count){
    //    if(err)
      //  {
        //    res.status(400).json(err);
        //}
        //else{
         //   res.json(req.body);
        //}
    //});
//});

module.exports = router;