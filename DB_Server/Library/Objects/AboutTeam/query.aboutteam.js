import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const aboutTeam = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.aboutteam WHERE Active = '1'`;
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
    const queryString = `SELECT * FROM encirclepromodb.aboutteam WHERE Id = '${req.params.id}' AND Active = '1'`;
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

//Update Current Entry

router.put('/update', function(req, res) {
    const queryString = `UPDATE encirclepromodb.aboutteam SET name = '${req.body.name}', title = '${req.body.title}', bio = '${req.body.bio}' WHERE Id = '${req.body.id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(req.body);
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
    const queryString = `INSERT INTO encirclepromodb.aboutteam(name, title, bio, active) values('${req.body.name}', '${req.body.title}', '${req.body.bio}' ,'1')`;
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

