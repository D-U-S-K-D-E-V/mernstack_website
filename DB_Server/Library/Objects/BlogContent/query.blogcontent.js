import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const blogContent = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.blogcontent where Active = '1' ORDER BY Date DESC`;
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

//Select One

router.get('/selectOne/:Id', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.blogcontent WHERE blogcontent.id = '${req.params.Id}' and active = '1'`;
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

//Select Where Category Is

router.get('/selectByCategory/:Id', function(req, res) {
    const queryString = `SELECT blogcontent.*, blogcategory.categoryname FROM blogcontent JOIN blogcategory ON blogcontent.category = blogcategory.id WHERE blogcontent.category = '${req.params.Id}' AND blogcontent.active = '1' ORDER BY BlogContent.Date DESC`;
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
    const queryString = `SELECT * FROM encirclepromodb.blogcontent where Active = '0'`;
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
    const queryString = `UPDATE encirclepromodb.blogcontent SET active='0' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.blogcontent SET active='1' where Id = '${req.body.id}'`;
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
    const queryString = `INSERT INTO encirclepromodb.blogcontent(category, header, image, date, author, body, address, active) VALUES('${req.body.cateogry}', '${req.body.header}', '${req.body.image}', 'CURDATE()', '${req.body.author}', '${req.body.bodycontent}', '1'`;
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