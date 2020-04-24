const Message = require('../models/message');

exports.postMessage = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const mess= req.body.message;
    console.log(name, email, subject, mess);
    const message = new Message({name: name, email: email, subject: subject, mess: mess});
    message.save()
    .then(result => {
        res.status(201).send(result);
    })    
    .catch(e => console.log(e));
}
