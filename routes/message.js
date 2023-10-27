var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', (req, res, next) => {

    console.log('req body message: ', req.body);

    // var message = new Message({
    //     content: req.body.mensagem
    // });

    // message.save((err, result) => {
        
    //     if(err){
    //         return res.status(500).json({
    //             myErrorTitle: 'Um erro inesperado aconteceu ao tentar salvar!',
    //             myError: err
    //         });
    //     }

    //     res.status(201).json({
    //         mySucessTitle: 'Mensagem salva com sucesso!',
    //         objSave: result
    //     });
    // });
});

module.exports = router;