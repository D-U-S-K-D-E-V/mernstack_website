import { app } from './express.setup.js';

export function testRoute(testContent){
    return app.get("/", function(req, res){
        res.json({
            message: testContent
        });
    });
};