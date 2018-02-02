var path = require('path'),
    users = require('../controllers/user'),
    sessions = require('../controllers/sessions'),
    buckets = require('../controllers/buckets');

module.exports = (app) => {
    // All server routes are Plural (ie: users, sessions, notes,)
    app.post('/users', users.create);
    
    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);
    
    app.get('/dashboard', buckets.getauth);
    app.get('/dashboard/:id', buckets.list);
    app.post('/dashboard', buckets.add);

    app.post('/userb', buckets.updatebucket);
    // app.post();
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
};
