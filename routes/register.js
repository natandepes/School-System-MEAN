var express = require('express');
var router = express.Router();

var Student = require('../models/student');

router.post('/', async (req, res, next) => {

    console.log('req body student:', req.body);

    var student = new Student({
        cpf: req.body.cpf,
        name: req.body.name,
        adress: req.body.adress,
        telephone: req.body.telephone,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
    });


    try
    {
        const std = await student.save();

        return res.status(201).json({
            title: 'Estudante cadastrado com sucesso!',
            student: std
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

    try
    {
        const stds = await Student.find();

        return res.status(200).json({
            title: 'Mensagens recuperadas com sucesso!',
            students: stds
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