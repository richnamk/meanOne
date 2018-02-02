var session = require('express-session')
    User = require('../models/user');

module.exports = {
    create: (req, res) => {
        let newUser = new User(req.body);

        User.findOne({name: newUser.name}, (err, user) => {
            //if exists ( user === {"name"; "rich"})
            if (user) {
                session.user_id= user._id;

                return res.json(user);
            }
            //does not exist (user === null && err === null)
            newUser.save((err) => {
                if (err) {
                    return res.json(err.json());
                }
                session.user_id = newUser.id;
                
                return res.json(newUser);
            });
        });
    }
    }