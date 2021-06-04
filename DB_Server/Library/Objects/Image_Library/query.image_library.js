import { sql } from '../../../Server/MySQL/mysql.setup.js';
import express from 'express';

const router = express.Router();

export const imageLibrary = router.use(function(req, res, next){
    console.log(req.url + ' @ ' + Date.now());
    next();
});

router.get('/search_image/:image', function(req, res) {
    const queryString = `SELECT * FROM encirclepromodb.image_library WHERE image_name like '%${req.params.image}%'`;
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