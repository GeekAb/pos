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
    
    create: function (req, res) {
        return res.json({
            todo: 'Not implemented yet!'
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

