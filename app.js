const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('bmi');
});

app.post('/', (req, res) => {
    var bmi = req.body.weight/(req.body.height*req.body.height/10000.0)
    console.log(bmi);
    res.render('bmi', { age:req.body.age, weight:req.body.weight, height:req.body.height, result:"You BMI result is: " + bmi.toFixed(2) });
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});