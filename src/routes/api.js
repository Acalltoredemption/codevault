const express = require('express');

const router = express.Router();

const Card = require('../models/Card')

//Routes

//Get Cards Route
    router.get('/api', (req, res) => {

        Card.find({})
        .then((data) => {
            console.log('you arrived');
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
    })

//New Card Route
    router.post('/save', (req, res) => {
        const data = req.body;
        const newCard = new Card(data);

        newCard.save((error) => {
            if(error){
                res.status(500).json({msg: 'Sorry! internal server error!'});
                return
            }
            //New Card
            return res.json({
                msg: 'Your card has been saved!'
            })
        })
    })

  //Delete Card Route
  router.delete('/api/:id', (req, res) => {
    Card.findByIdAndDelete(req.params.id)
    .then(card => {
        console.log('Card deleted!!')
        
    })
    .catch(err => {
       console.log('Error!!')
    })
  })

    module.exports = router;