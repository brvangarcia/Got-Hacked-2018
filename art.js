var express = require('express');
var router = express.Router();
var fs = require('fs'),
    request = require('request'),
    apiKey = 'acc_6f7a484b37f02b2',
    apiSecret = 'ef5124b7bcf7536392a623a2a3be4b1e',
    filePath = './public/image.jpg';
    

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('art', { title: 'App' });
  


});
router.post('/send', function(req,res,next) {
    console.log(req.body);
    var formData = {
        image: fs.createReadStream(filePath)
    };
    
  request.post({url:'https://api.imagga.com/v2/tags', formData: formData},
    function (error, response, body) {
       
        
        console.log('Response:', body);
        res.render('art', {info:body})
    }).auth(apiKey, apiSecret, true);
    
})
module.exports = router;
