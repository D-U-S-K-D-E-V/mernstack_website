import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import { appRouter } from './express.routes.js';
import { testRoute } from '../../Library/Testing/test.js';

const port = 3000;
export const app = express();
export const router = express.Router();

function setupExpress(){
    try{
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        appRouter(app);
        testRoute("Execute The Plan");
    }
    catch(error){
        console.log(error);
    };
};

export function runExpress(){
    setupExpress();
    app.listen(port, function(){
        console.log("Server is running on port: " + port);
    });
};