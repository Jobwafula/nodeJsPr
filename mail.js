var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"jobwafulabg@gmail.com",
        password:"wafula254."
    }
});

var mailOptions = {
    from:"jobwafulabg@gmail.com",
    to:"samueltroon41@gmail.com",
    subject:"node files",
    text:"html"
}

transporter.sendMail(mailOptions,function(err,info){
    if(err) throw(err);
    
        console.log("Email sent"+" "+info.response);
    

});