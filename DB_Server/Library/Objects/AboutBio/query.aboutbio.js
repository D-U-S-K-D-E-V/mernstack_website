import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const aboutBio = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select Current Entry

router.get('/selectCurrent', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.aboutbio ORDER BY aboutbio.id DESC LIMIT 1 `;
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

router.put('/updateId', function(req, res) {
    const queryString = `UPDATE encirclepromodb.aboutbio SET biocontent = '${req.body.content}', datemodified = CURDATE() WHERE Id = '${req.body.id}'`;
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
    const queryString = `INSERT INTO encirclepromodb.aboutbio(biocontent, datemodified, active) VALUES('${req.body.content}', CURDATE() ,'1')`;
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

