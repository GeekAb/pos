/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    showall : function (req, res, next) {

        User.find().exec(function (err, users) {
//            res.send(users);
            return res.view('account/index',{users : users});
        });
    }
    
};

