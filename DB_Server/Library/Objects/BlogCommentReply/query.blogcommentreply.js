import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

//Generic

const router = express.Router();

export const blogCommentReply = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

//Select All

router.get('/selectAll/:Id', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.blogcommentreply where Active = '1' AND commentId = ${req.params.Id}`;
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
    const queryString = `SELECT * FROM encirclepromodb.blogcommentreply WHERE blogcommentreply.id = '${req.params.Id}' and active = '1'`;
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
    const queryString = `SELECT * FROM encirclepromodb.blogCommentreply where Active = '0'`;
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
    const queryString = `UPDATE encirclepromodb.blogcommentreply SET active='0' where Id = '${req.body.id}'`;
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
    const queryString = `UPDATE encirclepromodb.blogcommentreply SET active='1' where Id = '${req.body.id}'`;
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
    const queryString = `INSERT INTO encirclepromodb.blogcommentreply(commentId, userid, replydate, replybody, active) VALUES('${req.body.commentId}', '${req.body.userid}', 'CURDATE()', '${req.body.replybody}', '1'`;
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