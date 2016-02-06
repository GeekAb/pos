/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* username, password, userid, status
*/

module.exports = {

    schema : true,
    
    attributes: {
        username: {
            type: 'string',
            required : true
        },

        password: {
            type : 'string',
            required : true,
            defaultsTo : ''
        },
        
        userid: {
            model : 'User'
        },
        
        status: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
    },
    
    toJSON : function () {
        var obj = this.toObject();
        
        delete obj.password;
        
        return obj;
    }
};

