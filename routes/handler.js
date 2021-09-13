const express = require('express');
const router = express.Router();
const request = require("request");
router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Remon",
        "message": "This is my first tweet",
        "username": "remonansary"
    }];

    res.end(JSON.stringify(str));
});


router.get('/products', (req, res) => {
    request
    (
        "https://fakestoreapi.com/products/",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
             JSON.parse(body);
              

            }
            res.end((body));
          
        }
    );
});



module.exports = router;