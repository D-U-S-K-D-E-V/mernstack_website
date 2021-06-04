import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

const router = express.Router();

export const homeHeader = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.homeHeader`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

//Select One By Id

router.get('/selectOne/:Id', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.homeheader WHERE homeheader.Id = '${req.params.Id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

//Select Current

router.get('/selectCurrent', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.homeHeader ORDER BY Id DESC LIMIT 1`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

//Insert User

router.post('/insertOne', function(req, res) {
    const queryString = `INSERT INTO encirclepromodb.homeheader(headerimage, headertitle, headerlink, datemodified) VALUES('${req.body.headerimage}','${req.body.headertitle}','${req.body.headersubtitle}', CURDATE())`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});