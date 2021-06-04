import nodemailer from 'nodemailer';
import { Credentials } from './nm.credentials.js';

export function SendMail(emailContent){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: Credentials.user,
            pass: Credentials.pass
        }
    });

    const mailDetails = {
        to: emailContent.to,
        from: emailContent.from,
        subject: emailContent.subject,
        message: emailContent.message
    }

    transporter.sendMail(mailDetails, function(error, info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent: ' + info.response)
        }
    })
}