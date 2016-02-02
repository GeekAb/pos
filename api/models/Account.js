/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* username, password, userid, status
*/

module.exports = {

    attributes: {
        username: {
            type: 'string',
            required : true
        },

        password: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
        
        userid: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
        
        status: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
    }
};
