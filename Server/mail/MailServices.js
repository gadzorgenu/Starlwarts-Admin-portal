const nodemailer = require('nodemailer');

let transport= nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'fe80cbcf3f2ce6',
        pass: '4506f39297eb2a'
    }
}) ;42

const message ={
    from: 'gadzorgenu@gmail.com',
    to: 'pennyadz@gmail.com',
    subject: 'Reminder of debt',
    text: 'Hello Penny, this message is to inform you that your balance to be paid is due 31st of this mont. Failure to pay will cost you additional 12% interest '

};

transport.sendMail(message, function(err, info){
    if(err){
        console.log(err)
    }else{
        console.log(info);
    }
});