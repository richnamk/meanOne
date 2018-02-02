var sessions = require('express-session'),
    User = require('../models/user'),
    Bucket = require('../models/bucket');

module.exports = {
    getauth: (req, res) => {
        User.find({}, (err, users) => {
            if(err) {
                return res.json(err.errors);
            }
            return res.json(users);
        });
    },
    list: (req, res) => {
        User.findOne({_id: req.params.id}).populate('buckets').exec((err, user) => {
            if(err) {
                return res.json(err.errors);
            }
            return res.json(user);
        })
    },
    add: (req, res) => {
        owner = req.body.owner;
        bucket = new Bucket(req.body.bucket);
        bucket.save((err) => {
            if(err){
                return res.json(err.errors);
            }
            else{
                User.findOne({ _id: session.user_id},(err,user) => {
                    if (err){
                        return res.json(err.errors);
                    }
                    else{
                        user.buckets.push(bucket._id);
                        user.save((err) => {
                            if(err){
                                return res.json(err.errors);
                            }
                            else{
                                if(owner != session.user_id){
                                    User.findOne({ _id: owner}, (err, userb) => {
                                        if(err){
                                            return res.json(err.errors);
                                        }
                                        else{
                                            userb.buckets.push(bucket._id);
                                            userb.save((err) => {
                                                if(err) {
                                                    return res.json(err.errors);
                                                }
                                                else {
                                                    User.findOne({ _id: session.user_id}).populate('buckets').exec((err, buckets) => {
                                                        if(err)
                                                            res.json(err.errors);
                                                        return res.json(buckets)
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                                else{
                                    User.findOne({ _id: session.user_id}).populate('buckets').exec((err, buckets) => {
                                        if(err)
                                            res.json(err.errors);
                                        return res.json(buckets);
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    },
    updatebucket: (req,res) => {
        Bucket.findOneAndUpdate({ _id: req.body}, {$set: {done: req.body.done}}, (err, bucket) => {
            if(err){
                res.json(err.errors);
            }
            else {
                User.findOne({ _id: session.user_id}).populate('brackets').populate('_creator').exec((err, user) => {
                    if(err) {
                        return res.json(err.errors);
                    }
                    return res.json(user);
                });
            }
        });
    }
}