import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const portfolio = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.portfolio where Active = '1'`;
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

//Select one

router.get('/selectOne/:Id', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.portfolio WHERE Id = '${req.params.Id}' and Active = '1'`;
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

//Update Entry

router.put('/update', function(req, res) {
    const queryString = `UPDATE encirclepromodb.portfolio SET title = '${req.body.title}', artist = '${req.body.artist}', link = '${req.body.link}', date = '${req.body.date}' where Id = '${req.body.id}'`;
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

//Deactivate

router.put('/deactivate', function(req, res) {
    const queryString = `UPDATE encirclepromodb.portfolio SET active = '0' where Id = '${req.body.Id}'`;
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

//Activate

router.put('/activate', function(req, res) {
    const queryString = `UPDATE encirclepromodb.portfolio SET active = '1' where Id = '${req.body.Id}'`;
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

//Insert New Entry

router.post('/insert', function(req, res) {
    const queryString = `INSERT INTO encirclepromodb.portfolio(title, artist, link, date, active) VALUES('${req.body.title}', '${req.body.artist}', '${req.body.link}', '${req.body.date}' '1'`;
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