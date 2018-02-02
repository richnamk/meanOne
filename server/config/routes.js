var path = require('path'),
    users = require('../controllers/user'),
    sessions = require('../controllers/sessions');

module.exports = (app) => {
    // All server routes are Plural (ie: users, sessions, notes,)
    app.post('/users', users.create);
    
    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    // app.post();
    // app.get();
    // app.post();
    // app.get();
    // app.post();
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
};
