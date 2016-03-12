/**
 * LoginController
 *
 * @description :: Server-side logic for managing Logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//
//global.jQuery = require('jquery');
//var bootstrap = require("bootstrap-material-design");

var passport = require('passport');

module.exports = {   
    
    
    index: function (req, res) {
        res.view(null, {
            title: 'Home'
        });
    },
    
    validate: function (req, res) {
        
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                return res.send(400, {
                    message : 'Login failed'
                });
                
            }
            req.logIn(user, function (err) {
                
                if (err) res.send(400, err);
                return res.send(200, {
                    message: 'login successful'
                });
            });
        })(req, res);
        
//        /*Get all params via post*/
//        var data = req.allParams();
//        
////        sails.log(Account.findByUsername("Abhishek"));
//
//        Account.findOneByUsername(data.username).exec(function (err, usr) {
//                if (err) {
//                    // We set an error header here,
//                    // which we access in the views an display in the alert call.
//                    res.set('error', 'DB Error');
//                    // The error object sent below is converted to JSON
//                    res.send(500, {
//                        error: "DB Error"
//                    });
//                } else {
//                    if (usr) {
//                        
//                        bcrypt.compare(data.password, usr.password, function(err, res) {
//                            // res == true
//                            
//                            if(res) {
//                                req.session.user = usr;
//                                res.send(usr);
//                            }
//                            else {
//                                res.set('error', 'Wrong Password');
//                                res.send(400, {
//                                    error: "Wrong Password"
//                                });
//                            }
//                        });
//                    } else {
//                        res.set('error', 'User not Found');
//                        res.send(404, {
//                            error: "User not Found"
//                        });
//                    }
//                }
//            });
//        
//        return res;
    },
    
    logout: function (req,res){
        req.logout();
        res.send('logout successful');
    },
    
    show : function (req, res, next) {
        sails.log(req.param('id'));
        Account.findOneById(req.param('id'), function (err, user) {
            res.send(user);
        });
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

