import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const serviceCategory = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.servicecategory where servicecategory.Active = '1' ORDER BY Servicecategory.order ASC`;
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
    const queryString = `SELECT * FROM encirclepromodb.servicecategory WHERE servicecategory.id = '${req.params.Id}' and servicecategory.active = '1'`;
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

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.servicecategory where servicecategory.Active = '0'`;
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
    const queryString = `UPDATE encirclepromodb.servicecategory SET name = '${req.body.name}', description = '${req.body.description}', order = '${req.body.order}' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.servicecategory SET active='0' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.servicecategory SET active='1' where Id = '${req.body.id}'`;
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
    const queryString = `INSERT INTO encirclepromodb.servicecategory(categoryId, title, description, order, active) VALUES('${req.body.name}', '${req.body.description}', '1', '${req.body.order}'`;
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