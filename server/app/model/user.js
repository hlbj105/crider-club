'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    pass: { type: String },
    email: { type: String },
    location: { type: String },
    avatar: { type: String },

    score: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    level: { type: String },
    active: { type: Boolean, default: false },

    accessToken: { type: String },
  });

  UserSchema.index({ name: 1 }, { unique: true });
  UserSchema.index({ email: 1 }, { unique: true });
  UserSchema.index({ score: -1 });
  UserSchema.index({ accessToken: 1 });

  UserSchema.pre('save', function(next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('User', UserSchema);
};
