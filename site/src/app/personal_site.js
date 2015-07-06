var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

app.get('/', function(request, response) {
    response.sendFile('index.html', { root: __dirname });
});

app.post('/email', function(request, response){
    var mailOptions = {
        to: 'david.j.bramwell@googlemail.com',
        from: request.body.name + " <" + process.env.NODEMAILER_USER + ">",
        subject: 'Contact Me',
        text: request.body.message + "\n\n" + "Reply to: " + request.body.email,
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            response.send({ status: 'FAILURE', message: 'Your message did not send, please retry.' });
        }else{
            console.log('Message sent: ' + info.response);
            response.send({ status: 'SUCCESS', message: 'Thanks for emailing ' + request.body.name + "!" });
        }
    });

});