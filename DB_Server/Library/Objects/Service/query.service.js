import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const services = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.service where Active = '1'`;
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

//Select Portfolio

router.get('/selectOne/:Id', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.service WHERE service.id = '${req.params.Id}' and active = '1'`;
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

//Select All Inactive

router.get('/selectAllInactive', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.service where Active = '0'`;
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
    const queryString = `UPDATE encirclepromodb.service SET categoryId = '${req.body.categoryId}', title = '${req.body.title}', description = '${req.body.description}', order = '${req.body.order}' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.service SET active='0' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.service SET active='1' where Id = '${req.body.id}'`;
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
    const queryString = `INSERT INTO encirclepromodb.service(categoryId, title, description, order, active) VALUES('${req.body.categoryId}', '${req.body.title}', '${req.body.description}', '${req.body.order}', '1'`;
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