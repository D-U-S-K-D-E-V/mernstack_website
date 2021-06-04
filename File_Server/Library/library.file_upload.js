import express from 'express';
import formidable from 'formidable';
import path from 'path';

const router = express.Router();

export const fileUpload = router.use(function(req, res, next){
    console.log(req.url + "@" + Date.now());
    next();
});

const fileDir = path.dirname('./')

router.get('/test', function(req, res){
    res.send({
        message: "Test Successful"
    })
    return console.log("test successful");
});

//Get Image Files

router.get('/image/:filename', function(req,res){
    res.sendFile(`uploads/images/${req.params.filename}`, {root: fileDir});
});

//Get JSON Files

router.get('/json/:filename', function(req,res){
    res.sendFile(`uploads/JSON/${req.params.filename}`, {root: fileDir});
});

//Upload Images Files

router.post('/upload/image', function(req, res){
    
    const form = formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', (name, file) => {
        file.path = `./Uploads/Images/${file.name}`
    })

    form.on('file', function(name, file){
        console.log('Uploaded ' + file.name);
    });

    res.send("file uploaded!")
});

//Upload JSON

router.post('/upload/json', function(req, res){
    
    const form = formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', (name, file) => {
        file.path = `./Uploads/JSON/${file.name}`
    })

    form.on('file', function(name, file){
        console.log('Uploaded ' + file.name);
    });

    res.send("file uploaded!")
});