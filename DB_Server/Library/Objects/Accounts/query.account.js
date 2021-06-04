import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

const router = express.Router();

export const accounts = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.accounts`;
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
    const queryString = `SELECT * FROM encirclepromodb.accounts where accounts.Id = '${req.params.Id}'`;
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

//Select Deactivated

router.get('/selectInactive', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.accounts where active = '0'`;
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

//Select Activated

router.get('/selectActive', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.accounts where active = '1'`;
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

//Authenticate

router.get('/authenticate/:user/:pw', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.accounts where accounts.user = '${req.params.user}' AND accounts.password = '${req.params.pw}'`;
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
    const queryString = `insert into encirclepromodb.accounts(typeId, user, password, email, active) values('${req.body.typeId}','${req.body.user}','${req.body.password}','${req.body.email}','1')`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.json({
                status: "error",
                message: err
            });
        }
        else{
            console.log(rows);
            res.json({
                status: "success",
                message: rows
            });
        }
    });
});

//update Password

router.put('/updatePassword', function(req, res) {
    const queryString = `UPDATE encirclepromodb.accounts SET password = '${req.body.password}' where Id = '${req.body.Id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(req);
            console.log(err);
            res.send(err);
        }
        else{
            console.log(req);
            console.log(rows);
            res.send(rows);
        }
    });
});

//Deactivate By Id

router.put('/deactivateId', function(req, res) {
    const queryString = `UPDATE encirclepromodb.accounts SET active = '0' where Id = '${req.body.Id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.json({
                status: "error",
                message: err
            });
        }
        else{
            console.log(rows);
            res.json({
                status: "success",
                message: rows
            });
        }
    });
});

//Deactivate By Id

router.put('/activateId', function(req, res) {
    const queryString = `UPDATE encirclepromodb.accounts SET active = '1' where Id = '${req.body.Id}'`;
    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.json({
                status: "error",
                message: err
            });
        }
        else{
            console.log(rows);
            res.json({
                status: "success",
                message: rows
            });
        }
    });
});

//Update User

router.put('/update', function(req, res) {
    const queryString = `UPDATE encirclepromodb.accounts SET typeId = '${req.body.typeId}', user = '${req.body.user}', email = '${req.body.email}' WHERE id = '${req.body.Id}'`;

    sql.query(queryString, (err, rows, fields) => {
        if(err){
            console.log(err);
            res.json({
                status: "error",
                message: err
            });
        }
        else{
            console.log(rows);
            res.json({
                status: "success",
                message: rows
            });
        }
    });
});