/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'Account',
  attributes: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    emailVerified: {
      type: 'boolean',
      defaultsTo: false
    },
    password: {
      type: 'string'
    },
    isSocial: {
      type: 'boolean',
      defaultsTo: false
    },
    socialProvider: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    accessToken: {
      type: 'string'
    },
    verificationToken: {
      type: 'number'
    },
    resetToken: {
      type: 'number'
    },
    avatar: {
      type: 'string',
      defaultsTo: 'https://s3.amazonaws.com/mevris-image-cdn/default-profile-avatar.png'
    },
    blacklist: {
      type: 'boolean',
      defaultsTo: false
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true,
    },
    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true,
    },
    updatedBy: {
      model: 'Account'
    },
    verifiedAt: {
      type: 'string',
      columnType: 'datetime',
    },
    isDeleted: {
      type: 'boolean',
      defaultsTo: false
    },
    deletedAt: {
      type: 'string',
      columnType: 'datetime',
    },
    deletedBy: {
      model: 'Account'
    }
    /** Models */
    // role: {
    //   model: 'Role'
    // }

  }

};

