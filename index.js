const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { sendEmail } = require('./mail');

const app = express();
app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({
    limit: '10mb',
    parameterLimit: 100000,
    extended: true
}));

app.use(cookieParser());

// , parameterLimit: 10000

app.post("/api/sendMail", (req, res) => {
    sendEmail(req.body.email, req.body.name, req.body.lang, req.body.image)
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server Running at 5000 ");
})