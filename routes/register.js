var express = require('express');
var router = express.Router();

var Student = require('../models/student');

router.post('/', (req, res, next) => {
    
    console.log('req body student: ', req.body);


    // var user = new User({
    //     username: req.body.username,
    //     password: req.body.password
    // });

    // user.save((err, result) => {
        
    //     if(err){
    //         return res.status(500).json({
    //             myErrorTitle: 'Um erro inesperado aconteceu ao tentar salvar!',
    //             myError: err
    //         });
    //     }

    //     res.status(201).json({
    //         mySucessTitle: 'Usuário salvo com sucesso!',
    //         objSave: result
    //     });
    // });
});

module.exports = router;