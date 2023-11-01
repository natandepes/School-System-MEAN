var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', async (req, res, next) => {

    console.log('req body message: ', req.body);

    var message = new Message({
        content: req.body.mensagem
    });


    try
    {
        const msg = await message.save();

        return res.status(201).json({
            title: 'Mensagem salva com sucesso!',
            message: msg
        });
    }
    catch(err)
    {
        return res.status(500).json({
            title: 'Um erro inesperado aconteceu ao tentar salvar!',
            error: err
        });
    }

});


router.get('/', async (req, res, next) => {
    console.log('buscando messages');

    try
    {
        const msgs = await Message.find();

        return res.status(200).json({
            title: 'Mensagens recuperadas com sucesso!',
            messages: msgs
        });
    }
    catch(err)
    {
        return res.status(500).json({
            title: 'Um erro inesperado aconteceu ao tentar buscar as mensagens!',
            error: err
        });
    }
});


module.exports = router;