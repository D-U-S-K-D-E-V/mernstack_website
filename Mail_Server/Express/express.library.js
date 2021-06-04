import express from 'express';
import { Credentials } from '../NodeMailer/nm.credentials.js';
import { SendMail } from '../NodeMailer/nm.setup.js';

const router = express.Router();

export const MailTest = router.use(function(req, res, next){
    console.log(req.url + "@" + Date.now());
    next();
});

router.post('/send', function(req, res){
    const messageContent = {
        to: Credentials.user,
        from: Credentials.user,
        subject: 'This Is a Test',
        message: `${req.email} is testing the mail server!`
    }
    SendMail(messageContent);
    res.send({
        message: "Email Sent"
    });
});

router.get('/test', function(req, res){
    res.send({
        message: "Test Successful"
    })
    return console.log("test successul");
});