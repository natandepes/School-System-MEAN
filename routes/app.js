var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

// router.post('/message', (req, res, next) => {
//     console.log('Teste POST Form');
// });

// router.get('/carro', function(req, res, next) {
//     res.render('node');
// });

// router.post('/carro', function(req, res, next) {
//     let value = req.body.especificacoes;
//     res.redirect('/carro/' + value );
// });

// router.get('/carro/:valueParam', function(req, res, next) {
//     res.render('node', {sentMsg: req.params.valueParam});
// });



module.exports = router; 
