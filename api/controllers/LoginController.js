/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//
//global.jQuery = require('jquery');
//var bootstrap = require("bootstrap-material-design");

module.exports = {   
    
    
    index: function (req, res) {
        res.view(null, {
            title: 'Home'
        });
    },
    
    validate: function (req, res) {
        /*Get all params via post*/
        var data = req.allParams();
        
//        sails.log(Account.findByUsername("Abhishek"));

        Account.findOneByUsername(data.username).exec(function (err, usr) {
                if (err) {
                    // We set an error header here,
                    // which we access in the views an display in the alert call.
                    res.set('error', 'DB Error');
                    // The error object sent below is converted to JSON
                    res.send(500, {
                        error: "DB Error"
                    });
                } else {
                    if (usr) {
//                        var hasher = require("password-hash");
//                        if (hasher.verify(data.password, usr.password)) {
                        
                        sails.log(data.password + usr.username);
                        if (data.password === usr.password) {
                            req.session.user = usr;
                            res.send(usr);
                        } else {
                            // Set the error header
                            res.set('error', 'Wrong Password');
                            res.send(400, {
                                error: "Wrong Password"
                            });
                        }
                    } else {
                        res.set('error', 'User not Found');
                        res.send(404, {
                            error: "User not Found"
                        });
                    }
                }
            });
        
        return res;
    },

    /**
     * CommentController.destroy()
     */
    destroy: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
        });
    },
};

