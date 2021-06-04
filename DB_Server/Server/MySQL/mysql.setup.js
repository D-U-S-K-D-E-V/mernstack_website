import mysql from 'mysql';
import dbConfig from './mysql.config.js';

export const sql = mysql.createConnection({
    host: dbConfig.hst,
    user: dbConfig.usr,
    password: dbConfig.pw,
    database: dbConfig.db,
    port: dbConfig.prt
});

export function testMySQL(){
    sql.connect(function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Connection Established");
        };
    });
};