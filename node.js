const express = require('express')
const app = express()

  app.get('/', (request, response) => {
      response.send('<h1>Hey, Every one</h1>')
  })

  var server= app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log("Hello")
  })


  const mongoose = require('mongoose');
const User = require('../models/user');

router.post('/signup', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
});

module.exports = router;