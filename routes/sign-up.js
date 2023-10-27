var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', (req, res, next) => {
    
    console.log('req body user: ', req.body);

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