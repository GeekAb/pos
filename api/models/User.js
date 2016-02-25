/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* User – id, name, created at, modified at, status
*/

var bcrypt = require('bcrypt-nodejs');

module.exports = {
    
    schema : true,

    attributes: {
        name: {
            type: 'string',
            required : true
        },
        
        email: {
            type: 'email',
            required : true,
            unique: true
        },
        
        username: {
            type: 'string',
            required : true
        },

        password: {
            type : 'string',
            required : true,
            defaultsTo : ''
        },
        
        status: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
        
        toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
        }
    },
    
    beforeCreate: function (user, next) {
        
        user.password = bcrypt.hashSync(user.password);
        next();
//       bcrypt.genSalt(10, function (err, salt) {
//           bcrypt.hash(user.password, salt, function (err, hash) {
//               if (err) {
//                   console.log(err);
//                   cb(err);
//               } else {
//                   user.password = hash;
//                   cb(null, user);
//               }
//           });
//       });
    }
};

