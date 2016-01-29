/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
* User – id, name, created at, modified at, status
*/

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required : true
        },

        status: {
            type : 'integer',
            required : true,
            enum : [0, 1, 2],
            defaultsTo : 1
        },
        
//        createdAt : {
//            type : 'date',
//            required : true,
//            defaultsTo : now()
//        },
//        
//        lastModified : {
//            type : 'datetime',
//            required : true,
//            defaultsTo : now()
//        },

    }
};

